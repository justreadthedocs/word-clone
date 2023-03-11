import React from 'react';

import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import Banner from '../Banner/Banner';

import useGameStatusFromGuessResults from '../../hooks/useGameStatusFromGuessResults';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';
import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = React.useState([]);
  const gameStatus = useGameStatusFromGuessResults(guessResults);

  const handleGuessInputSubmit = (guess) => {
    if (guessResults.length >= NUM_OF_GUESSES_ALLOWED) {
      return;
    }

    const guessResult = checkGuess(guess, answer);
    setGuessResults([...guessResults, guessResult]);
  };

  return (
    <>
      <GuessInput
        disabled={gameStatus !== 'on'}
        onSubmit={handleGuessInputSubmit}
      />
      <GuessResults guessResults={guessResults} />

      {gameStatus === 'won' && (
        <Banner gameStatus={gameStatus}>
          <strong>Congratulations!</strong> Got it in{' '}
          <strong>
            {guessResults.length} {guessResults.length === 1 ? 'guess' : 'guesses'}
          </strong>
          .
        </Banner>
      )}

      {gameStatus === 'lost' && (
        <Banner gameStatus={gameStatus}>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </Banner>
      )}
    </>
  );
}

export default Game;
