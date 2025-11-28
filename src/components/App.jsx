import { useState } from "react";
import Header from "./Header.jsx";
import Status from "./Status.jsx";
import LanguageList from "./LanguageList.jsx";
import Keyboard from "./Keyboard.jsx";
import { languages } from "../languages.js";
import { getFarewellText } from "../utils.js";

const AssemblyEndgame = () => {

  const [currentWord, setCurrentWord] = useState('react');
  const [guessedLetters, setGuessedLetters] = useState([]);

  const wrongGuessCount = guessedLetters.filter(letter => !currentWord.includes(letter)).length;

  const isGameWon = currentWord.split("").every(letter => guessedLetters.includes(letter));
  const isGameLost = wrongGuessCount >= languages.length - 1;
  const isGameOver = isGameWon || isGameLost;

  const letterElements = currentWord.split("").map((letter, index) => (
    <span key={index} className="letter-box">{guessedLetters.includes(letter) ? letter.toUpperCase() : ""}</span>
  ))

  const lastGuessedLetter = guessedLetters[guessedLetters.length - 1]
  const isLastGuessIncorrect = lastGuessedLetter && !currentWord.includes(lastGuessedLetter)

  const getFarewellMessage = () => {
    return getFarewellText(languages[wrongGuessCount - 1].name);
  }

  return (
    <main>
      <Header />
      <Status 
        isGameWon={isGameWon} 
        isGameLost={isGameLost}
        isGameOver={isGameOver}
        isLastGuessIncorrect={isLastGuessIncorrect}
        getFarewellText={getFarewellMessage}
      />
      <LanguageList wrongGuessCount={wrongGuessCount} />
      <section className="word-container">
        {letterElements}
      </section>
      <Keyboard 
        guessedLetters={guessedLetters} 
        setGuessedLetters={setGuessedLetters} 
        currentWord={currentWord} 
      />
      {isGameOver && <button className="new-game">New Game</button>}
    </main>   
  )
}

export default AssemblyEndgame