// Interactive Quiz Section Component
// Quiz with multiple choice and true/false questions
// Immediate feedback, score tracking, and final results

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { quizData } from '../data/quizData';

const InteractiveQuizSection = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [quizComplete, setQuizComplete] = useState(false);

  const currentQuestion = quizData[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === quizData.length - 1;

  const handleAnswerSelect = (answerId) => {
    if (!showFeedback) {
      setSelectedAnswer(answerId);
    }
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;

    setShowFeedback(true);
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

    if (isCorrect) {
      setScore(score + 1);
    }

    setAnsweredQuestions([...answeredQuestions, {
      questionId: currentQuestion.id,
      correct: isCorrect
    }]);
  };

  const handleNextQuestion = () => {
    if (isLastQuestion) {
      setQuizComplete(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setScore(0);
    setAnsweredQuestions([]);
    setQuizComplete(false);
  };

  const getScoreMessage = () => {
    const percentage = (score / quizData.length) * 100;
    if (percentage === 100) {
      return "Perfect score!";
    } else if (percentage >= 80) {
      return "Excellent work!";
    } else if (percentage >= 60) {
      return "Good job!";
    } else {
      return "Nice try!";
    }
  };

  if (quizComplete) {
    return (
      <section id="quiz" className="py-20 bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-[#00ff88] border-4 border-black p-8 md:p-12 neo-shadow-lg text-center"
            >
              <div className="text-6xl mb-6">★</div>
              <div className="bg-black border-4 border-white px-6 py-3 inline-block mb-6">
                <h2 className="text-4xl font-black text-[#00ff88] uppercase">
                  Quiz Complete!
                </h2>
              </div>
              <div className="bg-white border-4 border-black px-8 py-4 inline-block mb-6">
                <p className="text-3xl font-black text-black uppercase">
                  Score: {score} / {quizData.length}
                </p>
              </div>
              <div className="bg-black px-6 py-3 mb-8">
                <p className="text-xl text-white font-bold uppercase">
                  {getScoreMessage()}
                </p>
              </div>
              <button
                onClick={handleRestartQuiz}
                className="px-8 py-4 bg-[#ff00ff] text-black font-black border-4 border-black neo-shadow hover:bg-[#cc00cc] transition-colors uppercase tracking-wide"
                aria-label="Restart the quiz"
              >
                ↻ Take Quiz Again
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="quiz" className="py-20 bg-[#1a1a1a]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          {/* Section Title - Neobrutalism */}
          <div className="inline-block mb-8 bg-[#ff00ff] border-4 border-black px-8 py-4 neo-shadow-lg">
            <h2 className="text-4xl md:text-5xl font-black text-black uppercase">
              Quiz
            </h2>
          </div>

          <div className="bg-white border-4 border-black px-6 py-3 mb-8">
            <p className="text-xl text-black font-bold text-center uppercase">
              Test yourself!
            </p>
          </div>

          {/* Progress Bar - Neobrutalism */}
          <div className="mb-8 bg-black border-4 border-[#00ff88] p-4">
            <div className="flex justify-between text-sm text-[#00ff88] font-bold mb-2 uppercase">
              <span>Question {currentQuestionIndex + 1}/{quizData.length}</span>
              <span>Score: {score}/{answeredQuestions.length}</span>
            </div>
            <div className="w-full bg-[#1a1a1a] border-2 border-[#00ff88] h-6">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${((currentQuestionIndex + 1) / quizData.length) * 100}%` }}
                className="bg-[#00ff88] h-full"
              />
            </div>
          </div>

          {/* Question Card - Neobrutalism */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestionIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-white border-4 border-black p-8 neo-shadow-lg"
            >
              {/* Question */}
              <div className="bg-black border-4 border-[#00d4ff] px-6 py-4 mb-6">
                <h3 className="text-xl md:text-2xl font-black text-white uppercase leading-tight">
                  {currentQuestion.question}
                </h3>
              </div>

              {/* Options - Neobrutalism */}
              <div className="space-y-4 mb-6">
                {currentQuestion.options.map((option) => {
                  const isSelected = selectedAnswer === option.id;
                  const isCorrect = option.id === currentQuestion.correctAnswer;
                  const showCorrectStyle = showFeedback && isCorrect;
                  const showIncorrectStyle = showFeedback && isSelected && !isCorrect;

                  return (
                    <button
                      key={option.id}
                      onClick={() => handleAnswerSelect(option.id)}
                      disabled={showFeedback}
                      className={`w-full text-left p-4 transition-all border-4 font-bold ${
                        showCorrectStyle
                          ? 'bg-[#00ff88] border-black neo-shadow text-black'
                          : showIncorrectStyle
                          ? 'bg-[#ff4444] border-black neo-shadow text-black'
                          : isSelected
                          ? 'bg-[#00d4ff] border-black neo-shadow text-black'
                          : 'bg-[#1a1a1a] border-[#666] text-white hover:border-white'
                      } ${showFeedback ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                      aria-label={`Option ${option.id}: ${option.text}`}
                    >
                      <div className="flex items-start gap-3">
                        <span className="font-black flex-shrink-0 mt-1">
                          {option.id.toUpperCase()}.
                        </span>
                        <span className="flex-1">{option.text}</span>
                        {showFeedback && isCorrect && (
                          <span className="text-2xl flex-shrink-0">✓</span>
                        )}
                        {showIncorrectStyle && (
                          <span className="text-2xl flex-shrink-0">✗</span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Feedback - Neobrutalism */}
              <AnimatePresence>
                {showFeedback && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`p-6 mb-6 border-4 neo-shadow ${
                      selectedAnswer === currentQuestion.correctAnswer
                        ? 'bg-[#00ff88] border-black'
                        : 'bg-[#ff4444] border-black'
                    }`}
                  >
                    <div className={`bg-black px-4 py-2 inline-block mb-3`}>
                      <p className={`font-black text-lg uppercase ${
                        selectedAnswer === currentQuestion.correctAnswer
                          ? 'text-[#00ff88]'
                          : 'text-[#ff4444]'
                      }`}>
                        {selectedAnswer === currentQuestion.correctAnswer ? '✓ Correct!' : '✗ Incorrect'}
                      </p>
                    </div>
                    <p className="text-black font-bold text-sm leading-relaxed">
                      {currentQuestion.explanation}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Action Buttons - Neobrutalism */}
              <div className="flex gap-4">
                {!showFeedback ? (
                  <button
                    onClick={handleSubmitAnswer}
                    disabled={selectedAnswer === null}
                    className={`flex-1 px-6 py-3 font-black transition-all border-4 uppercase tracking-wide ${
                      selectedAnswer === null
                        ? 'bg-[#666] text-[#333] cursor-not-allowed border-[#333]'
                        : 'bg-[#00ff88] text-black border-black neo-shadow hover:bg-[#00cc6a]'
                    }`}
                    aria-label="Submit your answer"
                  >
                    ► Submit Answer
                  </button>
                ) : (
                  <button
                    onClick={handleNextQuestion}
                    className="flex-1 px-6 py-3 bg-[#ff00ff] text-black font-black border-4 border-black neo-shadow hover:bg-[#cc00cc] transition-colors uppercase tracking-wide"
                    aria-label={isLastQuestion ? "See your results" : "Go to next question"}
                  >
                    {isLastQuestion ? '★ See Results' : '▶ Next Question'}
                  </button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveQuizSection;

