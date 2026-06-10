import useGame from "../../hooks/useGame";

function PlayingScreen({
  score,
  onScoreChange,
  onGameOver,
}: {
  score: number;
  onScoreChange: (newScore: number) => void;
  onGameOver: () => void;
}) {
  const { letter, timeLeft } = useGame({ score, onScoreChange, onGameOver });
  return (
    <section>
      <h1>Jugando</h1>
      <h2>Tiempo restante: {timeLeft}</h2>
      <p>Presiona la tecla que corresponde a la letra que ves</p>
      <div>
        <span>Letra: </span>
        <span>{letter}</span>
      </div>
    </section>
  );
}

export default PlayingScreen;
