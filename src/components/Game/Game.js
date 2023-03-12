import React from 'react';

import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import Banner from '../Banner/Banner';
import VisualKeyboard from '../VisualKeyboard/VisualKeyboard';

import useGameStatusFromGuessResults from '../../hooks/useGameStatusFromGuessResults';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';
import { sample } from '../../utils';
import { WORDS } from '../../data';

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  const [guessResults, setGuessResults] = React.useState([]);
  const gameStatus = useGameStatusFromGuessResults(guessResults);

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
        <Banner
          gameStatus={gameStatus}
          onGameRestart={handleGameRestart}
        >
          <strong>Congratulations!</strong> Got it in{' '}
          <strong>
            {guessResults.length} {guessResults.length === 1 ? 'guess' : 'guesses'}
          </strong>
          .
        </Banner>
      )}

      {gameStatus === 'lost' && (
        <Banner
          gameStatus={gameStatus}
          onGameRestart={handleGameRestart}
        >
          Sorry, the correct answer is <strong>{answer}</strong>.
        </Banner>
      )}
    </>
  );
}

export default Game;
