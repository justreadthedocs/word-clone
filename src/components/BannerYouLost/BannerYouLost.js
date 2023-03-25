import Banner from '../Banner/Banner';

export default function BannerYouLost({ answer, onGameRestart }) {
  return (
    <Banner
      status='critical'
      title='You lost...'
      action={{ content: 'Restart Game', onAction: onGameRestart }}
    >
      Sorry, the correct answer is <strong>{answer}</strong>.
    </Banner>
  );
}
