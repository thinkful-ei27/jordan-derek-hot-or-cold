import React from 'react';
import Hinter from './Hinter';
import './GameBoard.css';
import GuessLog from './GuessLog';

export default function GameBoard (props) {
  return (
    <section className="gameBoard">
      <Hinter />
      {/* Guess Form */}
      <GuessLog />
    </section>
  );
}