function GameOverScreen({
  score,
  onRestart,
}: {
  score: number;
  onRestart: () => void;
}) {
  return (
    <section>
      <h1>Game Over</h1>
      <p>Has llegado al final del juego</p>
      <p>tu puntuación es: {score}</p>
      <button onClick={onRestart}>Reiniciar</button>
    </section>
  );
}

export default GameOverScreen;
