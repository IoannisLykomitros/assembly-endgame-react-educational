import { useState } from "react";
import Header from "./Header.jsx";
import Status from "./Status.jsx";
import LanguageList from "./LanguageList.jsx";
import Keyboard from "./Keyboard.jsx";
import { languages } from "../languages.ts";
import { getFarewellText, getRandomWord } from "../utils.js";
import ReactConfetti from "react-confetti";
import clsx from "clsx";

const AssemblyEndgame = () => {

  const [currentWord, setCurrentWord] = useState(() => getRandomWord());
  const [guessedLetters, setGuessedLetters] = useState([]);

  const wrongGuessCount = guessedLetters.filter(letter => !currentWord.includes(letter)).length;

  const isGameWon = currentWord.split("").every(letter => guessedLetters.includes(letter));
  const isGameLost = wrongGuessCount >= languages.length - 1;
  const isGameOver = isGameWon || isGameLost;

 const letterElements = currentWord.split("").map((letter, index) => {
    const shouldRevealLetter = isGameLost || guessedLetters.includes(letter)
    const letterClassName = clsx(
        isGameLost && !guessedLetters.includes(letter) && "missed-letter"
    )
    return (
        <span key={index} className={letterClassName}>
            {shouldRevealLetter ? letter.toUpperCase() : ""}
        </span>
    )
  })
  const lastGuessedLetter = guessedLetters[guessedLetters.length - 1]
  const isLastGuessIncorrect = lastGuessedLetter && !currentWord.includes(lastGuessedLetter)

  const getFarewellMessage = () => {
    return getFarewellText(languages[wrongGuessCount - 1].name);
  }

  const startNewGame = () => {
    setCurrentWord(getRandomWord());
    setGuessedLetters([]);
  }

  return (
    <main>
      {isGameWon && <ReactConfetti />}
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
        isGameOver={isGameOver}
      />
      {isGameOver && <button className="new-game" onClick={startNewGame}>New Game</button>}
    </main>   
  )
}

export default AssemblyEndgame