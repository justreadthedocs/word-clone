import React from 'react';

const gameStatusToClassNameMap = {
  won: 'happy',
  lost: 'sad',
};

function Banner({ children, gameStatus, onGameRestart }) {
  const buttonRef = React.useRef(null);
  React.useEffect(() => {
    buttonRef?.current.focus();
  }, []);

  return (
    <div className={`${gameStatusToClassNameMap[gameStatus]} banner`}>
      <p>{children}</p>
      <div>
        <button
          ref={buttonRef}
          type='button'
          onClick={onGameRestart}
        >
          Restart Game
        </button>
      </div>
    </div>
  );
}

export default Banner;
