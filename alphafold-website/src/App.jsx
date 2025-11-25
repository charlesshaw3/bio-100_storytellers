// Main App Component
// Composes all sections in order for the Science Storytellers project
// Uses semantic HTML and implements smooth scrolling

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BigQuestionSection from './components/BigQuestionSection';
import HowAlphaFoldWorksSection from './components/HowAlphaFoldWorksSection';
import AlphaFold3Section from './components/AlphaFold3Section';
import ResultsAndEvidenceSection from './components/ResultsAndEvidenceSection';
import ImpactSection from './components/ImpactSection';
import EthicsAndLimitationsSection from './components/EthicsAndLimitationsSection';
import InteractiveQuizSection from './components/InteractiveQuizSection';
import GlossarySection from './components/GlossarySection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      {/* Fixed Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Content Sections */}
        <BigQuestionSection />
        <HowAlphaFoldWorksSection />
        <AlphaFold3Section />
        <ResultsAndEvidenceSection />
        <ImpactSection />
        <EthicsAndLimitationsSection />
        
        {/* Interactive Section */}
        <InteractiveQuizSection />
        
        {/* Reference Sections */}
        <GlossarySection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
