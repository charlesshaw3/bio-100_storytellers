// Big Question Section Component
// Explains the biological problem: what proteins are, why structure matters, and why prediction was so hard
// Includes a "Before/After AlphaFold" comparison

import { motion } from 'framer-motion';

const BigQuestionSection = () => {
  return (
    <section id="big-question" className="py-20 bg-[#1a1a1a]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Title - Neobrutalism */}
          <div className="inline-block mb-12 bg-[#ff00ff] border-4 border-black px-8 py-4 neo-shadow-lg">
            <h2 className="text-4xl md:text-5xl font-black text-black uppercase">
              Getting Started
            </h2>
          </div>

          {/* What is a protein? */}
          <div className="mb-12 bg-white border-4 border-black p-8 neo-shadow-lg">
            <div className="bg-[#00ff88] border-4 border-black px-4 py-2 inline-block mb-4">
              <h3 className="text-2xl font-black text-black uppercase">
                What is a protein?
              </h3>
            </div>
            <p className="text-lg text-black leading-relaxed font-bold">
              They are large molecules made up of chains of smaller building blocks called amino acids.
              Think of amino acids like letters in an alphabet (in this case there are 20 different letters) and they can be strung together in 
              countless different combinations to create different "words" (proteins). Every protein in your body is built this way.
            </p>
          </div>

          {/* Why does 3D structure matter? */}
          <div className="mb-12 bg-white border-4 border-black p-8 neo-shadow-lg">
            <div className="bg-[#ff00ff] border-4 border-black px-4 py-2 inline-block mb-4">
              <h3 className="text-2xl font-black text-black uppercase">
                Why does 3D structure matter?
              </h3>
            </div>
            <p className="text-lg text-black leading-relaxed font-bold mb-4">
              Once a protein is made, it doesn't stay as a simple chain. It folds up into a complex three dimensional shape 
              .  <span className="bg-[#ff00ff] px-2 py-1">THE SHAPE DETERMINES THE FUNCTION</span>.
            </p>
            <p className="text-lg text-black leading-relaxed font-bold">
              A protein's 3D structure determines what other molecules it can interact with and what 
              job it can do. If you want to understand how a protein works, or design a drug that can interact with it, you need 
              to know its shape. The problem is that determining a protein's shape can take months or even years through normal experimental methods.
            </p>
          </div>

          {/* Why was predicting structure so hard? */}
          <div className="mb-12 bg-white border-4 border-black p-8 neo-shadow-lg">
            <div className="bg-[#00d4ff] border-4 border-black px-4 py-2 inline-block mb-4">
              <h3 className="text-2xl font-black text-black uppercase">
                Why was predicting structure so hard?
              </h3>
            </div>
            <p className="text-lg text-black leading-relaxed font-bold">
              For over 50 years, scientists have known the sequence of amino acids determines how a protein folds, but predicting 
              the final 3D structure from just the sequence is a lot harder than it seems. A typical protein might 
              have hundreds of amino acids, and there are countless numbers of possible shapes it could fold into. Finding the 
              right one can be like finding a needle in a hay stack. Alphafold changed the game by being able to find that "needle" quickly and accurately.
            </p>
          </div>

          {/* Before/After Comparison - Neobrutalism */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Before AlphaFold */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[#ff4444] border-4 border-black p-6 neo-shadow"
            >
              <div className="bg-black border-4 border-white px-4 py-2 inline-block mb-4">
                <h4 className="text-xl font-black text-white uppercase flex items-center">
                  ✗ Before AlphaFold
                </h4>
              </div>
              <ul className="space-y-2 text-black font-bold">
                <li>▸ Months to years per structure</li>
                <li>▸ Expensive lab equipment needed</li>
                <li>▸ Many proteins unsolvable</li>
                <li>▸ Only ~100K structures known</li>
                <li>▸ Predictions often inaccurate</li>
              </ul>
            </motion.div>

            {/* After AlphaFold */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[#00ff88] border-4 border-black p-6 neo-shadow"
            >
              <div className="bg-black border-4 border-white px-4 py-2 inline-block mb-4">
                <h4 className="text-xl font-black text-white uppercase flex items-center">
                  ✓ After AlphaFold
                </h4>
              </div>
              <ul className="space-y-2 text-black font-bold">
                <li>▸ Minutes to hours instead</li>
                <li>▸ Accuracy matches experiments</li>
                <li>▸ Difficult proteins now solvable</li>
                <li>▸ Free access worldwide</li>
                <li>▸ Massive-scale biology unlocked</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BigQuestionSection;

