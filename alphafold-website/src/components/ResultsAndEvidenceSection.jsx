// Results and Evidence Section Component
// Summarizes key results from both papers in accessible language
// Uses card grid layout for different aspects (Accuracy, Speed, Generalization)

import { motion } from 'framer-motion';

const ResultsAndEvidenceSection = () => {
  // Results cards - edit these as needed
  const results = [
    {
      title: "Accuracy",
      description: "AlphaFold predictions were often indistinguishable from experimental structures. In CASP14, it achieved a median accuracy of 0.96 Angstroms—that's less than the width of a single atom!",
      highlight: "Near-atomic precision"
    },
    {
      title: "Speed",
      description: "What used to take months or years in the lab can now be predicted in minutes to hours. This dramatic speedup means researchers can study thousands of proteins in the time it used to take to solve one.",
      highlight: "1000x faster than experiments"
    },
    {
      title: "Generalization",
      description: "AlphaFold works well even for proteins with no close relatives in the database of known structures. This is crucial because these are often the most interesting and important proteins to study.",
      highlight: "Works on novel proteins"
    },
    {
      title: "Scale",
      description: "The AlphaFold database now contains predicted structures for over 200 million proteins—nearly every protein known to science. This has created an unprecedented resource for researchers worldwide.",
      highlight: "200+ million structures"
    },
    {
      title: "Biomolecular Interactions",
      description: "AlphaFold 3 accurately predicts how proteins interact with DNA, RNA, and small molecules. Early benchmarks show it outperforms specialized tools that were designed for just one type of interaction.",
      highlight: "Multi-molecule predictions"
    },
    {
      title: "Reproducibility",
      description: "Independent researchers have validated AlphaFold's predictions experimentally. When they solve structures in the lab, they consistently find that AlphaFold was right—sometimes discovering that earlier experimental structures were the ones with errors!",
      highlight: "Validated by experiments"
    }
  ];

  return (
    <section id="results" className="py-20 bg-zinc-900 border-b-4 border-lime-400">
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
            Results & Evidence
          </h2>

          <p className="text-xl text-lime-400 mb-12 text-center max-w-3xl mx-auto">
            These results have been 
            published in peer-reviewed articles.
          </p>

          {/* Results Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {results.map((result, index) => (
              <motion.div
                key={result.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zinc-800 p-6 border-2 border-lime-400 shadow-brutal-offset-lime-sm hover:shadow-brutal-offset-fuchsia transition-all"
              >
                {/* Title */}
                <h3 className="text-xl font-bold mb-2 text-lime-400 uppercase">
                  {result.title}
                </h3>
                
                {/* Highlight */}
                <p className="text-sm font-semibold text-fuchsia-400 mb-3">
                  {result.highlight}
                </p>
                
                {/* Description */}
                <p className="text-white text-sm leading-relaxed">
                  {result.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Disclaimer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-zinc-800 border-l-4 border-fuchsia-600 p-6 shadow-brutal-offset-fuchsia"
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
                <h4 className="font-semibold text-fuchsia-400 mb-2 uppercase">Citations</h4>
                <p className="text-white text-sm leading-relaxed">
                  All information was from the original research articles: Jumper et al., Nature (2021) and Abramson et al., Nature (2024).
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsAndEvidenceSection;

