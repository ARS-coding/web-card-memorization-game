import { MouseEventHandler } from 'react';

import './index.css';

interface Props {
  value: string;
  onCardClick: MouseEventHandler<HTMLDivElement>;
  isFlipped: boolean;
  isFound: boolean;
}
export function Card({ value, onCardClick, isFlipped, isFound }: Props) {
  return (
    <div className={`card ${(isFlipped || isFound)? 'card-flipped' : ''}`} onClick={onCardClick}>
      <div className="card-front">{value}</div>
      <div className="card-back"></div>
    </div>
  );
}
