import React from 'react';

import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import BannerYouWon from '../BannerYouWon';
import BannerYouLost from '../BannerYouLost';
import VisualKeyboard from '../VisualKeyboard/VisualKeyboard';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess, getGameStatus } from '../../game-helpers';
import { sample } from '../../utils';
import { WORDS } from '../../data';

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  const [guessResults, setGuessResults] = React.useState([]);
  const gameStatus = getGameStatus(guessResults, NUM_OF_GUESSES_ALLOWED);

  React.useEffect(() => {
    console.log(`Answer: ${answer}`);
  }, [answer]);

  const handleGuessInputSubmit = (guess) => {
    if (guessResults.length >= NUM_OF_GUESSES_ALLOWED) {
      return;
    }

    const guessResult = checkGuess(guess, answer);
    setGuessResults([...guessResults, guessResult]);
  };

  const handleGameRestart = () => {
    setGuessResults([]);
    setAnswer(sample(WORDS));
  };

  return (
    <>
      <GuessResults guessResults={guessResults} />

      <GuessInput
        disabled={gameStatus !== 'on'}
        onSubmit={handleGuessInputSubmit}
      />

      <VisualKeyboard guessResults={guessResults} />

      {gameStatus === 'won' && (
        <BannerYouWon
          guessResults={guessResults}
          onGameRestart={handleGameRestart}
        />
      )}

      {gameStatus === 'lost' && (
        <BannerYouLost
          answer={answer}
          onGameRestart={handleGameRestart}
        />
      )}
    </>
  );
}

export default Game;
