import type { JSX } from "react";
import { languages } from "../languages";

type LanguageListProps = {
    wrongGuessCount: number;
}

const LanguageList = (props: LanguageListProps): JSX.Element => {
    const isWrong = (index: number): boolean => {
        return index < props.wrongGuessCount;
    }

    return (
        <section className="language-list">
            {languages.map((lang) => (
                <span
                    key={lang.name}
                    className={isWrong(languages.indexOf(lang)) ? "language-item lost" : "language-item" }
                    style={{ backgroundColor: lang.backgroundColor, color: lang.color }}
                >{lang.name}</span>
            ))
            }
        </section>
    );
}

export default LanguageList;