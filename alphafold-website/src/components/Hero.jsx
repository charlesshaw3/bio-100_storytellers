// Hero Section Component
// Landing page with title, subtitle, and call-to-action buttons
// Includes abstract CSS-based molecular pattern background

import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0a0a0a]"
    >
      {/* Geometric Background Pattern - Neobrutalism Style */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#00ff88] rotate-45"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#ff00ff] rotate-12"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#00d4ff] -rotate-12"></div>
      </div>


      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Main Title - Neobrutalism Style */}
          <div className="inline-block mb-8">
            <h1 className="text-5xl md:text-7xl font-black mb-0 text-[#00ff88] bg-black border-4 border-black px-8 py-4 neo-shadow-lg uppercase tracking-tight">
              Science Storytellers Project
            </h1>
          </div>
          
          {/* Subtitle */}
          <div className="inline-block mb-8">
            <h2 className="text-2xl md:text-3xl font-black text-[#ff00ff] bg-black border-4 border-[#ff00ff] px-6 py-3 neo-shadow uppercase">
              AlphaFold & AlphaFold 3
            </h2>
          </div>

          {/* Description */}
          <div className="bg-white text-black border-4 border-black p-8 neo-shadow-lg mb-8 max-w-3xl mx-auto">
            <p className="text-lg md:text-xl font-bold leading-relaxed">
              Artificial intelligence has revolutionized biology by solving a 50-year-old mystery: 
              predicting how proteins fold into their 3D shapes.
            </p>
          </div>

          <div className="bg-[#1a1a1a] border-4 border-[#00d4ff] px-6 py-3 inline-block mb-12">
            <p className="text-base md:text-lg text-[#00d4ff] font-bold uppercase">
              BIO 100 Science Storytellers
            </p>
          </div>

          {/* Call-to-Action Buttons - Neobrutalism Style */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.button
              whileHover={{ x: 4, y: 4 }}
              whileTap={{ x: 0, y: 0 }}
              onClick={() => scrollToSection('big-question')}
              className="px-8 py-4 bg-[#00ff88] text-black font-black border-4 border-black neo-shadow-lg hover:bg-[#00cc6a] transition-colors uppercase tracking-wide"
              aria-label="Start reading the story"
            >
              ▶ Start the Story
            </motion.button>

            <motion.button
              whileHover={{ x: 4, y: 4 }}
              whileTap={{ x: 0, y: 0 }}
              onClick={() => scrollToSection('quiz')}
              className="px-8 py-4 bg-[#ff00ff] text-black font-black border-4 border-black neo-shadow-lg hover:bg-[#cc00cc] transition-colors uppercase tracking-wide"
              aria-label="Jump to the interactive quiz"
            >
              ★ Jump to Quiz
            </motion.button>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-16"
          >
            <div className="flex flex-col items-center text-[#00ff88]">
              <span className="text-sm font-bold uppercase mb-2">Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-12 h-12 bg-[#00ff88] border-4 border-black flex items-center justify-center"
              >
                <svg
                  className="w-6 h-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

