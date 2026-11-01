import { ReactNode } from "react";
import { IoClose } from "react-icons/io5";
import "./style.css";

export type PillItem = string | { label: string; icon?: ReactNode };

type PillListProps = {
    items: PillItem[];
    selected?: string | readonly string[];
    onSelect?: (item: string) => void;
    onClear?: () => void;
};

const pillOf = (item: PillItem) => (typeof item === "string" ? { label: item } : item);

const PillList = ({ items, selected, onSelect, onClear }: PillListProps) => {
    const selectedLabels = selected === undefined ? [] : typeof selected === "string" ? [selected] : selected;
    const hasSelection = selectedLabels.length > 0;

    return (
        <ul className={onClear ? "pill-list pill-list-filter" : "pill-list"}>
            {items.map((item) => {
                const { label, icon } = pillOf(item);
                const isSelected = selectedLabels.includes(label);
                return (
                    <li key={label}>
                        {onSelect ? (
                            <button
                                type="button"
                                className={isSelected ? "selected" : undefined}
                                aria-pressed={isSelected}
                                onClick={() => onSelect(label)}
                            >
                                {icon ? <span className="pill-icon" aria-hidden="true">{icon}</span> : null}
                                {label}
                            </button>
                        ) : label}
                    </li>
                );
            })}
            {onClear && hasSelection ? (
                <li>
                    <button type="button" className="pill-clear" aria-label="Clear filters" onClick={onClear}>
                        <IoClose aria-hidden="true" />
                    </button>
                </li>
            ) : null}
        </ul>
    );
};

export default PillList;
