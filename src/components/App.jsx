import { useState } from "react";
import Header from "./Header.jsx";
import Status from "./Status.jsx";
import LanguageList from "./LanguageList.jsx";

const AssemblyEndgame = () => {

  const [currentWord, setCurrentWord] = useState('react');

  const letterElements = currentWord.split("").map((letter, index) => (
    <span key={index} className="letter-box">{letter.toUpperCase()}</span>
  ))

  return (
    <main>
      <Header />
      <Status />
      <LanguageList />
      <section className="word-container">
        {letterElements}
      </section>
    </main>   
  )
}

export default AssemblyEndgame