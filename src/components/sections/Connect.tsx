import { motion } from 'framer-motion';
import NeonButton from '../ui/NeonButton';
import SectionTitle from '../ui/SectionTitle';
import telegramIcon from '../../assets/images/telegram-icon.webp';
import xIcon from '../../assets/images/x-icon.webp';
import dexscreenerIcon from '../../assets/images/dexscreener-icon.webp';

const Connect = () => {
  const platforms = [
    {
      name: 'Telegram',
      icon: telegramIcon,
      description: 'Join our awesome community! Daily updates and fun discussions!',
      link: 'https://t.me/AgentPad_Agi',
    },
    {
      name: 'X',
      icon: xIcon,
      description: 'Follow us for the latest news and announcements!',
      link: 'https://x.com/AgentPad_Agi',
    },
    {
      name: 'DexScreener',
      icon: dexscreenerIcon,
      description: 'Track $AGI live price and trading activity!',
      link: 'https://dexscreener.com/solana/your-pair', // Replace with actual link when available
    },
  ];

  return (
    <section className="section bg-white relative overflow-hidden" id="connect">
      <div className="container-custom relative z-20">
        <SectionTitle>JOIN $AGI&apos;S COMMUNITY</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <div className="card-solid p-8 text-center h-full flex flex-col">
                {/* Icon */}
                <div className="mb-4 flex items-center justify-center">
                  <img src={platform.icon} alt={platform.name} className="w-20 h-20 object-contain" />
                </div>

                <h3 className="text-2xl font-display mb-3 text-pudgy-navy uppercase">
                  {platform.name}
                </h3>
                <p className="text-pudgy-navy/60 mb-6 flex-grow">{platform.description}</p>
                <NeonButton variant="primary" href={platform.link}>
                  JOIN NOW
                </NeonButton>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Connect;
