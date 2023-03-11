import React from 'react';

import { range } from '../../utils';

function GuessResultPlaceholder() {
  return (
    <p className='guess'>
      {range(0, 5).map((_, i) => (
        <span
          key={i}
          className='cell'
        />
      ))}
    </p>
  );
}

export default GuessResultPlaceholder;
