import React from 'react';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

import Guess from '../Guess/Guess';
import GuessPlaceholder from '../GuessPlaceholder/GuessPlaceholder';

function GuessResults({ guesses }) {
  return (
    <div className='guess-results'>
      {range(0, NUM_OF_GUESSES_ALLOWED).map((i) => {
        const guess = guesses[i];
        if (!guess) {
          return <GuessPlaceholder key={i} />;
        }

        return (
          <Guess
            key={i}
            guess={guess}
          />
        );
      })}
    </div>
  );
}

export default GuessResults;
