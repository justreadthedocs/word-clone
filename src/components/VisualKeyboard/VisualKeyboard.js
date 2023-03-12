import React from 'react';

import { getLetterStatusesFromGuessResults } from '../../game-helpers';

const keyboardRows = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['↵', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '←'],
];

function VisualKeyboardKey({ keyboardKey, keyboardKeyStatuses }) {
  let buttonProps = {
    type: 'button',
    className: `visual-keyboard-key ${keyboardKeyStatuses[keyboardKey] || ''}`,
    'data-keyboard-key': keyboardKey,
  };

  switch (keyboardKey) {
    case '↵':
      buttonProps.className += ' enter';
      buttonProps['aria-label'] = 'enter';
      break;
    case '←':
      buttonProps.className += ' backspace';
      buttonProps['aria-label'] = 'backspace';
      break;
    default:
      buttonProps.children = keyboardKey;
      buttonProps['aria-label'] = `${keyboardKey} ${keyboardKeyStatuses[keyboardKey] || ''}`;
      break;
  }

  return <button {...buttonProps} />;
}

function VisualKeyboard({ guessResults }) {
  const keyboardKeyStatuses = getLetterStatusesFromGuessResults(guessResults);

  const handleKeyboardKeyClick = (event) => {
    const keyboardKey = event.target.dataset.keyboardKey;
    if (!keyboardKey) {
      return;
    }

    console.log(keyboardKey);
  };

  return (
    <div
      className='visual-keyboard'
      onClick={handleKeyboardKeyClick}
    >
      {keyboardRows.map((keyboardRow, i) => (
        <div
          key={i}
          className='visual-keyboard-row'
        >
          {keyboardRow.map((keyboardKey) => (
            <VisualKeyboardKey
              key={keyboardKey}
              keyboardKey={keyboardKey}
              keyboardKeyStatuses={keyboardKeyStatuses}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default VisualKeyboard;
