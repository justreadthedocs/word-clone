import React from 'react';

import { checkGuess } from '../../game-helpers';

function Guess({ guess, answer }) {
  const guessResult = checkGuess(guess, answer);

  return (
    <p
      key={guess}
      className='guess'
    >
      {guess.split('').map((guessLetter, i) => (
        <span
          key={i}
          className={`cell ${guessResult[i].status}`}
        >
          {guessLetter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
