'use client';
import { useState, useEffect } from "react";

import { GameNavbar } from "../GameNavbar";
import { Board } from "../Board";

export function Game() {
  const [gameOver, setGameOver] = useState(false);
  const [flipCount, setFlipCount] = useState(0);

  useEffect(() => { // set up the state for the component at it's initial render
    setGameOver(false);
    setFlipCount(0);
  }, []);

    return (
        <div className="game">
            <GameNavbar gameOver={gameOver} flipCount={flipCount} />
            <Board  setGameOver={setGameOver} setFlipCount={setFlipCount} />
        </div>
    )
}