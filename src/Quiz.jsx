import React, { useState } from 'react';

const Quiz = () => {
  const questions = [
    {
      questionText: ' What is React.js?',
      answerOptions: [
        { answerText: 'A JavaScript framework for building user interfaces.', isCorrect: true },
        { answerText: 'A server-side programming language.', isCorrect: false },
        { answerText: 'A database management system', isCorrect: false },
        { answerText: 'A front-end CSS framework.', isCorrect: false },
      ],
    },
    {
        questionText: 'What does JSX stand for? ',
        answerOptions: [
          { answerText: 'JavaScript XML ', isCorrect: true },
          { answerText: 'Java Syntax Extension ', isCorrect: false },
          { answerText: 'JSON Xchange Schema ', isCorrect: false },
          { answerText: 'JavaScript Xerography ', isCorrect: false },
        ],
      },
      {
        questionText: 'Which lifecycle method is invoked immediately after a component is rendered on the DOM?',
        answerOptions: [
          { answerText: 'componentDidMount ', isCorrect: true },
          { answerText: 'componentDidUpdate ', isCorrect: false },
          { answerText: 'componentWillMount ', isCorrect: false },
          { answerText: 'componentWillRender ', isCorrect: false },
        ],
      },
      {
        questionText: 'What is the purpose of the "key" prop in React? ',
        answerOptions: [
          { answerText: 'It uniquely identifies a component in an array of components.', isCorrect: true },
          { answerText: 'It determines the visual styling of a component. ', isCorrect: false },
          { answerText: 'It specifies the route for navigation within a React application. ', isCorrect: false },
          { answerText: "It defines the data type of a component's prop. ", isCorrect: false },
        ],
      },
      {
        questionText: 'What is the state of React class component? ',
        answerOptions: [
          { answerText: 'A JavaScript method for sorting arrays. ', isCorrect: false },
          { answerText: 'A built-in object that stores component data. ', isCorrect: true },
          { answerText: 'A CSS class used for component styling. ', isCorrect: false },
          { answerText: "A React component's initial render method. ", isCorrect: false },
        ],
      },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className='quiz-app'>
      {showScore ? (
        <div className='score-section'>You scored {score} out of {questions.length}</div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className='question-text'>{questions[currentQuestion].questionText}</div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)} key={index}>
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
