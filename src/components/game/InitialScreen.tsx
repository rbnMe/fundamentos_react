function InitialScreen({ onStart }: { onStart: () => void }) {
  return (
    <section>
      <h1>Teclea la letra</h1>
      <button onClick={onStart}>Start</button>
    </section>
  );
}

export default InitialScreen;
