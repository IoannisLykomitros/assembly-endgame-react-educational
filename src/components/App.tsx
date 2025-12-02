import { useState } from "react";
import Header from "./Header";
import Status from "./Status";
import LanguageList from "./LanguageList";
import Keyboard from "./Keyboard";
import { languages } from "../languages.ts";
import { getFarewellText, getRandomWord } from "../utils";
import ReactConfetti from "react-confetti";
import clsx from "clsx";

const AssemblyEndgame = () => {

  const [currentWord, setCurrentWord] = useState<string>(():string => getRandomWord());
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const wrongGuessCount: number = guessedLetters.filter(letter => !currentWord.includes(letter)).length;

  const isGameWon: boolean = currentWord.split("").every(letter => guessedLetters.includes(letter));
  const isGameLost: boolean = wrongGuessCount >= languages.length - 1;
  const isGameOver: boolean = isGameWon || isGameLost;

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

  const lastGuessedLetter: string | undefined = guessedLetters[guessedLetters.length - 1]
  const isLastGuessIncorrect: string | boolean = lastGuessedLetter && !currentWord.includes(lastGuessedLetter)

  const getFarewellMessage = (): string => {
    return getFarewellText(languages[wrongGuessCount - 1].name);
  }

  const startNewGame = (): void => {
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