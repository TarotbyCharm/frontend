import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({
  title,
  description,
  keywords,
  image,
  url,
  type = "website",
  structuredData,
}) => {
  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title;
    }
  }, [title]);

  const defaultTitle =
    "Tarot by Charm | Accurate Tarot Readings & Spiritual Guidance";
  const defaultDescription =
    "Discover your future and gain clarity with Tarot by Charm. Expert tarot readings, love & career insights, and personalized spiritual guidance. Book your session today!";
  const defaultKeywords =
    "Tarot by Charm, tarot reading, online tarot, love tarot, career tarot, tarot reader, tarot card reading, spiritual guidance, accurate tarot readings, psychic reading, tarot consultation, tarot consulting, tarot, charm reading, tarot blog, tarot articles, tarot news, tarot updates, tarot by charm";
  const defaultImage = "https://tarotbycharm.com/website.png";
  const baseUrl = "https://tarotbycharm.com";

  const finalTitle = title || defaultTitle;
  const finalDescription = description || defaultDescription;
  const finalKeywords = keywords || defaultKeywords;
  const finalImage = image || defaultImage;
  const finalUrl = url ? `${baseUrl}${url}` : baseUrl;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="title" content={finalTitle} />
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />

      {/* Canonical URL */}
      <link rel="canonical" href={finalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={finalUrl} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="Tarot by Charm - Professional Tarot Reading Services"
      />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@tarotbycharm" />
      <meta name="twitter:creator" content="@tarotbycharm" />
      <meta name="twitter:url" content={finalUrl} />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalImage} />
      <meta
        name="twitter:image:alt"
        content="Tarot by Charm - Professional Tarot Reading Services"
      />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
