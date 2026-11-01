import "./style.css";

type IntroPhotoProps = {
    image: string;
};

export const IntroPhoto = ({ image }: IntroPhotoProps) => (
    <img className="intro-picture" src={image} alt="" />
);

type IntroDescriptionProps = {
    paragraphs: string[];
};

export const IntroDescription = ({ paragraphs }: IntroDescriptionProps) => (
    <div className="intro-description">
        {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
    </div>
);
