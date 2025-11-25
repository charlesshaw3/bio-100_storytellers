// AlphaFold 3 Section Component
// Explains the 2024 AlphaFold 3 paper and biomolecular interactions
// Includes comparison with AlphaFold 2

import { motion } from 'framer-motion';

const AlphaFold3Section = () => {
  return (
    <section id="alphafold-3" className="py-20 bg-zinc-950 border-b-4 border-lime-400">
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
            New advancements with AlphaFold 3
          </h2>

          <p className="text-xl text-lime-400 mb-12 text-center max-w-3xl mx-auto">
            In 2024, researchers introduced AlphaFold 3. This ultimately built off of AlphaFold 2, but also introduced the ability to predict molecular interactions. 
          </p>

          {/* Comparison Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* AlphaFold 2 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-zinc-800 p-8 border-2 border-lime-400 shadow-brutal-offset-lime-sm"
            >
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold text-lime-400 mb-2 uppercase">AlphaFold 2</h3>
                <p className="text-white text-sm">(Nature, 2021)</p>
              </div>
              <div className="space-y-3 text-white">
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-lime-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Predicts 3D structures of individual proteins</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-lime-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Revolutionized structural biology</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-lime-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Near experimental accuracy for many proteins</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-lime-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Freely available database with 200+ million structures</span>
                </div>
              </div>
            </motion.div>

            {/* AlphaFold 3 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-zinc-800 p-8 border-4 border-fuchsia-600 shadow-brutal-offset-fuchsia"
            >
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold text-fuchsia-400 mb-2 uppercase">AlphaFold 3</h3>
                <p className="text-white text-sm">(Nature, 2024)</p>
              </div>
              <div className="space-y-3 text-white">
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-fuchsia-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Predicts interactions</strong> between multiple molecules</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-fuchsia-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Works with proteins, DNA, RNA, and ligands</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-fuchsia-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Models how drugs bind to their targets</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-fuchsia-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Opens new doors for drug design and understanding biology</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* What This Means */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-zinc-800 border-2 border-lime-400 p-8 shadow-brutal-offset-lime-sm"
          >
            <h3 className="text-2xl font-bold mb-4 text-lime-400 uppercase">
              What This Means for Biology & Medicine
            </h3>
            <div className="space-y-4 text-white">
              <p className="leading-relaxed">
                <strong className="text-fuchsia-400">Understanding diseases:</strong> Many diseases are caused by proteins that 
                don't work correctly or interact with the wrong partners. AlphaFold 3 can help scientists visualize these 
                problematic interactions and understand what's going wrong at the molecular level.
              </p>
              <p className="leading-relaxed">
                <strong className="text-fuchsia-400">Accelerating drug discovery:</strong> Designing a new drug often involves 
                finding a small molecule that can bind to a specific protein target. AlphaFold 3 can predict how potential 
                drugs will fit into their targets, making the design process faster and more efficient.
              </p>
              <p className="leading-relaxed">
                <strong className="text-fuchsia-400">Decoding biological machinery:</strong> Proteins rarely work alone. They form 
                complex assemblies with other proteins, DNA, and RNA to carry out cellular functions. AlphaFold 3 helps 
                us understand these molecular machines in unprecedented detail.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AlphaFold3Section;

