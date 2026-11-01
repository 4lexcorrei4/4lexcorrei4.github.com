import "./style.css";

type PhraseLineProps = {
    items: string[];
};

const PhraseLine = ({ items }: PhraseLineProps) => (
    <p className="phrase-line">
        {items.map((item, index) => (
            <span key={item}>
                {index > 0 && <span className="phrase-line-separator">·</span>}
                {item}
            </span>
        ))}
    </p>
);

export default PhraseLine;
