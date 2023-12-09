
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Quiz App', () => {
  test('renders welcome message on start', () => {
    render(<App />);
    const welcomeElement = screen.getByText(/welcome to the quiz app/i);
    expect(welcomeElement).toBeInTheDocument();
  });

  test('starts the quiz when clicking start button', () => {
    render(<App />);
    const startButton = screen.getByText(/start/i);
    fireEvent.click(startButton);
    const questionElement = screen.getByText(/question 1/i);
    expect(questionElement).toBeInTheDocument();
  });

  test('selects an answer and moves to the next question', () => {
    render(<App />);
    const startButton = screen.getByText(/start/i);
    fireEvent.click(startButton);

    // Select an answer
    const answerOption = screen.getByText(/paris/i);
    fireEvent.click(answerOption);

    // Check if next question is displayed
    const nextButton = screen.getByText(/next/i);
    fireEvent.click(nextButton);

    const nextQuestionElement = screen.getByText(/question 2/i);
    expect(nextQuestionElement).toBeInTheDocument();
  });

});
