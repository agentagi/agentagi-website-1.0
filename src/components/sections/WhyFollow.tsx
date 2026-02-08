import { motion } from 'framer-motion';
import Marquee from '../ui/Marquee';
import SectionTitle from '../ui/SectionTitle';
import { MARQUEE_DIVIDER_TEXT } from '../../utils/constants';

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
      <div className="section bg-cute-paleblue/30">
        <div className="container-custom">
          <SectionTitle>SWAP WITH $AGI</SectionTitle>

          <motion.p
            className="text-center text-sm sm:text-base md:text-lg text-pudgy-navy/70 max-w-3xl mx-auto mb-8 md:mb-12 px-4"
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
