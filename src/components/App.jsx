import { useState } from "react";
import Header from "./Header.jsx";
import Status from "./Status.jsx";
import LanguageList from "./LanguageList.jsx";
import Keyboard from "./Keyboard.jsx";

const AssemblyEndgame = () => {

  const [currentWord, setCurrentWord] = useState('react');
  const [guessedLetters, setGuessedLetters] = useState([]);

  const wrongGuessCount = guessedLetters.filter(letter => !currentWord.includes(letter)).length;

  console.log(wrongGuessCount);

  const letterElements = currentWord.split("").map((letter, index) => (
    <span key={index} className="letter-box">{guessedLetters.includes(letter) ? letter.toUpperCase() : ""}</span>
  ))

  return (
    <main>
      <Header />
      <Status />
      <LanguageList />
      <section className="word-container">
        {letterElements}
      </section>
      <Keyboard guessedLetters={guessedLetters} setGuessedLetters={setGuessedLetters} currentWord={currentWord} />
      <button className="new-game">New Game</button>
    </main>   
  )
}

export default AssemblyEndgame