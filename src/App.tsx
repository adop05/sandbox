import { useState } from "react";
import "./App.css";

const phrases = [
  "No",
  "Emily...",
  "BABY CMON!",
  "DONT BE LIKE THATTTT",
  "Say no one more time Emily...",
  "F*** ;(",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            src="https://media1.tenor.com/m/tl4tMev7ICEAAAAC/instagram-zefexwoo-shaurya.gif"
            alt="bears kissing"
          />
          <div className="text">Yay!!!!</div>
        </>
      ) : (
        <>
          <img
            src="https://i.pinimg.com/originals/d7/2f/c9/d72fc961a47eec1396864393ff33a566.gif"
            alt="bears with hearts"
          />

          <div>Will you be my valentine?</div>
          <div>
            <button
              className="yesButton"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button onClick={handleNoClick} className="noButton">
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
