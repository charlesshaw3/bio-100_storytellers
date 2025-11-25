// Impact Section Component
// Shows real-world applications and potential impact
// Includes mini-story cards about use cases

import { motion } from 'framer-motion';

const ImpactSection = () => {
  // Impact story cards - edit these as needed
  const impactStories = [
    {
      title: "Accelerating Drug Discovery",
      description: "Pharmaceutical companies are using AlphaFold to understand disease-related proteins and design new drugs. For example, researchers studying COVID-19 used AlphaFold predictions to understand viral proteins and explore potential treatments. What might have taken years can now happen in months.",
      color: "from-pink-500 to-rose-600"
    },
    {
      title: "Understanding Rare Diseases",
      description: "Many rare genetic diseases are caused by proteins that misfold or malfunction. AlphaFold helps researchers understand these proteins' structures, providing insights into what goes wrong and potential therapeutic strategies. This is especially important for diseases affecting small patient populations where research funding is limited.",
      color: "from-purple-500 to-indigo-600"
    },
    {
      title: "Environmental Applications",
      description: "Scientists are using AlphaFold to study enzymes that could break down plastics, capture carbon dioxide, or produce biofuels. Understanding the structure of these proteins could help us engineer better solutions to environmental challenges. Some researchers are even exploring proteins that could help clean up pollution.",
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Why I chose to study AlphaFold",
      description: "I ultimately chose to research Alphafold because I am very interested in artificial intelligence and technology in general. I wanted to learn more about how AI is being applied to biology and stumbled upon Alphafold while figuring out a topic.",
      color: "from-amber-500 to-orange-600",
      isPlaceholder: true
    } 
  ];

  return (
    <section id="impact" className="py-20 bg-zinc-950 border-b-4 border-lime-400">
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
            Real-World Impact
          </h2>

          <p className="text-xl text-lime-400 mb-12 text-center max-w-3xl mx-auto">
            AlphaFold is already changing how scientists approach 
            problems. Here are some ways this technology is making a difference:
          </p>

          {/* Impact Stories Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {impactStories.map((story, index) => (
              <motion.div
                key={story.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-zinc-800 border-2 shadow-brutal-offset-lime-sm hover:shadow-brutal-offset-fuchsia transition-all overflow-hidden ${
                  story.isPlaceholder ? 'border-dashed border-fuchsia-400' : 'border-lime-400'
                }`}
              >
                {/* Card Header */}
                <div className={`${story.isPlaceholder ? 'bg-zinc-700' : 'bg-fuchsia-600'} p-6 border-b-2 border-lime-400`}>
                  <h3 className="text-2xl font-bold text-white uppercase">
                    {story.title}
                  </h3>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <p className={`text-white leading-relaxed ${
                    story.isPlaceholder ? 'italic' : ''
                  }`}>
                    {story.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Impact Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 bg-zinc-800 border-4 border-fuchsia-600 p-8 shadow-brutal-offset-fuchsia"
          >
            <h3 className="text-2xl font-bold mb-4 text-fuchsia-400 uppercase">
              Open Access for All
            </h3>
            <p className="text-white leading-relaxed mb-4">
              One of the most important impacts is that AlphaFold is <strong className="text-lime-400">free and 
              open to everyone</strong>. Researchers at small universities, in developing countries, or at 
              non-profit organizations have the same access as scientists at wealthy institutions. This means that breakthrough discoveries could come from anywhere.
            </p>
            <p className="text-white leading-relaxed">
              
              
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactSection;

