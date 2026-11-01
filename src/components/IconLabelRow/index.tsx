import "./style.css";

export type IconLabel = {
    src: string;
    label: string;
};

type IconLabelRowProps = {
    items: IconLabel[];
};

const IconLabelRow = ({ items }: IconLabelRowProps) => (
    <ul className="icon-label-row">
        {items.map((item) => (
            <li key={item.label}>
                <img src={item.src} alt="" />
                {item.label}
            </li>
        ))}
    </ul>
);

export default IconLabelRow;
