import { useEffect, useState } from "react";
import "./style.css";

type Player = "X" | "O";
type GameCondition = "X Won" | "O Won" | "Draw" | "Game On";
export default function TicTacToe() {
  const [boxes, setBoxes] = useState<(Player | undefined)[]>(
    Array.from({ length: 9 }, () => undefined)
  );
  const [winners, setWinners] = useState<GameCondition[]>([]);

  const [currentPlayer, setCurrentPlayer] = useState<Player>("X");
  const [playing, setPlaying] = useState(true);
  const [gameCondition, setGameCondition] = useState<GameCondition>("Game On");

  function handlePlayed(index: number, currentValue: Player | undefined) {
    if (gameCondition !== "Game On") {
      alert("Game Over");
      return;
    }
    if (currentValue) {
      alert("Position not available");
      return;
    }
    const newBoxes = [...boxes];
    newBoxes[index] = currentPlayer;
    setBoxes(newBoxes);
    checkWinCondition(newBoxes);
  }

  function checkWinCondition(currentState: (Player | undefined)[]) {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    let conditionMet = false;
    for (let i = 0; i < winConditions.length; i++) {
      if (conditionMet) break;
      const positions = winConditions[i];
      conditionMet =
        currentState[positions[0]] === currentPlayer &&
        currentState[positions[1]] === currentPlayer &&
        currentState[positions[2]] === currentPlayer;
    }
    if (conditionMet) {
      setGameCondition(currentPlayer === "X" ? "X Won" : "O Won");
    }
    if (!conditionMet) {
      if (currentState.indexOf(undefined) > -1) {
        setCurrentPlayer((prevPlayer) => (prevPlayer === "O" ? "X" : "O"));
      } else {
        setGameCondition("Draw");
      }
    }
  }

  useEffect(() => {
    if (gameCondition !== "Game On" && playing) {
      setWinners((prevWinners) => [...prevWinners, gameCondition]);
      setPlaying(false);
    }
  }, [gameCondition, playing]); 

  function newGame(): void {
    setPlaying(true);
    setBoxes(Array.from({ length: 9 }, () => undefined));
    setCurrentPlayer("X");
    setGameCondition("Game On");
  }

  return (
    <div className="ttt-container">
      <div className="ttt-board">
        {boxes.map((value, index) => (
          <div
            onClick={() => handlePlayed(index, value)}
            className="ttt-box"
            key={index}
          >
            {value}
          </div>
        ))}
      </div>
      <div>
        <h1>
          {gameCondition === "Game On"
            ? `It is ${currentPlayer} to play!`
            : gameCondition}
        </h1>
      </div>
      <div>
        {gameCondition !== "Game On" && (
          <button onClick={newGame}>Restart Game;</button>
        )}
      </div>
      <hr />
      <h3>History</h3>
      <ul>
        {winners.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
}
