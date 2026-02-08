import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { ECOSYSTEM_FLOW, ECOSYSTEM_RESULTS } from '../../utils/constants';

const Personality = () => {

  return (
    <section className="section bg-cute-lightblue/30" id="ecosystem">
      <div className="container-custom">
        <SectionTitle>$AGI ECOSYSTEM FLOW</SectionTitle>

        <motion.p
          className="text-center text-pudgy-navy/70 max-w-4xl mx-auto mb-12 md:mb-16
                     text-lg md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          $AGI ecosystem is designed to create continuous value for the $AGI token through a simple, transparent mechanism.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {ECOSYSTEM_FLOW.map((flow, index) => (
            <motion.div
              key={flow.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <div className="card-solid h-full flex flex-col p-8 bg-white">
                {/* Step Number */}
                <div className="mb-4">
                  <span className="text-6xl font-display text-cute-blue">
                    {flow.step}
                  </span>
                </div>

                {/* Step Header */}
                <h3
                  className="font-display text-pudgy-navy uppercase tracking-tight mb-3
                             text-2xl md:text-3xl"
                >
                  {flow.name}
                </h3>

                {/* Description */}
                <p className="text-pudgy-navy/60 text-base font-medium mb-4">
                  {flow.description}
                </p>

                {/* Details */}
                <p className="text-pudgy-navy/70 leading-relaxed">
                  {flow.details}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Results Section */}
        <motion.div
          className="mt-16 md:mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="card-solid p-8 md:p-10 bg-white">
            <h3
              className="font-display text-pudgy-navy uppercase tracking-tight mb-6 text-center
                         text-3xl md:text-4xl"
            >
              RESULT
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ECOSYSTEM_RESULTS.map((result, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-cute-blue flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p
                    className="text-pudgy-navy/80 leading-relaxed text-base md:text-lg"
                  >
                    {result}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Personality;
