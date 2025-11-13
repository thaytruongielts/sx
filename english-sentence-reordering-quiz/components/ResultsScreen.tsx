
import React from 'react';

interface ResultsScreenProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

const ResultsScreen: React.FC<ResultsScreenProps> = ({ score, totalQuestions, onRestart }) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  const resultMessage = percentage >= 80 ? "Excellent Work!" : percentage >= 50 ? "Good Job!" : "Keep Practicing!";

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center animate-fade-in">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">{resultMessage}</h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">You've completed the quiz!</p>
      
      <div className="mb-8">
        <p className="text-xl font-medium text-gray-700 dark:text-gray-300">Your Score</p>
        <p className="text-6xl font-bold text-blue-600 dark:text-blue-400 my-2">
          {score} <span className="text-3xl text-gray-500 dark:text-gray-400">/ {totalQuestions}</span>
        </p>
        <p className="text-2xl font-semibold text-gray-700 dark:text-gray-300">({percentage}%)</p>
      </div>
      
      <button
        onClick={onRestart}
        className="w-full md:w-auto bg-blue-600 text-white font-bold py-3 px-10 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 transition-all duration-300 transform hover:scale-105"
      >
        Restart Quiz
      </button>
    </div>
  );
};

export default ResultsScreen;
