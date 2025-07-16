import Zodiac from "./Home/Zodiac";
import SEO from "@/components/SEO";

export default function Zodiacs() {
  return (
    <>
      <SEO
        title="Zodiac Signs | Tarot by Charm"
        description="Explore all zodiac signs and discover your horoscope. Find insights about your zodiac sign and what the stars have in store for you."
        keywords="zodiac signs, horoscope, astrology, zodiac by charm, zodiac meanings, zodiac compatibility, zodiac reading, zodiac horoscope, astrology Myanmar, Burmese zodiac, နက္ခတ်ဗေဒင်, နက္ခတ်, နက္ခတ်ဖတ်ခြင်း, နက္ခတ်ဗေဒင်အကြံပေး, နက္ခတ်ဗေဒင်အနာဂတ်, နက္ခတ်ဗေဒင်အချစ်, နက္ခတ်ဗေဒင်အလုပ်အကိုင်, နက္ခတ်ဗေဒင်အွန်လိုင်း, နက္ခတ်ဗေဒင်စာဖတ်ဝန်ဆောင်မှု, နက္ခတ်ဗေဒင်ဘလော့, နက္ခတ်ဗေဒင်ဆောင်းပါး, နက္ခတ်ဗေဒင်သတင်း, နက္ခတ်ဗေဒင်အပ်ဒိတ်"
        url="/zodiacs"
      />
      <div className="pt-24 pb-12 min-h-screen">
        <Zodiac />
      </div>
    </>
  );
}
