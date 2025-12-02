import type { JSX } from "react";

const Header = (): JSX.Element => {
    return (
        <header className="header">
            <h1>Assembly: Endgame</h1>
            <p>Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>
        </header>
    );
}

export default Header;