/**
 * Thanks to Github user dylano for supplying a more-accurate
 * solving algorithm!
 */

export function checkGuess(guess, answer) {
  // This constant is a placeholder that indicates we've successfully
  // dealt with this character (it's correct, or misplaced).
  const SOLVED_CHAR = '✓';

  if (!guess) {
    return null;
  }

  const guessChars = guess.toUpperCase().split('');
  const answerChars = answer.split('');

  const result = [];

  // Step 1: Look for correct letters.
  for (let i = 0; i < guessChars.length; i++) {
    if (guessChars[i] === answerChars[i]) {
      result[i] = {
        letter: guessChars[i],
        status: 'correct',
      };
      answerChars[i] = SOLVED_CHAR;
      guessChars[i] = SOLVED_CHAR;
    }
  }

  // Step 2: look for misplaced letters. If it's not misplaced,
  // it must be incorrect.
  for (let i = 0; i < guessChars.length; i++) {
    if (guessChars[i] === SOLVED_CHAR) {
      continue;
    }

    let status = 'incorrect';
    const misplacedIndex = answerChars.findIndex((char) => char === guessChars[i]);
    if (misplacedIndex >= 0) {
      status = 'misplaced';
      answerChars[misplacedIndex] = SOLVED_CHAR;
    }

    result[i] = {
      letter: guessChars[i],
      status,
    };
  }

  return result;
}

export function guessResultIsCorrect(guessResult, length = 5) {
  return guessResult.map(({ status }) => status).filter((status) => status === 'correct').length === length;
}

export function getLetterStatusesFromGuessResults(guessResults) {
  let letterStatuses = {};

  for (let guessResult of guessResults) {
    for (let { letter, status } of guessResult) {
      if (letterStatuses[letter] === 'correct') {
        continue;
      }

      if (letterStatuses[letter] === 'misplaced' && status !== 'correct') {
        continue;
      }

      letterStatuses[letter] = status;
    }
  }

  return letterStatuses;
}

export function getGameStatus(guessResults, maxGuessCount) {
  if (guessResults.length === 0) {
    return 'on';
  }

  const lastGuessResult = guessResults[guessResults.length - 1];
  if (guessResultIsCorrect(lastGuessResult)) {
    return 'won';
  }

  if (guessResults.length >= maxGuessCount) {
    return 'lost';
  }

  return 'on';
}
