import "../styles/App.css"

// eslint-disable-next-line react/prop-types
export function PlayButton({ hideElements, showElements }) {

  function startGame() {
    hideElements();
    showElements();
  }

  return (
    <button className = "btn" onClick={startGame}>
      Start Game!
    </button>
  )
}