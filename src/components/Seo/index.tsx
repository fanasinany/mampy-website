import React, { FC } from "react";
import { useSiteMetadata } from "../../hooks/use-site-metadata";

type SeoProps = {
  title?: string;
  description?: string;
  pathname?: string;
  children?: any;
};

export const SEO: FC<SeoProps> = ({
  title,
  description,
  pathname,
  children,
}) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    siteUrl,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="description" content={seo.description} />
      <meta name="title" content={seo.title} />
      <meta
        name="keywords"
        content="Mampii, Mampionona Rakotojaona, Mampi, Mampionona, Rakotojaona, Mampy"
      />

      <meta property="og:URL" content={seo.url} />
      <meta property="og:type" content="siteweb" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta
        property="og:keywords"
        content="Mampii, Mampionona Rakotojaona, Mampi, Mampionona, Rakotojaona, Mampy"
      />
      {children}
    </>
  );
};
