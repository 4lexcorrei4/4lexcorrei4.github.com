import { ReactNode } from "react";
import { Link } from "react-router-dom";
import "./style.css";

type LinkCardProps = {
    to: string;
    image?: string;
    title: string;
    meta?: ReactNode;
    selected?: boolean;
};

const LinkCard = ({ to, image, title, meta, selected }: LinkCardProps) => (
    <Link className={selected ? "link-card is-selected" : "link-card"} to={to} aria-current={selected ? "page" : undefined}>
        <span
            className="link-card-image"
            style={{ backgroundImage: `url(${image ?? "/assets/white_square.jpg"})` }}
            aria-hidden="true"
        />
        <span className="link-card-body">
            <span className="link-card-title">{title}</span>
            {meta ? <span className="link-card-meta">{meta}</span> : null}
        </span>
    </Link>
);

export default LinkCard;
