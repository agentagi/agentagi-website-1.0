/**
 * Utility functions for formatting token-related numbers
 */

/**
 * Format large numbers with commas (e.g., 1,000,000)
 */
export function formatNumber(num: number): string {
  if (num === null || num === undefined || isNaN(num)) return '--';
  return Math.round(num).toLocaleString('en-US');
}

/**
 * Format price with appropriate decimals (e.g., $0.0001234)
 */
export function formatPrice(price: number): string {
  if (price === null || price === undefined || isNaN(price)) return '--';

  if (price < 0.00001) {
    return price.toFixed(8);
  } else if (price < 0.01) {
    return price.toFixed(6);
  } else if (price < 1) {
    return price.toFixed(4);
  } else {
    return price.toFixed(2);
  }
}

/**
 * Format percentage with + or - sign (e.g., +5.23%)
 */
export function formatPercentage(percent: number): string {
  if (percent === null || percent === undefined || isNaN(percent)) return '--';

  const sign = percent >= 0 ? '+' : '';
  return `${sign}${percent.toFixed(2)}%`;
}

/**
 * Shorten large numbers to K/M/B (e.g., 1.5M)
 */
export function formatCompact(num: number): string {
  if (num === null || num === undefined || isNaN(num)) return '--';

  if (num >= 1_000_000_000) {
    return `${(num / 1_000_000_000).toFixed(2)}B`;
  } else if (num >= 1_000_000) {
    return `${(num / 1_000_000).toFixed(2)}M`;
  } else if (num >= 1_000) {
    return `${(num / 1_000).toFixed(2)}K`;
  } else {
    return num.toFixed(0);
  }
}

/**
 * Format SOL amount with decimals (e.g., 10.18)
 */
export function formatSol(sol: number): string {
  if (sol === null || sol === undefined || isNaN(sol)) return '--';

  // Show up to 4 decimal places for small amounts, 2 for larger amounts
  if (sol < 1) {
    return sol.toFixed(4);
  } else if (sol < 100) {
    return sol.toFixed(2);
  } else {
    return sol.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
}
