import Head from "./Head";

interface Props {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
}

const TITLE = "Homepage";
const DESCRIPTION = "Homepage";
const IMAGE = "/assets/favico.ico";

export const CreateHead = ({
    title = TITLE,
    description = DESCRIPTION,
    image = IMAGE
}: Props) => (
    <Head>
        <meta property="og:title" content={title ?? TITLE} />
        <meta property="og:url" content={`${window.location.host}${window.location.pathname}${window.location.search}`} />
        <meta property="og:image" content={image ?? IMAGE} />
        <meta property="og:description" content={description ?? DESCRIPTION} />
        <meta property="og:type" content="page" />
        <meta name="description" content={description ?? DESCRIPTION} />
    </Head>
);