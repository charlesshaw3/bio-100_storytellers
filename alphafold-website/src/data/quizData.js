// Quiz questions for the Interactive Quiz Section
// Edit questions, options, correctAnswer, and explanation as needed

export const quizData = [
  {
    id: 1,
    question: "What is the main challenge that AlphaFold was designed to solve?",
    options: [
      { id: 'a', text: "Predicting the 3D structure of a protein from its amino acid sequence" },
      { id: 'b', text: "Creating new proteins in the laboratory" },
      { id: 'c', text: "Determining the chemical composition of proteins" },
      { id: 'd', text: "Increasing the speed of protein synthesis in cells" }
    ],
    correctAnswer: 'a',
    explanation: "AlphaFold was developed to predict how proteins fold into their 3D structures based solely on their amino acid sequences. This is known as the 'protein folding problem,' which had been unsolved for over 50 years."
  },
  {
    id: 2,
    question: "True or False: AlphaFold can completely replace experimental methods like X-ray crystallography for determining protein structures.",
    options: [
      { id: 'a', text: "True" },
      { id: 'b', text: "False" }
    ],
    correctAnswer: 'b',
    explanation: "False. While AlphaFold produces highly accurate predictions, it is a prediction tool, not a replacement for experiments. Experimental validation remains important, especially for critical applications."
  },
  {
    id: 3,
    question: "What new capability does AlphaFold 3 add compared to AlphaFold 2?",
    options: [
      { id: 'a', text: "It can predict protein structures faster" },
      { id: 'b', text: "It can predict interactions between proteins and other molecules like DNA, RNA, and ligands" },
      { id: 'c', text: "It can design completely new proteins from scratch" },
      { id: 'd', text: "It can predict how proteins behave at different temperatures" }
    ],
    correctAnswer: 'b',
    explanation: "AlphaFold 3 extends the capabilities of AlphaFold 2 by predicting not just single protein structures, but also how proteins interact with other biomolecules including DNA, RNA, and small molecule ligands."
  },
  {
    id: 4,
    question: "Why does the 3D structure of a protein matter?",
    options: [
      { id: 'a', text: "It makes proteins easier to see under a microscope" },
      { id: 'b', text: "The structure determines the protein's function in the cell" },
      { id: 'c', text: "It affects how proteins taste" },
      { id: 'd', text: "It makes proteins more colorful" }
    ],
    correctAnswer: 'b',
    explanation: "A protein's 3D structure is directly linked to its function. The shape determines how it interacts with other molecules, what reactions it catalyzes, and essentially what job it performs in living organisms."
  },
  {
    id: 5,
    question: "What is CASP?",
    options: [
      { id: 'a', text: "A new protein discovered by AlphaFold" },
      { id: 'b', text: "A competition that tests and compares protein structure prediction methods" },
      { id: 'c', text: "A type of amino acid" },
      { id: 'd', text: "A laboratory technique for studying proteins" }
    ],
    correctAnswer: 'b',
    explanation: "CASP (Critical Assessment of protein Structure Prediction) is a biennial blind competition where researchers test their prediction methods against recently solved protein structures. AlphaFold's performance at CASP14 was revolutionary."
  }
];

