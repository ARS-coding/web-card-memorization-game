"use client"

import React, { useState, useEffect } from "react";

import { Card } from '../Card'
import "./index.css"

interface Card { name: string, value: string }
const uniqueCards = [
    { name: 'dog', value: '🐶' },
    { name: 'cat', value: '🐱' },
    { name: 'mouse', value: '🐭' },
    { name: 'rabbit', value: '🐰' },
    { name: 'fox', value: '🦊' },
    { name: 'bear', value: '🐻' },
    { name: 'panda', value: '🐼' },
    { name: 'lion', value: '🦁' },
    { name: 'cow', value: '🐮' },
    { name: 'monkey', value: '🐵' },
];

export function Board() {
    const [boardData, setBoardData] = useState<Card[]>([]);


    useEffect(() => {
        initialize();
    }, []);

    function initialize() {
        shuffle();
    }

    function shuffle() {
        const shuffledCards = [...uniqueCards, ...uniqueCards].sort(() => Math.random() - 0.5);
        setBoardData(shuffledCards);
    }

    return (
        <div className="board">
            {boardData.map((card, i) => <Card key={i} value={card.value} />)}
        </div>
    )
}