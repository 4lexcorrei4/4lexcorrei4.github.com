import { ReactNode } from "react";
import "./style.css";

type CardGridProps = {
    children: ReactNode;
};

const CardGrid = ({ children }: CardGridProps) => (
    <ul className="card-grid">{children}</ul>
);

export default CardGrid;
