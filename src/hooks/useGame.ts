import { useEffect, useState } from "react";

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const MAX_SCORE = 10;
const TIME_LIMIT = 5;

function makeInitialLetter(): string {
  return LETTERS[Math.floor(Math.random() * LETTERS.length)];
}

export default function useGame({
  score,
  onScoreChange,
  onGameOver,
}: {
  score: number;
  onScoreChange: (newScore: number) => void;
  onGameOver: () => void;
}) {
  const [letter, setLetter] = useState(makeInitialLetter());
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key.toLocaleUpperCase() !== letter) return;
      setLetter(makeInitialLetter());
      onScoreChange(score + 1);
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [letter]);

  useEffect(() => {
    if (score >= MAX_SCORE) onGameOver();
  }, [score]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft <= 0) {
        onGameOver();
        return;
      }
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  return { letter, timeLeft };
}
