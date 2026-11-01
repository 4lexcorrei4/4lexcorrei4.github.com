import "./style.css";

export type MonogramItem = {
    short: string;
    label: string;
    level: string;
};

type MonogramListProps = {
    items: MonogramItem[];
};

const MonogramList = ({ items }: MonogramListProps) => (
    <ul className="monogram-list">
        {items.map((item) => (
            <li key={item.short}>
                <span className="short">{item.short}</span>
                <span className="detail">
                    <span className="label">{item.label}</span>
                    <span className="level">{item.level}</span>
                </span>
            </li>
        ))}
    </ul>
);

export default MonogramList;
