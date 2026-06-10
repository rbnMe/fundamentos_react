import { config } from "../config/config";

export const sendScore = (score: number) => {
  return fetch(`${config.apiUrl}/game/score`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ score }),
  }).then((res) => res.json());
};
