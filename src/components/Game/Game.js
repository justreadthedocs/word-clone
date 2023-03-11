import React from 'react';

import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  const handleGuessInputSubmit = (guess) => {
    if (guesses.length >= NUM_OF_GUESSES_ALLOWED) {
      return;
    }

    setGuesses([...guesses, guess]);
  };

  return (
    <>
      <GuessInput onSubmit={handleGuessInputSubmit} />
      <GuessResults
        guesses={guesses}
        answer={answer}
      />
    </>
  );
}

export default Game;
