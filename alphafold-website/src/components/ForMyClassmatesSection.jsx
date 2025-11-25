// For My Classmates Section Component
// Discussion prompts for the BIO 100 Research Symposium
// Prominent, easy-to-find prompts for Canvas discussion

import { motion } from 'framer-motion';
import { discussionPrompts } from '../data/discussionPrompts';

const ForMyClassmatesSection = () => {
  return (
    <section id="discussion" className="py-20 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          {/* Section Title - Neobrutalism */}
          <div className="text-center mb-8">
            <div className="inline-block bg-[#00d4ff] border-4 border-black px-8 py-4 mb-4 neo-shadow-lg">
              <h2 className="text-4xl md:text-5xl font-black text-black uppercase">
                For My Classmates
              </h2>
            </div>
            <div className="inline-block bg-black border-4 border-[#ff00ff] px-6 py-3 neo-shadow">
              <p className="text-lg font-black text-[#ff00ff] uppercase">
                Discussion Prompts
              </p>
            </div>
          </div>

          {/* Introduction - Neobrutalism */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white border-4 border-black p-8 mb-12 neo-shadow-lg"
          >
            <p className="text-black text-center leading-relaxed font-bold">
              👋 Hey classmates! Below are the discussion questions for our <span className="bg-[#00ff88] px-2 py-1">Scientific Storytellers Research Symposium</span>. 
              Take your time to think about them—there are no "wrong" answers. Excited to hear your perspectives!
            </p>
          </motion.div>

          {/* Discussion Prompts - Neobrutalism */}
          <div className="space-y-8">
            {discussionPrompts.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border-4 border-black neo-shadow-lg overflow-hidden"
              >
                {/* Question Number Header */}
                <div className="bg-[#ff00ff] px-6 py-4 border-b-4 border-black">
                  <h3 className="text-2xl font-black text-black flex items-center uppercase">
                    <span className="flex-shrink-0 w-12 h-12 bg-black flex items-center justify-center mr-4 text-2xl text-[#ff00ff] border-4 border-white">
                      {item.id}
                    </span>
                    Question {item.id}
                  </h3>
                </div>

                {/* Question Content */}
                <div className="p-8">
                  <p className="text-lg md:text-xl text-black leading-relaxed font-bold">
                    {item.prompt}
                  </p>
                </div>

                {/* Response Reminder */}
                <div className="bg-black px-6 py-3 border-t-4 border-[#00ff88]">
                  <p className="text-sm text-[#00ff88] font-bold uppercase">
                    💬 Respond on Canvas Discussion Board
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Closing Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 bg-blue-900/20 p-8 rounded-lg border-2 border-blue-500/50 text-center"
          >
            <div className="text-4xl mb-4">🧪✨</div>
            <h3 className="text-2xl font-bold mb-3 text-blue-300">
              Thank You for Engaging!
            </h3>
            <p className="text-slate-300 leading-relaxed max-w-2xl mx-auto">
              I hope you found this project interesting and learned something new about how AI 
              is transforming biology. I'm looking forward to reading your thoughts and having 
              great discussions in class. Science is better when we explore it together!
            </p>
          </motion.div>

          {/* Canvas Reminder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <div className="inline-flex items-center gap-2 bg-purple-600 px-6 py-3 rounded-full shadow-lg">
              <svg
                className="w-5 h-5 text-white"
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
              <span className="font-semibold text-white">
                Don't forget to post your responses on Canvas!
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ForMyClassmatesSection;

