import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

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
    "Tarot by Charm, tarot by charm reading, tarot by charm online, tarot by charm booking, tarot by charm appointment, tarot by charm psychic, tarot by charm spiritual, tarot by charm love reading, tarot by charm career reading, tarot by charm future reading, tarot by charm accurate, tarot by charm professional, tarot by charm expert, tarot by charm certified, tarot by charm reviews, tarot by charm testimonials, tarot by charm near me, tarot by charm online reading, tarot by charm phone reading, tarot by charm video reading, tarot by charm instant reading, tarot by charm free consultation, tarot by charm pricing, tarot by charm packages, tarot by charm services, tarot by charm spiritual guidance, tarot by charm life coach, tarot by charm advisor, tarot by charm consultant, tarot by charm healer, tarot by charm medium, tarot by charm clairvoyant, tarot by charm intuitive, tarot by charm gifted, tarot by charm authentic, tarot by charm genuine, tarot by charm trusted, tarot by charm reliable, tarot by charm experienced, tarot by charm qualified, tarot by charm licensed, tarot by charm certified reader, tarot by charm professional reader, tarot by charm expert reader, tarot by charm master reader, tarot by charm senior reader, tarot by charm lead reader, tarot by charm head reader, tarot by charm chief reader, tarot by charm principal reader, tarot by charm director reader, tarot by charm manager reader, tarot by charm supervisor reader, tarot by charm coordinator reader, tarot by charm specialist reader, tarot by charm consultant reader, tarot by charm advisor reader, tarot by charm counselor reader, tarot by charm therapist reader, tarot by charm healer reader, tarot by charm medium reader, tarot by charm clairvoyant reader, tarot by charm intuitive reader, tarot by charm gifted reader, tarot by charm authentic reader, tarot by charm genuine reader, tarot by charm trusted reader, tarot by charm reliable reader, tarot by charm experienced reader, tarot by charm qualified reader, tarot by charm licensed reader, tarot by charm certified tarot reader, tarot by charm professional tarot reader, tarot by charm expert tarot reader, tarot by charm master tarot reader, tarot by charm senior tarot reader, tarot by charm lead tarot reader, tarot by charm head tarot reader, tarot by charm chief tarot reader, tarot by charm principal tarot reader, tarot by charm director tarot reader, tarot by charm manager tarot reader, tarot by charm supervisor tarot reader, tarot by charm coordinator tarot reader, tarot by charm specialist tarot reader, tarot by charm consultant tarot reader, tarot by charm advisor tarot reader, tarot by charm counselor tarot reader, tarot by charm therapist tarot reader, tarot by charm healer tarot reader, tarot by charm medium tarot reader, tarot by charm clairvoyant tarot reader, tarot by charm intuitive tarot reader, tarot by charm gifted tarot reader, tarot by charm authentic tarot reader, tarot by charm genuine tarot reader, tarot by charm trusted tarot reader, tarot by charm reliable tarot reader, tarot by charm experienced tarot reader, tarot by charm qualified tarot reader, tarot by charm licensed tarot reader, tarot by charm certified psychic reader, tarot by charm professional psychic reader, tarot by charm expert psychic reader, tarot by charm master psychic reader, tarot by charm senior psychic reader, tarot by charm lead psychic reader, tarot by charm head psychic reader, tarot by charm chief psychic reader, tarot by charm principal psychic reader, tarot by charm director psychic reader, tarot by charm manager psychic reader, tarot by charm supervisor psychic reader, tarot by charm coordinator psychic reader, tarot by charm specialist psychic reader, tarot by charm consultant psychic reader, tarot by charm advisor psychic reader, tarot by charm counselor psychic reader, tarot by charm therapist psychic reader, tarot by charm healer psychic reader, tarot by charm medium psychic reader, tarot by charm clairvoyant psychic reader, tarot by charm intuitive psychic reader, tarot by charm gifted psychic reader, tarot by charm authentic psychic reader, tarot by charm genuine psychic reader, tarot by charm trusted psychic reader, tarot by charm reliable psychic reader, tarot by charm experienced psychic reader, tarot by charm qualified psychic reader, tarot by charm licensed psychic reader, tarot by charm certified spiritual reader, tarot by charm professional spiritual reader, tarot by charm expert spiritual reader, tarot by charm master spiritual reader, tarot by charm senior spiritual reader, tarot by charm lead spiritual reader, tarot by charm head spiritual reader, tarot by charm chief spiritual reader, tarot by charm principal spiritual reader, tarot by charm director spiritual reader, tarot by charm manager spiritual reader, tarot by charm supervisor spiritual reader, tarot by charm coordinator spiritual reader, tarot by charm specialist spiritual reader, tarot by charm consultant spiritual reader, tarot by charm advisor spiritual reader, tarot by charm counselor spiritual reader, tarot by charm therapist spiritual reader, tarot by charm healer spiritual reader, tarot by charm medium spiritual reader, tarot by charm clairvoyant spiritual reader, tarot by charm intuitive spiritual reader, tarot by charm gifted spiritual reader, tarot by charm authentic spiritual reader, tarot by charm genuine spiritual reader, tarot by charm trusted spiritual reader, tarot by charm reliable spiritual reader, tarot by charm experienced spiritual reader, tarot by charm qualified spiritual reader, tarot by charm licensed spiritual reader, tarot reading, online tarot, love tarot, career tarot, tarot reader, tarot card reading, spiritual guidance, accurate tarot readings, psychic reading, tarot consultation, tarot consulting, tarot, charm reading, tarot blog, tarot articles, tarot news, tarot updates, tarot by charm, charm astrology, astrology reading, free astrology predictions, zodiac compatibility, birth chart reading, daily horoscope, love horoscope, career astrology, astrology online, accurate astrology readings, charm astrology birth chart analysis, accurate zodiac compatibility by charm astrology tarot, charm astrology love and relationship readings, free daily horoscope by charm astrology tarot, charm astrology Myanmar zodiac reading, online astrology consultation, charm astrology consultation Myanmar, charm astrology personal reading service, astrology service in Myanmar,charm astrology Burmese zodiac, Myanmar astrology chart reading, charm astrology horoscope Myanmar, astrology in Myanmar language, what’s my true zodiac sign, find your real moon sign, discover your astrology destiny, charm astrology truth about your future, နက္ခတ်ဗေဒင်, တားရော့ဖတ်ခြင်း, တားရော့ကဒ်ဖတ်ခြင်း, တားရော့ by charm, တားရော့အွန်လိုင်း, တားရော့စာဖတ်, တားရော့စာဖတ်ဝန်ဆောင်မှု, တားရော့စာဖတ်အကြံပေး, တားရော့စာဖတ်စျေးနှုန်း, တားရော့စာဖတ်အတွေ့အကြုံ, တားရော့စာဖတ်သုံးသပ်ချက်, တားရော့စာဖတ်အကြံဉာဏ်, တားရော့စာဖတ်အချစ်, တားရော့စာဖတ်အလုပ်အကိုင်, တားရော့စာဖတ်အနာဂတ်, တားရော့စာဖတ်တိကျမှု, တားရော့စာဖတ်ပညာရှင်, တားရော့စာဖတ်အတိုင်ပင်ခံ, တားရော့စာဖတ်အွန်လိုင်း, တားရော့စာဖတ် appointment, တားရော့စာဖတ် booking, တားရော့စာဖတ် Myanmar, နက္ခတ်ဗေဒင်, နက္ခတ်စာဖတ်ခြင်း, နက္ခတ်ဗေဒင်အကြံပေး, နက္ခတ်ဗေဒင်အနာဂတ်, နက္ခတ်ဗေဒင်အချစ်, နက္ခတ်ဗေဒင်အလုပ်အကိုင်, နက္ခတ်ဗေဒင်အွန်လိုင်း, နက္ခတ်ဗေဒင်စာဖတ်ဝန်ဆောင်မှု";
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

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  type: PropTypes.string,
  structuredData: PropTypes.object,
};
