// Ethics and Limitations Section Component
// Discusses limitations of AlphaFold and ethical considerations
// Two-column layout: Limitations | Why They Matter

import { motion } from 'framer-motion';

const EthicsAndLimitationsSection = () => {
  // Limitations - edit these as needed
  const limitations = [
    {
      limitation: "It's a prediction, not reality",
      whyItMatters: "AlphaFold makes educated guesses based on patterns in data. While it is often accurate, predictions can be wrong, especially for unusual proteins or those affected by other conditions."
    },
    {
      limitation: "Doesn't capture dynamic behavior",
      whyItMatters: "Proteins aren't static—they move, flex, and change shape as they work. AlphaFold typically predicts one 'snapshot' structure, not how proteins move over time."
    },
    {
      limitation: "Limited to sequence-based predictions",
      whyItMatters: "Protein behavior can depend on the cellular environment, temperature, pH, and other factors that AlphaFold doesn't account for. The prediction might not match what happens in a living cell."
    },
    {
      limitation: "Training data bias",
      whyItMatters: "AlphaFold learned from existing protein structures, which are biased toward certain types of proteins that are easier to study. This could affect accuracy for understudied protein families."
    },
    {
      limitation: "Can't predict everything",
      whyItMatters: "Some proteins are intrinsically disordered (naturally lacking a fixed structure) or only fold properly with help from other molecules. AlphaFold struggles with these cases."
    }
  ];

  // Ethical questions - edit these as needed
  const ethicalQuestions = [
    "Could over-reliance on AI predictions slow down experimental work or cause scientists to miss important discoveries?",
    "How do we ensure equitable access to AlphaFold and similar tools globally, including in resource-limited settings?",
    "What are the implications for scientific jobs and funding if AI can do in minutes what used to require years of specialized training?",
    "Could AlphaFold predictions be misused, for example, in bioweapon design or other harmful applications?",
    "Who owns and controls AI-generated scientific knowledge, and how do we balance openness with concerns about misuse?",
    "How do we validate AI predictions responsibly without putting too much trust in 'black box' systems we don't fully understand?"
  ];

  return (
    <section id="ethics" className="py-20 bg-zinc-900 border-b-4 border-lime-400">
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
            Ethics & Limitations
          </h2>

          <p className="text-xl text-lime-400 mb-12 text-center max-w-3xl mx-auto">
            As powerful as AlphaFold is, it's important to understand its limitations and think 
            critically about the ethical implications of AI in science. (AI CAN BE WRONG).
          </p>

          {/* Two-Column Layout */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Limitations Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-lime-400 flex items-center uppercase">
                <svg className="w-7 h-7 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Limitations
              </h3>
              <div className="space-y-4">
                {limitations.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-zinc-800 p-5 border-2 border-lime-400 shadow-brutal-offset-lime-xs"
                  >
                    <h4 className="font-semibold text-lime-400 mb-2 uppercase">
                      {item.limitation}
                    </h4>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Why It Matters Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-fuchsia-400 flex items-center uppercase">
                <svg className="w-7 h-7 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Why It Matters
              </h3>
              <div className="space-y-4">
                {limitations.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-zinc-800 p-5 border-2 border-fuchsia-600 shadow-brutal-offset-fuchsia"
                  >
                    <p className="text-white text-sm leading-relaxed">
                      {item.whyItMatters}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Ethical Questions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-zinc-800 p-8 border-4 border-fuchsia-600 shadow-brutal-offset-fuchsia"
          >
            <h3 className="text-2xl font-bold mb-6 text-fuchsia-400 flex items-center uppercase">
              <svg className="w-7 h-7 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Ethical Questions to Consider
            </h3>
            <ul className="space-y-3">
              {ethicalQuestions.map((question, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 text-white"
                >
                  <span className="text-lime-400 font-bold flex-shrink-0 mt-1">•</span>
                  <span className="leading-relaxed">{question}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Final Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-8 bg-zinc-800 p-6 border-l-4 border-lime-400 shadow-brutal-offset-lime-sm"
          >
            <p className="text-white leading-relaxed">
              <strong className="text-lime-400">Bottom line:</strong> AlphaFold is an incredible tool, but it is
              exactly that, a tool. It doesn't replace experimental science, critical thinking, or careful validation. 
              As with any powerful technology, we need to use it wisely, understand its limitations, and think carefully 
              about its broader impacts on science and society.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EthicsAndLimitationsSection;

