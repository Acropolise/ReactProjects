import { Highscore } from "./components/Highscore";
import { PlayButton } from "./components/PlayButton";

export default function App () {
  // Variables definition
  let highscore = 0;

  // Functions
  function getHighscore() {
    return highscore;
  }

  // Logic
  return (
    <div className="menu-container">
     <PlayButton/>
     <Highscore highscore={getHighscore()}/>
    </div>
  )
}
