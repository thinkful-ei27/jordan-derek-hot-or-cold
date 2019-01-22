import React from 'react';
import './GuessForm.css';

export default function GuessForm(props) {
  return (
    <section className="guess_form">
      <form>
        <input type="text" placeholder="Enter your Guess" />
        <button type="submit">Guess</button>
      </form>
      <p className="guess_form__guess_number">Guess #<span>3</span>!</p>
    </section>
  );
}