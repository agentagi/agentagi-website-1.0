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
  lastUpdated: number | null;
  secondsUntilNextUpdate: number;
  refetch: () => Promise<void>;
}

// Helius RPC endpoint with API key from environment
const HELIUS_API_KEY = import.meta.env.VITE_HELIUS_API_KEY;
const SOLANA_RPC_ENDPOINT = `https://mainnet.helius-rpc.com/?api-key=${HELIUS_API_KEY}`;
const FAST_UPDATE_INTERVAL = 30 * 1000; // 30 seconds for price + supply (fast-changing data)
const SLOW_UPDATE_INTERVAL = 5 * 60 * 1000; // 5 minutes for buyback SOL (slow-changing, expensive API)

/**
 * Custom hook to fetch and manage $AGI token statistics
 * Auto-refreshes fast data (price, supply) every 30 seconds
 * Auto-refreshes slow data (buyback SOL) every 5 minutes
 * Uses DexScreener API for price data and Helius RPC for blockchain data
 */
export function useTokenStats(tokenAddress: string = TOKEN_CONFIG.address): UseTokenStatsReturn {
  const [stats, setStats] = useState<TokenStats | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<number | null>(null);
  const [secondsUntilNextUpdate, setSecondsUntilNextUpdate] = useState<number>(30);

  /**
   * Fetch total token supply using Helius RPC
   */
  const fetchTotalSupply = async (): Promise<number> => {
    try {
      if (!HELIUS_API_KEY) {
        console.warn('Helius API key not configured');
        return TOKEN_CONFIG.originalSupply; // Return original supply as fallback
      }

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

      if (!response.ok) {
        console.warn('RPC request failed:', response.status, response.statusText);
        return TOKEN_CONFIG.originalSupply; // Return original supply as fallback
      }

      const data = await response.json();
      console.log('Token supply response:', data);

      if (data.error) {
        console.warn('Failed to fetch token supply:', data.error.message);
        return TOKEN_CONFIG.originalSupply; // Return original supply as fallback
      }

      const supply = data.result?.value?.uiAmount || TOKEN_CONFIG.originalSupply;
      console.log('Current token supply:', supply);
      return supply;
    } catch (err) {
      console.warn('Error fetching token supply:', err);
      return TOKEN_CONFIG.originalSupply; // Return original supply as fallback
    }
  };

  /**
   * Fetch total SOL spent on buybacks by analyzing transaction history
   */
  const fetchBuybackSol = async (): Promise<number> => {
    try {
      if (!HELIUS_API_KEY) {
        console.warn('Helius API key not configured');
        return 0;
      }

      // Use Helius enhanced API to get transaction history
      const response = await fetch(
        `https://api.helius.xyz/v0/addresses/${TOKEN_CONFIG.buybackBurnWallet}/transactions?api-key=${HELIUS_API_KEY}&limit=100&type=SWAP`
      );

      if (!response.ok) {
        console.warn('Failed to fetch transaction history:', response.status, response.statusText);
        return 0;
      }

      const transactions = await response.json();

      // Handle empty or invalid response
      if (!Array.isArray(transactions)) {
        console.warn('Invalid transaction history response format');
        return 0;
      }

      let totalSolSpent = 0;

      for (const tx of transactions) {
        // Look for swap/buy transactions (type is usually SWAP or has token transfers)
        const hasTokenTransfer = tx.tokenTransfers && Array.isArray(tx.tokenTransfers) && tx.tokenTransfers.length > 0;
        const hasNativeTransfer = tx.nativeTransfers && Array.isArray(tx.nativeTransfers) && tx.nativeTransfers.length > 0;

        // Check if this is a buyback transaction (buying $AGI tokens)
        if (hasTokenTransfer) {
          const agiTransfer = tx.tokenTransfers.find(
            (transfer: any) => transfer.mint === tokenAddress &&
            transfer.toUserAccount === TOKEN_CONFIG.buybackBurnWallet
          );

          if (agiTransfer && hasNativeTransfer) {
            // Sum up SOL spent (native transfers from the buyback wallet)
            const solSpent = tx.nativeTransfers
              .filter((transfer: any) => transfer.fromUserAccount === TOKEN_CONFIG.buybackBurnWallet)
              .reduce((sum: number, transfer: any) => sum + (transfer.amount || 0), 0);

            // Convert lamports to SOL and add to total
            totalSolSpent += solSpent / 1_000_000_000;
          }
        }
      }

      console.log('Total SOL spent on buybacks:', totalSolSpent);
      return totalSolSpent;
    } catch (err) {
      console.warn('Error fetching buyback history:', err);
      return 0;
    }
  };

  /**
   * Calculate total burned amount by comparing original supply with current supply
   * Burns reduce the total supply, so: Burned = Original Supply - Current Supply
   */
  const calculateBurnedAmount = (currentSupply: number): number => {
    // Use the original supply from config (1 billion tokens)
    const originalSupply = TOKEN_CONFIG.originalSupply;

    // Calculate burned: Original supply minus current circulating supply
    const burned = Math.max(0, originalSupply - currentSupply);

    return burned;
  };

  /**
   * Fetch price and market data from DexScreener
   */
  const fetchPriceData = async () => {
    try {
      const response = await fetch(
        `https://api.dexscreener.com/latest/dex/tokens/${tokenAddress}`
      );

      if (!response.ok) {
        console.warn('DexScreener API error:', response.status, response.statusText);
        throw new Error(`Failed to fetch token data: ${response.status}`);
      }

      const data = await response.json();
      console.log('DexScreener response:', data);

      const pairs = data.pairs || [];

      if (pairs.length === 0) {
        console.warn('No trading pairs found for token:', tokenAddress);
        throw new Error('No trading pairs found');
      }

      // Use the first pair (usually highest liquidity)
      const pair = pairs[0];
      console.log('Using pair:', pair.pairAddress, 'DEX:', pair.dexId);

      return {
        price: parseFloat(pair.priceUsd || '0'),
        priceChange24h: parseFloat(pair.priceChange?.h24 || '0'),
        marketCap: parseFloat(pair.marketCap || pair.fdv || '0'),
      };
    } catch (err) {
      console.error('Error in fetchPriceData:', err);
      throw err;
    }
  };

  /**
   * Fetch fast-changing data (price + supply)
   * Called every 30 seconds
   */
  const fetchFastData = useCallback(async () => {
    try {
      console.log('Fetching fast data (price + supply)...');

      const [priceDataResult, totalSupply] = await Promise.allSettled([
        fetchPriceData(),
        fetchTotalSupply(),
      ]);

      // Handle price data (use fallback if missing)
      let priceData;
      if (priceDataResult.status === 'rejected') {
        console.warn('Price data unavailable:', priceDataResult.reason);
        priceData = { price: 0, priceChange24h: 0, marketCap: 0 };
      } else {
        priceData = priceDataResult.value;
      }

      // Handle total supply (critical - use original supply as fallback)
      const totalSupplyValue = totalSupply.status === 'fulfilled' ? totalSupply.value : TOKEN_CONFIG.originalSupply;

      // Calculate burned amount
      const burnedAmount = calculateBurnedAmount(totalSupplyValue);

      // Update stats while preserving buyback SOL from previous state
      setStats(prevStats => ({
        price: priceData.price,
        priceChange24h: priceData.priceChange24h,
        marketCap: priceData.marketCap,
        burnedAmount,
        buybackSol: prevStats?.buybackSol || 0,
        totalSupply: totalSupplyValue,
      }));

      setLastUpdated(Date.now());
      setSecondsUntilNextUpdate(30); // Reset countdown

      // Set informational message if price data is unavailable
      if (priceData.price === 0) {
        setError('Price data unavailable - token may not have active trading pairs yet');
      } else {
        setError(null);
      }
    } catch (err) {
      console.error('Error fetching fast data:', err);
      // Don't throw - keep existing data
    }
  }, [tokenAddress]);

  /**
   * Fetch slow-changing data (buyback SOL)
   * Called every 5 minutes
   */
  const fetchSlowData = useCallback(async () => {
    try {
      console.log('Fetching slow data (buyback SOL)...');
      const buybackSol = await fetchBuybackSol();

      // Update only buyback SOL while preserving other stats
      setStats(prevStats => prevStats ? {
        ...prevStats,
        buybackSol,
      } : null);
    } catch (err) {
      console.error('Error fetching slow data:', err);
      // Don't throw - keep existing data
    }
  }, []);

  /**
   * Fetch all token statistics (initial load)
   */
  const fetchStats = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      console.log('Fetching all token stats for:', tokenAddress);
      console.log('Using Helius API key:', HELIUS_API_KEY ? 'Configured' : 'Missing');

      // Fetch all data in parallel on initial load
      const [priceDataResult, buybackSol, totalSupply] = await Promise.allSettled([
        fetchPriceData(),
        fetchBuybackSol(),
        fetchTotalSupply(),
      ]);

      // Handle price data (use fallback if missing - token may not have trading pairs yet)
      let priceData;
      if (priceDataResult.status === 'rejected') {
        console.warn('Price data unavailable:', priceDataResult.reason);
        priceData = { price: 0, priceChange24h: 0, marketCap: 0 };
        // Only set error if we also can't get supply data
        if (totalSupply.status === 'rejected') {
          throw new Error('Unable to fetch token data from blockchain');
        }
      } else {
        priceData = priceDataResult.value;
      }

      // Handle buyback SOL (non-critical - use 0 if missing)
      const buybackSolValue = buybackSol.status === 'fulfilled' ? buybackSol.value : 0;

      // Handle total supply (critical - use original supply as fallback)
      const totalSupplyValue = totalSupply.status === 'fulfilled' ? totalSupply.value : TOKEN_CONFIG.originalSupply;

      // Calculate burned amount from original supply vs current supply
      const burnedAmount = calculateBurnedAmount(totalSupplyValue);

      const newStats = {
        price: priceData.price,
        priceChange24h: priceData.priceChange24h,
        marketCap: priceData.marketCap,
        burnedAmount,
        buybackSol: buybackSolValue,
        totalSupply: totalSupplyValue,
      };

      console.log('Successfully fetched stats:', newStats);
      setStats(newStats);
      setLastUpdated(Date.now());
      setSecondsUntilNextUpdate(30);

      // Set informational message if price data is unavailable
      if (priceData.price === 0) {
        setError('Price data unavailable - token may not have active trading pairs yet');
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch token stats';
      setError(errorMessage);
      console.error('Error fetching token stats:', err);

      // Set default stats to show something to users even on error
      setStats({
        price: 0,
        priceChange24h: 0,
        marketCap: 0,
        burnedAmount: 0,
        buybackSol: 0,
        totalSupply: TOKEN_CONFIG.originalSupply,
      });
    } finally {
      setLoading(false);
    }
  }, [tokenAddress, fetchFastData]);

  // Countdown timer - updates every second
  useEffect(() => {
    const countdownId = setInterval(() => {
      setSecondsUntilNextUpdate(prev => {
        if (prev <= 1) {
          return 30; // Reset to 30 when it hits 0
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(countdownId);
  }, []);

  // Initial fetch on mount
  useEffect(() => {
    fetchStats();
  }, [fetchStats]);

  // Fast updates - price + supply every 30 seconds
  useEffect(() => {
    const fastIntervalId = setInterval(() => {
      fetchFastData();
    }, FAST_UPDATE_INTERVAL);

    return () => clearInterval(fastIntervalId);
  }, [fetchFastData]);

  // Slow updates - buyback SOL every 5 minutes
  useEffect(() => {
    const slowIntervalId = setInterval(() => {
      fetchSlowData();
    }, SLOW_UPDATE_INTERVAL);

    return () => clearInterval(slowIntervalId);
  }, [fetchSlowData]);

  return {
    stats,
    loading,
    error,
    lastUpdated,
    secondsUntilNextUpdate,
    refetch: fetchStats,
  };
}
