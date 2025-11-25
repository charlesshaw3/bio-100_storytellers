// How AlphaFold Works Section Component
// Explains the 2021 AlphaFold paper at a high level
// Includes a visual timeline and CASP explanation

import { motion } from 'framer-motion';

const HowAlphaFoldWorksSection = () => {
  // Timeline steps - edit these as needed
  const steps = [
    {
      number: 1,
      title: "Input: Amino Acid Sequence",
      description: "AlphaFold starts with the sequence of amino acids that make up the protein, plus information about similar proteins found in nature (evolutionary data)."
    },
    {
      number: 2,
      title: "Neural Network Processing",
      description: "A powerful AI system (called a neural network) analyzes patterns learned from thousands of known protein structures. It's like having studied millions of origami patterns to predict how a new one will fold."
    },
    {
      number: 3,
      title: "Structure Prediction",
      description: "The AI generates a predicted 3D structure, essentially calculating where each atom should be positioned in space."
    },
    {
      number: 4,
      title: "Confidence Estimate",
      description: "AlphaFold also tells you how confident it is in each part of the prediction, so scientists know which regions are reliable and which might need experimental verification."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-zinc-900 border-b-4 border-lime-400">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-lime-400 uppercase">
            How AlphaFold Works
          </h2>

          <p className="text-xl text-lime-400 mb-12 text-center max-w-3xl mx-auto">
           
            Here's the basic idea of how AlphaFold works in four steps:
          </p>

          {/* Timeline */}
          <div className="space-y-6 mb-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                {/* Step Number */}
                <div className="flex-shrink-0 w-16 h-16 bg-fuchsia-600 border-4 border-lime-400 flex items-center justify-center text-white font-bold text-2xl shadow-brutal-offset-lime">
                  {step.number}
                </div>

                {/* Step Content */}
                <div className="flex-1 bg-zinc-800 border-2 border-lime-400 p-6 shadow-brutal-offset-lime-sm">
                  <h3 className="text-xl font-semibold mb-2 text-lime-400 uppercase">
                    {step.title}
                  </h3>
                  <p className="text-white leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow (except for last step) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex items-center justify-center w-8">
                    <svg
                      className="w-6 h-6 text-lime-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* CASP Callout */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-zinc-800 border-4 border-fuchsia-600 p-8 shadow-brutal-offset-fuchsia"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <svg
                  className="w-12 h-12 text-fuchsia-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-fuchsia-400 uppercase">
                  The CASP14 Breakthrough
                </h3>
                <p className="text-white leading-relaxed mb-3">
                  <strong className="text-lime-400">CASP</strong> (Critical Assessment of protein Structure Prediction) 
                  is like the Olympics of protein structure prediction. Every two years, research teams compete to predict 
                  structures of proteins that have been recently solved in the lab but not yet published.
                </p>
                <p className="text-white leading-relaxed">
                  In 2020 (CASP14), AlphaFold's predictions were so accurate that they were often indistinguishable from 
                  experimental results. Many scientists described it as a solution to the 50-year-old protein folding problem. 
                  It was a genuine "holy grail" moment for computational biology.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowAlphaFoldWorksSection;

