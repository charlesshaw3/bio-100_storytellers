// Glossary Section Component
// Displays key terms and definitions in an accessible format
// Responsive grid layout

import { motion } from 'framer-motion';
import { glossaryData } from '../data/glossaryData';

const GlossarySection = () => {
  return (
    <section id="glossary" className="py-20 bg-zinc-950 border-b-4 border-lime-400">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-lime-400 uppercase">
            Glossary
          </h2>

          <p className="text-xl text-lime-400 mb-12 text-center max-w-3xl mx-auto">
            Key terms to help you understand the science behind AlphaFold.
          </p>

          {/* Glossary Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {glossaryData.map((item, index) => (
              <motion.div
                key={item.term}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-zinc-800 p-6 border-2 border-lime-400 shadow-brutal-offset-lime-sm hover:shadow-brutal-offset-fuchsia transition-all"
              >
                {/* Term */}
                <h3 className="text-xl font-bold mb-3 text-lime-400 flex items-center uppercase">
                  <svg
                    className="w-5 h-5 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                    />
                  </svg>
                  {item.term}
                </h3>

                {/* Definition */}
                <p className="text-white leading-relaxed">
                  {item.definition}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Additional Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 bg-zinc-800 p-6 border-l-4 border-fuchsia-600 shadow-brutal-offset-fuchsia"
          >
            <div className="flex items-start gap-3">
              <svg
                className="w-6 h-6 text-fuchsia-400 flex-shrink-0 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <h4 className="font-semibold text-fuchsia-400 mb-2 uppercase">Want to Learn More?</h4>
                <p className="text-white text-sm leading-relaxed">
                  For more detailed scientific explanations, 
                  check out resources like the Protein Data Bank (PDB), Nature Education, or the original 
                  AlphaFold papers referenced at the bottom of this page.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GlossarySection;

