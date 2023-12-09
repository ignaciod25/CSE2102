import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './logo.svg';


const questions = [
  {
    question: 'What is the largest mammal?',
    options: ['Elephant', 'Blue Whale', 'Giraffe', 'Gorilla'],
    correctAnswer: 'Blue Whale',
  },
  {
    question: 'In what year did World War II end?',
    options: ['1943', '1944', '1945', '1946'],
    correctAnswer: '1945',
  },
  {
    question: 'Who wrote "Romeo and Juliet"?',
    options: ['Charles Dickens', 'Jane Austen', 'William Shakespeare', 'Mark Twain'],
    correctAnswer: 'William Shakespeare',
  },
  {
    question: 'What is the capital of Japan?',
    options: ['Beijing', 'Seoul', 'Tokyo', 'Bangkok'],
    correctAnswer: 'Tokyo',
  },
  {
    question: 'Which planet is known as the "Red Planet"?',
    options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
    correctAnswer: 'Mars',
  },
  {
    question: 'What is the chemical symbol for gold?',
    options: ['Au', 'Ag', 'Fe', 'Cu'],
    correctAnswer: 'Au',
  },
  {
    question: 'Who painted the Mona Lisa?',
    options: ['Vincent van Gogh', 'Leonardo da Vinci', 'Pablo Picasso', 'Claude Monet'],
    correctAnswer: 'Leonardo da Vinci',
  },
  {
    question: 'What is the largest ocean on Earth?',
    options: ['Atlantic Ocean', 'Indian Ocean', 'Southern Ocean', 'Pacific Ocean'],
    correctAnswer: 'Pacific Ocean',
  },
  {
    question: 'What is the capital of Australia?',
    options: ['Canberra', 'Sydney', 'Melbourne', 'Perth'],
    correctAnswer: 'Canberra',
  },
  {
    question: 'Who developed the theory of relativity?',
    options: ['Isaac Newton', 'Albert Einstein', 'Galileo Galilei', 'Stephen Hawking'],
    correctAnswer: 'Albert Einstein',
  },
];

const Home = ({ onStartClick }) => (
  <div>
    <h1>Welcome to the Quiz App! </h1>
    <img src={logo} className="App-logo" alt="logo" />
    <p>Click the Start button below to start the quiz!</p>
    <br></br>
    <button onClick={onStartClick} className="start-button">
      Start
    </button>
    <div class="box"><b></b></div>
  </div>
);

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [incorrectAnswer, setIncorrectAnswer] = useState(null);
  const [timerMinutes, setTimerMinutes] = useState(2); 
  const [timerSeconds, setTimerSeconds] = useState(0); 

  useEffect(() => {
    let interval;
  
    if (quizStarted && !quizComplete) {
      interval = setInterval(() => {
        if (timerMinutes === 0 && timerSeconds === 0) {
          handleNextClick();
        } else {
          if (timerSeconds === 0) {
            setTimerMinutes(timerMinutes - 1);
            setTimerSeconds(59);
          } else {
            setTimerSeconds(timerSeconds - 1);
          }
        }
      }, 1000);
    }
  
    return () => clearInterval(interval);
  
  }, [quizStarted, quizComplete, timerMinutes, timerSeconds]);
  

  const handleAnswerClick = (option) => {
    if (quizStarted && selectedAnswer === null) {
      setSelectedAnswer(option);

      if (option === questions[currentQuestion].correctAnswer) {
        setScore(score + 1);
      } else {
        setIncorrectAnswer(option);
      }

      if (currentQuestion < questions.length - 1) {
        setTimeout(() => {
          setCurrentQuestion(currentQuestion + 1);
          setSelectedAnswer(null);
          setIncorrectAnswer(null);
        }, 10000000);
      } else {
        setQuizComplete(true);
      }
    }
  };

  const handleNextClick = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setIncorrectAnswer(null);
    } else {
      setQuizComplete(true);
    }
  };

  const handleTryAgainClick = () => {
    setCurrentQuestion(0);
    setScore(0);
    setQuizComplete(false);
    setSelectedAnswer(null);
    setIncorrectAnswer(null);
    setQuizStarted(false);
    setTimerMinutes(2); // Resets timer
    setTimerSeconds(0);
  };

  const handleStartClick = () => {
    setQuizStarted(true);
  };

  const renderNextButton = () => {
    if (selectedAnswer !== null) {
      return (
        <button onClick={handleNextClick} className="next-button">
          Next
        </button>
      );
    }
    return null;
  };

  return (
    <div className="App">
      {quizComplete ? (
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Quiz Completed!</h2>
          <p>Your score: {score}/{questions.length}</p>
          <p>Score percentage: {(score / questions.length) * 100}%</p>
          <br></br>
          <p>Time remaining: {timerMinutes} minutes {timerSeconds} seconds</p>
          <button onClick={handleTryAgainClick} className="try-again-button">
            Try Again
          </button>
        </div>
      ) : quizStarted ? (
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <p>Time remaining: {timerMinutes} minutes {timerSeconds} seconds</p>
          <h2>Question {currentQuestion + 1}</h2>
          <p>{questions[currentQuestion].question}</p>
          <ul>
            
            {questions[currentQuestion].options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleAnswerClick(option)}
                className={selectedAnswer === option ? 'selected' : (incorrectAnswer === option ? 'incorrect' : '')}
              >
                {option}
              </li>
            ))}
          </ul>
          {renderNextButton()}

    
        </div>
      ) : (
        <Home onStartClick={handleStartClick} />
      )}
    </div>
  );
};

export default App;