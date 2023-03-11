import React from 'react';

const gameStatusToClassNameMap = {
  won: 'happy',
  lost: 'sad',
};

function Banner({ children, gameStatus }) {
  return (
    <div className={`${gameStatusToClassNameMap[gameStatus]} banner`}>
      <p>{children}</p>
    </div>
  );
}

export default Banner;
