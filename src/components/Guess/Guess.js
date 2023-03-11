import React from 'react';

function Guess({ guess }) {
  return (
    <p
      key={guess}
      className='guess'
    >
      {guess.split('').map((char, i) => (
        <span
          key={i}
          className='cell'
        >
          {char}
        </span>
      ))}
    </p>
  );
}

export default Guess;
