import React from 'react';

const statusToClassNameMap = {
  success: 'happy',
  critical: 'sad',
};

function Banner({ title, children, status = 'success', action }) {
  const buttonRef = React.useRef(null);
  React.useEffect(() => {
    buttonRef?.current.focus();
  }, []);

  return (
    <div className={`${statusToClassNameMap[status]} banner`}>
      <div className='banner-content'>
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
      <div className='banner-actions'>
        {!!action && (
          <div>
            <button
              ref={buttonRef}
              type='button'
              className='banner-button'
              onClick={action.onAction}
            >
              {action.content}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Banner;
