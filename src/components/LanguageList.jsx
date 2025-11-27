import { languages } from "../languages";

const LanguageList = () => {
    return (
        <section className="language-list">
            {languages.map((lang) => (
                <span
                    key={lang.name}
                    className="language-item"
                    style={{ backgroundColor: lang.backgroundColor, color: lang.color }}
                >{lang.name}</span>
            ))}
        </section>
    );
}

export default LanguageList;