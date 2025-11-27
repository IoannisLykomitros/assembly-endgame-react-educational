const alphabet = "abcdefghijklmnopqrstuvwxyz"

const Keyboard = () => {
  return (
    <section className="keyboard">
        {alphabet.split("").map((letter) => (
            <button key={letter} className="key-button">{letter.toUpperCase()}</button>
        ))}
    </section>
  )
}

export default Keyboard;