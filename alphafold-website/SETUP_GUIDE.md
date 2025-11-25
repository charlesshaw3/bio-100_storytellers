##  How to Run Your Site

### Option 1: Development Server (for editing)
```bash
cd alphafold-website
npm run dev
```
Then open http://localhost:5173/ in your browser

### Option 2: Build for Production (for deployment)
```bash
cd alphafold-website
npm run build
```
The built site will be in the `dist` folder

## 📂 Project Structure

```
alphafold-website/
├── src/
│   ├── components/          # All React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── BigQuestionSection.jsx
│   │   ├── HowAlphaFoldWorksSection.jsx
│   │   ├── AlphaFold3Section.jsx
│   │   ├── ResultsAndEvidenceSection.jsx
│   │   ├── ImpactSection.jsx
│   │   ├── EthicsAndLimitationsSection.jsx
│   │   ├── InteractiveQuizSection.jsx
│   │   ├── GlossarySection.jsx
│   │   ├── ForMyClassmatesSection.jsx
│   │   └── Footer.jsx
│   ├── data/                # Editable content
│   │   ├── quizData.js
│   │   ├── glossaryData.js
│   │   └── discussionPrompts.js
│   ├── App.jsx              # Main app component
│   ├── index.css            # Global styles
│   └── main.jsx             # Entry point
├── index.html               # HTML template
├── vite.config.js           # Vite configuration
├── package.json             # Dependencies
└── README.md                # Full documentation
```

## Technologies Used

- **React 19**: Modern UI framework
- **Vite**: Lightning-fast build tool
- **Tailwind CSS v4**: Utility-first styling
- **Framer Motion**: Smooth animations
- **JavaScript (ES6+)**: Modern syntax

---

Created: November 2025
For: BIO 100 Science Storytellers Project
At: American University

