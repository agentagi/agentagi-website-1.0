import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaCopy, FaCheck } from 'react-icons/fa';
import SectionTitle from '../ui/SectionTitle';

const Mission = () => {
  const [copied, setCopied] = useState(false);
  const contractAddress = '7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU'; // Replace with actual contract address

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <section className="section bg-white" id="contract">
      <div className="container-custom">
        <SectionTitle>CONTRACT ADDRESS</SectionTitle>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="card-solid p-6 md:p-8 bg-white">
            <div className="flex flex-col md:flex-row items-center gap-4">
              {/* Contract Address Box */}
              <div className="flex-1 w-full">
                <div className="bg-cute-lightblue/30 border-2 border-pudgy-navy rounded-lg p-4">
                  <p className="font-display text-pudgy-navy text-sm md:text-base break-all text-center md:text-left">
                    {contractAddress}
                  </p>
                </div>
              </div>

              {/* Copy Button */}
              <button
                onClick={handleCopy}
                className="flex-shrink-0 px-6 py-4 bg-cute-blue hover:bg-[#0091EA] text-white font-display uppercase tracking-wider text-sm rounded-lg transition-all duration-300 flex items-center gap-2 border-3 border-pudgy-navy shadow-chunky hover:shadow-chunky-lg"
              >
                {copied ? (
                  <>
                    <FaCheck className="text-lg" />
                    COPIED!
                  </>
                ) : (
                  <>
                    <FaCopy className="text-lg" />
                    COPY
                  </>
                )}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;
