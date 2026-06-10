import useGame from "../../hooks/useGame";
import styles from "./PlayingScreen.module.css";

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
    <section className={styles.screen}>
      <h1 className={styles.title}>Jugando</h1>
      <h2 className={styles.timer}>
        Tiempo restante
        <span className={styles.timerValue}>{timeLeft}</span>
      </h2>
      <div className={styles.letterCard}>
        <span className={styles.letterLabel}>Letra: </span>
        <span className={styles.letter}>{letter}</span>
      </div>
      <p className={styles.hint}>
        Presiona la tecla que corresponde a la letra que ves
      </p>
    </section>
  );
}

export default PlayingScreen;
