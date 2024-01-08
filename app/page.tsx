export default function Start() {
  return (
    <div id="start-page" className="h-full flex flex-col items-center justify-center">
      <h1 className="text-5xl mb-4 text-sky-400">Card Memorization Game</h1>
      <p className="w-2/5 mb-6 text-center text-stone-300">Card memorization game is a mental exercise that involves remembering the positions of cards in a deck. Typically, cards are laid out face down, and the player flips them over two at a time, trying to find matching pairs. The challenge lies in remembering the positions of the cards as they are flipped, so that when a player uncovers a card, they can recall where its matching pair might be. It&quot;s a great way to improve memory, concentration, and cognitive skills.</p>
      <a href="/game" className="bg-sky-400 text-xl px-20 py-2 rounded">Play!</a>
    </div>
  )
}
