import React from 'react';

function GuessInput({ onSubmit, disabled }) {
  const [value, setValue] = React.useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (disabled) {
      return;
    }

    onSubmit(value);

    setValue('');
  };

  const handleInputChange = (event) => {
    const nextQuery = event.target.value?.toUpperCase();

    setValue(nextQuery);
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className='guess-input-wrapper'
    >
      <label htmlFor='guess-input'>Enter a 5-letter guess:</label>
      <input
        type='text'
        id='guess-input'
        pattern='\w{5}'
        title='The guess must be of 5 letters'
        disabled={disabled}
        value={value}
        onChange={handleInputChange}
      />
    </form>
  );
}

export default GuessInput;
