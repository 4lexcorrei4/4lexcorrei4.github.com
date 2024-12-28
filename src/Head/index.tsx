import * as React from "react";
import * as ReactDOM from "react-dom";
import { Helmet } from "react-helmet";

const TITLE = "Homepage";
const DESCRIPTION = "Homepage";

interface params {
  title?: string,
  image?: string,
  description?: string,
  children?: React.ReactNode,
};
const Head = ({ title, image, description }: params) => <Helmet>
  <title>{title}</title>
  <meta property="og:title" content={title ?? TITLE} />
  <meta property="og:url" content={`${window.location.host}${window.location.pathname}${window.location.search}`} />
  <meta property="og:description" content={description ?? DESCRIPTION} />
  <meta property="og:type" content="page" />
  <meta name="description" content={description ?? DESCRIPTION} />
</Helmet>

export default Head;