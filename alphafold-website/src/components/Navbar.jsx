// Navbar Component
// Sticky navigation bar with dropdown menu for all sections
// Mobile-responsive with hamburger menu

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Navigation items - edit these if you add/remove sections
  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'Getting Started', id: 'big-question' },
    { label: 'How AlphaFold Works', id: 'how-it-works' },
    { label: 'AlphaFold 3', id: 'alphafold-3' },
    { label: 'Real-World Impact', id: 'impact' },
    { label: 'Ethics & Limitations', id: 'ethics' },
    { label: 'Quiz', id: 'quiz' },
    { label: 'Glossary', id: 'glossary' }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
      setDropdownOpen(false);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b-4 border-[#00ff88]">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Title - Neobrutalism */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-xl md:text-2xl font-black text-[#00ff88] hover:text-[#00cc6a] transition-colors uppercase tracking-tight"
            aria-label="Go to homepage"
          >
            BIO-100
          </button>

          {/* Desktop Navigation - Dropdown */}
          <div ref={dropdownRef} className="hidden lg:flex items-center relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="px-6 py-3 text-white bg-[#ff00ff] border-4 border-black neo-shadow-sm font-black uppercase tracking-tight hover:bg-[#cc00cc] transition-colors flex items-center gap-2"
              aria-label="Toggle sections menu"
              aria-expanded={dropdownOpen}
            >
              Sections
              <svg
                className={`w-5 h-5 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={3}
              >
                <path strokeLinecap="square" strokeLinejoin="miter" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full right-0 mt-2 w-64 bg-black border-4 border-[#00ff88] neo-shadow-lg z-50"
                >
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="block w-full text-left px-4 py-3 text-white hover:bg-[#00ff88] hover:text-black border-b-2 border-[#00ff88] last:border-b-0 font-bold uppercase transition-colors"
                      aria-label={`Navigate to ${item.label}`}
                    >
                      {item.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Menu Button - Neobrutalism */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-3 text-white bg-[#ff00ff] border-4 border-black neo-shadow-sm font-black"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={3}
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu - Neobrutalism */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 pb-4 space-y-2"
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-3 text-black bg-[#00ff88] border-4 border-black font-bold uppercase hover:bg-[#00cc6a] transition-colors"
                  aria-label={`Navigate to ${item.label}`}
                >
                  {item.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;

