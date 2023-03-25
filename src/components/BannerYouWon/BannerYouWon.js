import Banner from '../Banner/Banner';

export default function BannerYouWon({ guessResults, onGameRestart }) {
  return (
    <Banner
      status='success'
      title='You won!'
      action={{ content: 'Restart Game', onAction: onGameRestart }}
    >
      Congratulations! Got it in{' '}
      <strong>
        {guessResults.length} {guessResults.length === 1 ? 'guess' : 'guesses'}
      </strong>
      .
    </Banner>
  );
}
