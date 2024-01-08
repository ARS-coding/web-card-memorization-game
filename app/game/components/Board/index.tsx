import React, { useState, useEffect } from 'react';

import { Card } from '../Card';
import { UNIQUE_CARDS } from '../../../constants';
import './index.css';

interface Card { emoji: string, index: number };
interface Props { setGameOver: Function, setFlipCount: Function };
export function Board({ setGameOver, setFlipCount }: Props) {
  const [boardData, setBoardData] = useState<Card[]>([]); // cards to render
  const [foundCards, setFoundCards] = useState<Card[]>([]); // cards to keep as flipped
  const [flippedCards, setFlippedCards] = useState<Card[]>([]); // cards to show as flipped for the moment

  useEffect(() => { // set up the state for the component at it's initial render
    (function initialize() {
      (function shuffle() {
        const duplicateCards = [...UNIQUE_CARDS, ...UNIQUE_CARDS].map((emoji, index) => ({ emoji, index }));
        const shuffledCards = duplicateCards.sort(() => Math.random() - 0.5);
        setBoardData(shuffledCards);
      })();
      setFoundCards([]);
      setFlippedCards([]);
    })();
  }, []);

  useEffect(() => { // when the component is rendering with two flipped cards, check if they are the same
    const shouldCompare = flippedCards.length == 2;
    if (shouldCompare) {
      const [firstCard, secondCard] = flippedCards;

      const isFound = firstCard.emoji === secondCard.emoji;
      if (isFound) {
        setFoundCards((foundCards) => [...foundCards, firstCard, secondCard]);
      }

      setTimeout(() => {
        setFlippedCards([]);
      }, 600);
    }
  }, [flippedCards, setFoundCards, setFlippedCards]);

  useEffect(() => {
    const areAllCardsFound = boardData.length === foundCards.length;
    if(areAllCardsFound) {
        setGameOver(true);
    }
  }, [boardData.length, foundCards.length, setGameOver]);

  function onCardClick(cardIndex: number) { // flip the unflipped cards when I click
    const isFound = Boolean(foundCards.find(({ index }) => index === cardIndex));
    console.log("isFound: ", isFound);
    if (!isFound) {
      (function onFlip() {
        setFlippedCards([...flippedCards, (boardData.find(({ index }) => index === cardIndex) as Card)]);
        setFlipCount((flipCount: number) => flipCount + 1);
      })();
    }
  }

  return (
    <div className="game">

      <div className="board">
        {boardData.map(({ emoji, index }) => (
          <Card
            key={index}
            value={emoji}
            onCardClick={() => onCardClick(index)}
            isFlipped={Boolean(flippedCards.find(({ index: cardIndex }) => cardIndex === index))}
            isFound={Boolean(foundCards.find(({ index: cardIndex }) => cardIndex === index))}
          />
        ))}
      </div>
    </div>
  );
}
