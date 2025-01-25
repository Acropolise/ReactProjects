import { useState } from "react";
import { Highscore } from "./components/Highscore";
import { PlayButton } from "./components/PlayButton";
import { Question } from "./components/Question";

export default function App () {
  // Variables definition
  const [m_isVisible, setm_isVisible] = useState(true);
  const [g_isVisible, setg_isVisible] = useState(false);
  const [highscore, setHighscore] = useState(0);

  // Functions
  function getHighscore() {
    return highscore;
  }

  // Logic
  return (
    <div className="menu-container">
      {m_isVisible && ( <>
      <PlayButton hideElements = {() => setm_isVisible(false) } showElements={() => setg_isVisible(true)}/>
      <Highscore highscore={ getHighscore() }/>
      </>
    )}
    {g_isVisible && (<>
    <Question/>
    </>)}
    </div>

  );
}
