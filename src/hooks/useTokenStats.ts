import { useState, useEffect, useCallback } from 'react';
import { TOKEN_CONFIG } from '../utils/constants';

export interface TokenStats {
  price: number;
  priceChange24h: number;
  marketCap: number;
  burnedAmount: number;
  buybackSol: number;
  totalSupply: number;
}

interface UseTokenStatsReturn {
  stats: TokenStats | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

// Helius RPC endpoint with API key from environment
const HELIUS_API_KEY = import.meta.env.VITE_HELIUS_API_KEY;
const SOLANA_RPC_ENDPOINT = `https://mainnet.helius-rpc.com/?api-key=${HELIUS_API_KEY}`;
const UPDATE_INTERVAL = 5 * 60 * 1000; // 5 minutes in milliseconds

/**
 * Custom hook to fetch and manage $AGI token statistics
 * Auto-refreshes every 5 minutes
 * Uses DexScreener API for price data and Ankr RPC for burn data
 */
export function useTokenStats(tokenAddress: string = TOKEN_CONFIG.address): UseTokenStatsReturn {
  const [stats, setStats] = useState<TokenStats | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  /**
   * Fetch total token supply using Ankr RPC
   */
  const fetchTotalSupply = async (): Promise<number> => {
    try {
      const response = await fetch(SOLANA_RPC_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jsonrpc: '2.0',
          id: 1,
          method: 'getTokenSupply',
          params: [tokenAddress],
        }),
      });

      const data = await response.json();

      if (data.error) {
        console.warn('Failed to fetch token supply:', data.error.message);
        return 0;
      }

      return data.result?.value?.uiAmount || 0;
    } catch (err) {
      console.warn('Error fetching token supply:', err);
      return 0;
    }
  };

  /**
   * Fetch SOL balance from buyback/burn wallet using Ankr RPC
   */
  const fetchBuybackSol = async (): Promise<number> => {
    try {
      const response = await fetch(SOLANA_RPC_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jsonrpc: '2.0',
          id: 1,
          method: 'getBalance',
          params: [TOKEN_CONFIG.buybackBurnWallet],
        }),
      });

      const data = await response.json();

      if (data.error) {
        console.warn('Failed to fetch SOL balance:', data.error.message);
        return 0;
      }

      // Convert lamports to SOL (1 SOL = 1,000,000,000 lamports)
      const lamports = data.result?.value || 0;
      const sol = lamports / 1_000_000_000;

      return sol;
    } catch (err) {
      console.warn('Error fetching SOL balance:', err);
      return 0;
    }
  };

  /**
   * Fetch total burned amount by comparing max supply with current supply
   * Burns reduce the total supply, so: Burned = Max Supply - Current Supply
   */
  const fetchBurnedAmount = async (currentSupply: number): Promise<number> => {
    try {
      // Get the mint account info to find the original max supply
      const response = await fetch(SOLANA_RPC_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jsonrpc: '2.0',
          id: 1,
          method: 'getAccountInfo',
          params: [
            tokenAddress,
            { encoding: 'jsonParsed' },
          ],
        }),
      });

      const data = await response.json();

      if (data.error) {
        console.warn('Failed to fetch mint info:', data.error.message);
        return 0;
      }

      // Get the supply from mint account
      const mintInfo = data.result?.value?.data?.parsed?.info;
      const supply = mintInfo?.supply;

      if (!supply) {
        console.warn('Could not find supply in mint info');
        return 0;
      }

      // Convert from raw amount to UI amount using decimals
      const decimals = mintInfo?.decimals || 6;
      const totalSupply = parseInt(supply) / Math.pow(10, decimals);

      // Calculate burned: If current supply is less than total ever minted
      const burned = Math.max(0, totalSupply - currentSupply);

      return burned;
    } catch (err) {
      console.warn('Error fetching burned amount:', err);
      return 0;
    }
  };

  /**
   * Fetch price and market data from DexScreener
   */
  const fetchPriceData = async () => {
    const response = await fetch(
      `https://api.dexscreener.com/latest/dex/tokens/${tokenAddress}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch token data');
    }

    const data = await response.json();
    const pairs = data.pairs || [];

    if (pairs.length === 0) {
      throw new Error('No trading pairs found');
    }

    // Use the first pair (usually highest liquidity)
    const pair = pairs[0];

    return {
      price: parseFloat(pair.priceUsd || '0'),
      priceChange24h: parseFloat(pair.priceChange?.h24 || '0'),
      marketCap: parseFloat(pair.marketCap || pair.fdv || '0'),
    };
  };

  /**
   * Fetch all token statistics
   */
  const fetchStats = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      // First fetch price data, buyback SOL, and total supply
      const [priceData, buybackSol, totalSupply] = await Promise.all([
        fetchPriceData(),
        fetchBuybackSol(),
        fetchTotalSupply(),
      ]);

      // Then fetch burned amount (needs current supply for calculation)
      const burnedAmount = await fetchBurnedAmount(totalSupply);

      setStats({
        price: priceData.price,
        priceChange24h: priceData.priceChange24h,
        marketCap: priceData.marketCap,
        burnedAmount,
        buybackSol,
        totalSupply,
      });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch token stats';
      setError(errorMessage);
      console.error('Error fetching token stats:', err);
    } finally {
      setLoading(false);
    }
  }, [tokenAddress]);

  // Initial fetch on mount
  useEffect(() => {
    fetchStats();

    // Set up auto-refresh every 5 minutes
    const intervalId = setInterval(() => {
      fetchStats();
    }, UPDATE_INTERVAL);

    // Cleanup interval on unmount
    return () => clearInterval(intervalId);
  }, [fetchStats]);

  return {
    stats,
    loading,
    error,
    refetch: fetchStats,
  };
}
