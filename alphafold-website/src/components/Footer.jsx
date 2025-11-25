// Footer Component
// Course credit, citations, and disclaimers

const Footer = () => {
  return (
    <footer className="bg-black border-t-4 border-[#00ff88] py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Course Credit - Neobrutalism */}
          <div className="text-center mb-8">
            <div className="inline-block bg-[#00ff88] border-4 border-black px-6 py-3 mb-4 neo-shadow">
              <h3 className="text-xl font-black text-black uppercase">
                Science Storytellers
              </h3>
            </div>
            <div className="bg-[#1a1a1a] border-4 border-[#ff00ff] px-6 py-3 inline-block">
              <p className="text-[#ff00ff] font-bold uppercase">
                BIO 100 @ American University
              </p>
            </div>
          </div>

          {/* Citations */}
          <div className="bg-zinc-800 p-6 mb-8 border-2 border-lime-400 shadow-brutal-offset-lime-sm">
            <h4 className="text-lg font-semibold mb-4 text-lime-400 flex items-center uppercase">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              Primary Research Articles
            </h4>
            <div className="space-y-4 text-sm text-white">
              <div className="pl-4 border-l-2 border-lime-400">
                <p className="leading-relaxed">
                  <strong className="text-lime-400">AlphaFold 2:</strong> Jumper, J., Evans, R., 
                  Pritzel, A., et al. (2021). Highly accurate protein structure prediction with AlphaFold. 
                  <em className="text-white"> Nature</em>, 596, 583–589.
                </p>
                <p className="text-xs mt-1">
                  <a
                    href="https://www.nature.com/articles/s41586-021-03819-2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-fuchsia-400 hover:underline"
                  >
                    https://www.nature.com/articles/s41586-021-03819-2
                  </a>
                </p>
              </div>
              <div className="pl-4 border-l-2 border-fuchsia-600">
                <p className="leading-relaxed">
                  <strong className="text-fuchsia-400">AlphaFold 3:</strong> Abramson, J., Adler, J., 
                  Dunger, J., et al. (2024). Accurate structure prediction of biomolecular interactions 
                  with AlphaFold 3. <em className="text-white">Nature</em>, 630, 493–500.
                </p>
                <p className="text-xs mt-1">
                  <a
                    href="https://www.nature.com/articles/s41586-024-07487-w"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-fuchsia-400 hover:underline"
                  >
                    https://www.nature.com/articles/s41586-024-07487-w
                  </a>
                </p>
              </div>
            </div>
          </div>

         {/* Additional Resources */}
          <div className="text-center text-sm text-lime-400 mb-6">
            <p className="mb-2 uppercase font-bold">Additional Resources:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://alphafold.ebi.ac.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-fuchsia-400 hover:underline"
              >
                AlphaFold Database
              </a>
              <a
                href="https://www.rcsb.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-fuchsia-400 hover:underline"
              >
                Protein Data Bank
              </a>
              <a
                href="https://deepmind.google/technologies/alphafold/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-fuchsia-400 hover:underline"
              >
                Google DeepMind AlphaFold
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-lime-400 text-sm">
            <p> {new Date().getFullYear()} - Storytellers Project for BIO 100</p>
            <p className="mt-2">
              By, Charles Shaw
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

