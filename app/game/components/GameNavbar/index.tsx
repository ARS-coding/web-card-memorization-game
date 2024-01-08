import "./index.css";

interface Props { flipCount: number, gameOver: boolean };
export function GameNavbar({ flipCount, gameOver }: Props) {
  return (
    <div className="flex justify-between mb-4 text-lg">
      <span>{flipCount}</span>
      <span>{gameOver ? 'Congratulations, you won! 🎉' : 'Good luck!'}</span>
    </div>
  );
}
