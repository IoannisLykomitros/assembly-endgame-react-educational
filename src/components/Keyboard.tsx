import type { JSX } from "react";
import clsx from "clsx";

const alphabet = "abcdefghijklmnopqrstuvwxyz"

type KeyboardProps = {
  guessedLetters: string[];
  setGuessedLetters: (letters: string[] | ((prevLetters: string[]) => string[])) => void;
  currentWord: string;
  isGameOver: boolean;
}

const Keyboard = (props: KeyboardProps): JSX.Element => {

  const addGuessedLetter = (letter: string): void => {
    props.setGuessedLetters((prevLetters: string[]): string[] => 
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
    );
  }

  return (
    <section className="keyboard">
      {alphabet.split("").map(letter => {
        const isGuessed = props.guessedLetters.includes(letter)
        const isCorrect = isGuessed && props.currentWord.includes(letter)
        const isWrong = isGuessed && !props.currentWord.includes(letter)
        
        return (
            <button
                disabled={props.isGameOver}
                className={clsx("key-button", {
                  "guessed-correct": isCorrect,
                  "guessed-wrong": isWrong
                  
                })}
                key={letter}
                onClick={() => addGuessedLetter(letter)}
            >
                {letter.toUpperCase()}
            </button>
        )
      })}
    </section>
  )
}

export default Keyboard;