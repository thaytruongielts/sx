
import React from 'react';
import type { Question, SelectedAnswer } from '../types';
import { CheckIcon, XIcon } from './Icons';

interface QuizCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  selectedAnswer: SelectedAnswer | null;
  onSelectAnswer: (optionId: string) => void;
  onNext: () => void;
}

const QuizCard: React.FC<QuizCardProps> = ({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  onSelectAnswer,
  onNext,
}) => {
  const progressPercentage = (questionNumber / totalQuestions) * 100;

  const getOptionClasses = (optionId: string) => {
    if (!selectedAnswer) {
      return 'border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-blue-500 dark:hover:border-blue-400';
    }

    const isSelected = selectedAnswer.optionId === optionId;
    const isCorrect = optionId === question.correctAnswerId;

    if (isCorrect) {
      return 'bg-green-100 border-green-500 text-green-800 dark:bg-green-900/50 dark:border-green-600 dark:text-green-300';
    }
    if (isSelected && !isCorrect) {
      return 'bg-red-100 border-red-500 text-red-800 dark:bg-red-900/50 dark:border-red-600 dark:text-red-300';
    }
    return 'border-gray-300 dark:border-gray-600 cursor-not-allowed';
  };
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8 transition-shadow duration-300 hover:shadow-xl animate-fade-in">
        <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                    Question {questionNumber} of {totalQuestions}
                </p>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div 
                    className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full transition-all duration-500 ease-out" 
                    style={{ width: `${progressPercentage}%` }}
                ></div>
            </div>
        </div>

        <h2 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-4">{question.questionText}</h2>
        
        <div className="bg-slate-50 dark:bg-gray-900/50 rounded-lg p-4 space-y-3 mb-6 border border-slate-200 dark:border-gray-700">
            {question.preText && <p className="text-gray-800 dark:text-gray-200 italic">{question.preText}</p>}
            {question.sentences.map((sentence) => (
                <div key={sentence.id} className="flex items-start">
                    <span className="font-bold text-gray-600 dark:text-gray-400 mr-2">{sentence.id}.</span>
                    <p className="text-gray-800 dark:text-gray-200">{sentence.text}</p>
                </div>
            ))}
            {question.postText && <p className="text-gray-800 dark:text-gray-200 italic whitespace-pre-wrap mt-2">{question.postText}</p>}
        </div>

        <div className="space-y-3">
            {question.options.map((option) => {
                const isSelected = selectedAnswer?.optionId === option.id;
                const isCorrectAnswer = option.id === question.correctAnswerId;
                
                return (
                    <button
                        key={option.id}
                        onClick={() => onSelectAnswer(option.id)}
                        disabled={!!selectedAnswer}
                        className={`w-full flex items-center justify-between text-left p-4 rounded-lg border-2 transition-all duration-200 ${getOptionClasses(option.id)}`}
                    >
                        <div className="flex items-center">
                            <span className="font-bold mr-4">{option.id}</span>
                            <span>{option.text}</span>
                        </div>
                        {selectedAnswer && isCorrectAnswer && <CheckIcon className="w-6 h-6 text-green-600 dark:text-green-400" />}
                        {selectedAnswer && isSelected && !isCorrectAnswer && <XIcon className="w-6 h-6 text-red-600 dark:text-red-400" />}
                    </button>
                );
            })}
        </div>

        {selectedAnswer && (
            <div className="mt-6 text-center">
                <button
                    onClick={onNext}
                    className="w-full md:w-auto bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 transition-all duration-300 transform hover:scale-105"
                >
                    {questionNumber === totalQuestions ? 'Show Results' : 'Next Question'}
                </button>
            </div>
        )}
    </div>
  );
};

export default QuizCard;
