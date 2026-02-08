import { motion } from 'framer-motion';
import { useTokenStats } from '../../hooks/useTokenStats';
import { formatNumber, formatPrice, formatPercentage, formatCompact } from '../../utils/tokenUtils';
import SectionTitle from '../ui/SectionTitle';

// Custom Icon Components
const PriceIcon = () => (
  <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
    <circle cx="32" cy="32" r="30" fill="#40C4FF" fillOpacity="0.2" stroke="#40C4FF" strokeWidth="3"/>
    <text x="32" y="42" textAnchor="middle" fill="#40C4FF" fontSize="32" fontWeight="bold">$</text>
  </svg>
);

const MarketCapIcon = () => (
  <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
    <circle cx="32" cy="32" r="30" fill="#40C4FF" fillOpacity="0.2" stroke="#40C4FF" strokeWidth="3"/>
    <path d="M20 38L28 26L36 32L44 20" stroke="#40C4FF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="28" cy="26" r="3" fill="#40C4FF"/>
    <circle cx="36" cy="32" r="3" fill="#40C4FF"/>
    <circle cx="44" cy="20" r="3" fill="#40C4FF"/>
  </svg>
);

const SupplyIcon = () => (
  <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
    <circle cx="32" cy="32" r="30" fill="#40C4FF" fillOpacity="0.2" stroke="#40C4FF" strokeWidth="3"/>
    <circle cx="24" cy="24" r="6" fill="#40C4FF"/>
    <circle cx="40" cy="24" r="6" fill="#40C4FF"/>
    <circle cx="24" cy="40" r="6" fill="#40C4FF"/>
    <circle cx="40" cy="40" r="6" fill="#40C4FF"/>
  </svg>
);

const BuybackIcon = () => (
  <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
    <circle cx="32" cy="32" r="30" fill="#40C4FF" fillOpacity="0.2" stroke="#40C4FF" strokeWidth="3"/>
    <path d="M38 28L44 32L38 36M26 36L20 32L26 28" stroke="#40C4FF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M44 32H32M20 32H32" stroke="#40C4FF" strokeWidth="4" strokeLinecap="round"/>
    <circle cx="32" cy="32" r="4" fill="#40C4FF"/>
  </svg>
);

const BurnIcon = () => (
  <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
    <circle cx="32" cy="32" r="30" fill="#40C4FF" fillOpacity="0.2" stroke="#40C4FF" strokeWidth="3"/>
    <path d="M32 18C32 18 24 26 24 32C24 36.4 27.6 40 32 40C36.4 40 40 36.4 40 32C40 28 36 24 32 18Z"
          fill="#40C4FF" fillOpacity="0.6" stroke="#40C4FF" strokeWidth="2"/>
    <path d="M32 26C32 26 29 29 29 31C29 32.7 30.3 34 32 34C33.7 34 35 32.7 35 31C35 29 32 26 32 26Z"
          fill="#40C4FF"/>
  </svg>
);

const TokenStats = () => {
  const { stats, loading, error } = useTokenStats();

  const topCards = [
    {
      icon: <SupplyIcon />,
      label: 'TOTAL SUPPLY',
      value: '1B',
      suffix: '$AGI',
      suffixColor: undefined,
    },
    {
      icon: <BuybackIcon />,
      label: 'TOTAL BUYBACK',
      value: stats ? formatNumber(stats.buybackSol) : '--',
      suffix: 'SOL',
      suffixColor: undefined,
    },
    {
      icon: <BurnIcon />,
      label: 'TOTAL BURNT',
      value: stats ? formatCompact(stats.burnedAmount) : '--',
      suffix: '$AGI',
      suffixColor: undefined,
    },
  ];

  const bottomCards = [
    {
      icon: <PriceIcon />,
      label: 'PRICE',
      value: stats ? `$${formatPrice(stats.price)}` : '--',
      suffix: stats && stats.priceChange24h !== 0 ? formatPercentage(stats.priceChange24h) : '',
      suffixColor: stats && stats.priceChange24h >= 0 ? 'text-green-600' : 'text-red-600',
    },
    {
      icon: <MarketCapIcon />,
      label: 'MARKET CAP',
      value: stats ? `$${formatCompact(stats.marketCap)}` : '--',
      suffix: '',
      suffixColor: undefined,
    },
  ];

  return (
    <section className="section bg-cute-lightblue/30" id="stats">
      <div className="container-custom">
        <SectionTitle>LIVE COUNTER $AGI</SectionTitle>

        <motion.p
          className="text-center text-pudgy-navy/70 max-w-4xl mx-auto mb-12 md:mb-16 text-lg md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Real-time token metrics powered by DexScreener. Auto-updates every 5 minutes.
        </motion.p>

        {/* Error Message */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto mb-8"
          >
            <div className="card-solid p-6 bg-white border-2 border-red-300">
              <p className="text-center text-pudgy-navy/70">
                ⚠️ Unable to fetch live data. Please try again later.
              </p>
            </div>
          </motion.div>
        )}

        {/* Top Row - 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-6 lg:mb-8">
          {topCards.map((card, index) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="card-solid h-full flex flex-col items-center justify-center p-8 bg-white relative text-center">
                {/* Loading State */}
                {loading && !stats && card.label !== 'TOTAL SUPPLY' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-white/90 rounded-lg">
                    <div className="animate-spin rounded-full h-10 w-10 border-4 border-cute-blue border-t-transparent" />
                  </div>
                )}

                {/* Icon */}
                <div className="mb-4 flex items-center justify-center">
                  {card.icon}
                </div>

                {/* Label */}
                <h3 className="font-display text-pudgy-navy uppercase tracking-tight mb-3 text-xl md:text-2xl text-center">
                  {card.label}
                </h3>

                {/* Value */}
                <p className="text-3xl md:text-4xl font-display text-cute-blue mb-2 text-center">
                  {card.value}
                </p>

                {/* Suffix (24h change for price) */}
                {card.suffix && (
                  <p className={`text-lg font-bold text-center ${card.suffixColor || 'text-pudgy-navy/70'}`}>
                    {card.suffix}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Row - 2 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-3xl mx-auto">
          {bottomCards.map((card, index) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (topCards.length + index) * 0.1, duration: 0.6 }}
            >
              <div className="card-solid h-full flex flex-col items-center justify-center p-8 bg-white relative text-center">
                {/* Loading State */}
                {loading && !stats && (
                  <div className="absolute inset-0 flex items-center justify-center bg-white/90 rounded-lg">
                    <div className="animate-spin rounded-full h-10 w-10 border-4 border-cute-blue border-t-transparent" />
                  </div>
                )}

                {/* Icon */}
                <div className="mb-4 flex items-center justify-center">
                  {card.icon}
                </div>

                {/* Label */}
                <h3 className="font-display text-pudgy-navy uppercase tracking-tight mb-3 text-xl md:text-2xl text-center">
                  {card.label}
                </h3>

                {/* Value */}
                <p className="text-3xl md:text-4xl font-display text-cute-blue mb-2 text-center">
                  {card.value}
                </p>

                {/* Suffix */}
                {card.suffix && (
                  <p className={`text-lg font-bold text-center ${card.suffixColor || 'text-pudgy-navy/70'}`}>
                    {card.suffix}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        {stats && !loading && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-pudgy-navy/60 text-sm md:text-base">
              ✨ Data refreshes automatically every 5 minutes
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default TokenStats;
