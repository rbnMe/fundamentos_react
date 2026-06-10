import styles from "./GameOverScreen.module.css";

function GameOverScreen({
  score,
  onRestart,
}: {
  score: number;
  onRestart: () => void;
}) {
  return (
    <section className={styles.screen}>
      <h1 className={styles.title}>Game Over</h1>
      <p className={styles.message}>Has llegado al final del juego</p>
      <div className={styles.scoreCard}>
        <span className={styles.scoreLabel}>Tu puntuación</span>
        <span className={styles.scoreValue}>{score}</span>
      </div>
      <button className={styles.restart} onClick={onRestart}>
        Reiniciar
      </button>
    </section>
  );
}

export default GameOverScreen;
