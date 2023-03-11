import React from 'react';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

import GuessResultPlaceholder from './GuessResultPlaceholder';
import GuessResult from './GuessResult';

function GuessResults({ guessResults }) {
  return (
    <div className='guess-results'>
      {range(0, NUM_OF_GUESSES_ALLOWED).map((i) => {
        const guessResult = guessResults[i];
        if (!guessResult) {
          return <GuessResultPlaceholder key={i} />;
        }

        return (
          <GuessResult
            key={i}
            guessResult={guessResult}
          />
        );
      })}
    </div>
  );
}

export default GuessResults;
