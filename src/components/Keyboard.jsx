import clsx from "clsx";

const alphabet = "abcdefghijklmnopqrstuvwxyz"

const Keyboard = (props) => {

  const addGuessedLetter = (letter) => {
    props.setGuessedLetters(prevLetters => 
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