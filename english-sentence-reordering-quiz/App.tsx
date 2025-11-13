
import React, { useState, useCallback } from 'react';
import { quizData } from './data/quizData';
import type { Question, SelectedAnswer } from './types';
import QuizCard from './components/QuizCard';
import ResultsScreen from './components/ResultsScreen';

const App: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<SelectedAnswer | null>(null);
  const [isQuizFinished, setIsQuizFinished] = useState<boolean>(false);

  const currentQuestion: Question = quizData[currentQuestionIndex];

  const handleSelectAnswer = useCallback((optionId: string) => {
    if (selectedAnswer) return;

    const isCorrect = optionId === currentQuestion.correctAnswerId;
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
    setSelectedAnswer({ optionId, isCorrect });
  }, [currentQuestion, selectedAnswer]);

  const handleNext = useCallback(() => {
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
    } else {
      setIsQuizFinished(true);
    }
  }, [currentQuestionIndex]);

  const handleRestart = useCallback(() => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsQuizFinished(false);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 font-sans">
        <div className="w-full max-w-2xl mx-auto">
            <header className="text-center mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">Sentence Reordering Practice</h1>
                <p className="text-md text-gray-600 dark:text-gray-400 mt-2">10th Grade English Entrance Exam</p>
            </header>
            <main>
                {isQuizFinished ? (
                    <ResultsScreen 
                        score={score} 
                        totalQuestions={quizData.length} 
                        onRestart={handleRestart} 
                    />
                ) : (
                    <QuizCard
                        question={currentQuestion}
                        questionNumber={currentQuestionIndex + 1}
                        totalQuestions={quizData.length}
                        selectedAnswer={selectedAnswer}
                        onSelectAnswer={handleSelectAnswer}
                        onNext={handleNext}
                    />
                )}
            </main>
             <footer className="text-center mt-8 text-sm text-gray-500 dark:text-gray-400">
                <p>Designed to help you excel in your exams. Good luck!</p>
            </footer>
        </div>
    </div>
  );
};

export default App;
