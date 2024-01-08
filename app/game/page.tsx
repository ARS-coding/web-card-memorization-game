import { Game } from "./components/Game";

export default function GamePage() {
    return (
        <div id="game-page" className="h-full flex flex-col items-center justify-center">
            <Game />
        </div>
    )
}