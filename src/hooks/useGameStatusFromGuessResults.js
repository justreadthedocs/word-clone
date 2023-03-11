import React from 'react';

import { NUM_OF_GUESSES_ALLOWED } from '../constants';
import { guessResultIsCorrect } from '../game-helpers';

function useGameStatusFromGuessResults(guessResults) {
  const [gameStatus, setGameStatus] = React.useState('on');

  React.useEffect(() => {
    const gameHasStarted = guessResults.length === 0;
    if (gameHasStarted) {
      setGameStatus('on');
      return;
    }

    const lastGuessResult = guessResults[guessResults.length - 1];

    if (guessResultIsCorrect(lastGuessResult)) {
      setGameStatus('won');
      return;
    }

    if (guessResults.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  }, [guessResults]);

  return gameStatus;
}

export default useGameStatusFromGuessResults;
