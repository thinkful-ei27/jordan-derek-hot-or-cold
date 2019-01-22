import React from 'react';
import Hinter from './Hinter';
import GuessLog from './GuessLog';
import GuessForm from './GuessForm';
import './GameBoard.css';

export default function GameBoard (props) {
  return (
    <section className="gameBoard">
      <Hinter />
      <GuessForm />
      <GuessLog />
    </section>
  );
}