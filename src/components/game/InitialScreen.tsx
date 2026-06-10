import styles from './InitialScreen.module.css';

function InitialScreen({ onStart }: { onStart: () => void }) {
  return (
    <section>
      <h1>Teclea la letra</h1>
      <button className={styles.start} onClick={onStart}>
        Start
      </button>
    </section>
  );
}

export default InitialScreen;
