import { motion } from 'framer-motion';
import Marquee from '../ui/Marquee';
import SectionTitle from '../ui/SectionTitle';
import { MARQUEE_DIVIDER_TEXT } from '../../utils/constants';
import agiWinter from '../../assets/images/agi-winter.webp';
import agiHoodie from '../../assets/images/agi-hoodie.webp';

const WhyFollow = () => {

  return (
    <section id="why-follow">
      {/* Dark Navy Marquee Divider */}
      <Marquee
        bgColor="bg-pudgy-navy"
        textColor="text-white"
        speed="normal"
        className="py-2 text-xl md:text-2xl"
      >
        {MARQUEE_DIVIDER_TEXT}
      </Marquee>

      {/* Jupiter Swap Section */}
      <div className="section bg-cute-paleblue/30 relative overflow-hidden">
        {/* Left Character - Pink Hoodie AGI */}
        <img
          src={agiHoodie}
          alt="AGI Hoodie Character"
          className="hidden lg:block absolute bottom-0 pointer-events-none z-10
                     w-36 sm:w-60 md:w-72 lg:w-96 xl:w-[480px] 2xl:w-[675px]
                     opacity-20 sm:opacity-30 md:opacity-40 lg:opacity-60 xl:opacity-80 2xl:opacity-100
                     left-1 sm:left-4 md:left-6 lg:left-8 xl:left-10"
        />

        {/* Right Character - Winter AGI */}
        <img
          src={agiWinter}
          alt="AGI Winter Character"
          className="hidden lg:block absolute bottom-0 pointer-events-none z-10
                     w-36 sm:w-60 md:w-72 lg:w-96 xl:w-[480px] 2xl:w-[675px]
                     opacity-20 sm:opacity-30 md:opacity-40 lg:opacity-60 xl:opacity-80 2xl:opacity-100
                     right-1 sm:right-4 md:right-6 lg:right-8 xl:right-10"
        />

        <div className="container-custom relative z-20">
          <SectionTitle>SWAP WITH $AGI</SectionTitle>

          <motion.p
            className="text-center text-pudgy-navy/70 max-w-3xl mx-auto mb-8 md:mb-12 px-4
                       text-sm sm:text-base md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Swap your Solana to $AGI and join the AI agent revolution! 💙
          </motion.p>

          {/* Jupiter Swap Widget */}
          <motion.div
            className="max-w-lg mx-auto px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <iframe
                id="jupiter-swap-iframe"
                src="https://jup.ag/swap/SOL-USDC?embed=true"
                width="100%"
                height="600"
                className="min-h-[500px] sm:min-h-[600px]"
                style={{
                  border: 'none',
                  margin: 0,
                  padding: 0,
                  display: 'block',
                }}
                title="Jupiter Swap"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyFollow;
