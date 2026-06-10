import { useState } from "react";
import InitialScreen from "./InitialScreen";
import PlayingScreen from "./PlayingScreen";
import GameOverScreen from "./GameOverScreen";
import { sendScore } from "../../api/juego";

function Game() {
  ///ESTADOS
  const [status, setStatus] = useState<"idle" | "playing" | "over">("idle");
  const [score, setScore] = useState(0);

  //functions
  const handleStart = () => {
    setStatus("playing");
  };

  const handleReset = () => {
    setStatus("idle");
    setScore(0);
  };

  const handleGameOver = () => {
    sendScore(score)
      .then(() => {
        console.log("ENVIANDO SCORE");
      })
      .catch((e) => {
        console.log("Error al enviar", e);
      });
    setStatus("over");
  };

  return (
    <>
      {status === "idle" && <InitialScreen onStart={handleStart} />}
      {status === "playing" && (
        <PlayingScreen
          score={score}
          onScoreChange={setScore}
          onGameOver={handleGameOver}
        />
      )}
      {status === "over" && (
        <GameOverScreen score={score} onRestart={handleReset} />
      )}
    </>
  );
}

export default Game;
