import React from 'react';

function GuessResult({ guessResult }) {
  return (
    <p className='guess'>
      {guessResult.map(({ letter, status }, i) => (
        <span
          key={i}
          className={`cell ${status}`}
        >
          {letter}
        </span>
      ))}
    </p>
  );
}

export default GuessResult;
