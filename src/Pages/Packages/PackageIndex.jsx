import FetchError from "@/components/FetchError";
import PackageCard from "@/components/PackageCard";
import PageLoading from "@/components/PageLoading";
import SEO from "@/components/SEO";
import { fetchPackages, incrementPage } from "@/redux/reducers/PackagesSlice";
import { Loader } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

export default function PackageIndex() {
  const dispatch = useDispatch();
  const { packages, status, error, hasMore, loadingMore } = useSelector(
    (state) => state.packages
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPackages());
    }
  }, [status, dispatch]);

  const handleLoadMore = () => {
    dispatch(incrementPage());
    dispatch(fetchPackages());
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Tarot Reading Packages",
    description:
      "Browse our comprehensive selection of tarot reading packages and services. From love readings to career guidance, find the perfect tarot session for your needs.",
    url: "https://tarotbycharm.com/packages",
    numberOfItems: packages?.length || 0,
    itemListElement:
      packages?.map((pkg, index) => ({
        "@type": "Service",
        position: index + 1,
        name: pkg.name,
        description: pkg.description,
        provider: {
          "@type": "Organization",
          name: "Tarot by Charm",
        },
        serviceType: "Tarot Reading",
        areaServed: "Worldwide",
      })) || [],
  };

  if (status === "loading") {
    return <PageLoading />;
  }

  if (status === "failed") {
    return <FetchError error={error} />;
  }

  const motionVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: "easeOut" },
  };

  return (
    <>
      <SEO
        title="Tarot Reading Packages | Tarot by Charm"
        description="Browse our comprehensive selection of tarot reading packages and services. From love readings to career guidance, find the perfect tarot session for your needs."
        keywords="tarot reading packages, love tarot reading, career tarot reading, spiritual guidance packages, tarot consultation services, online tarot reading packages, tarot packages, tarot service packages, tarot session packages, tarot bundle, tarot deals, tarot offers, tarot consultation packages, tarot guidance packages, tarot online packages, tarot by charm packages, tarot by charm services, psychic reading packages, astrology packages, astrology reading packages, spiritual reading packages, love tarot packages, career tarot packages, relationship tarot packages, family tarot packages, personal tarot packages, group tarot packages, affordable tarot packages, best tarot packages, premium tarot packages, Myanmar tarot packages, Burmese tarot packages, တားရော့ပက်ကေ့ချ်, တားရော့ဝန်ဆောင်မှုပက်ကေ့ချ်, တားရော့ဖတ်ခြင်းပက်ကေ့ချ်, တားရော့အွန်လိုင်းပက်ကေ့ချ်, တားရော့အကြံပေးပက်ကေ့ချ်, တားရော့စာဖတ်ဝန်ဆောင်မှု, တားရော့စာဖတ်ပက်ကေ့ချ်, တားရော့စာဖတ်ဝန်ဆောင်မှုများ, တားရော့အထူးပက်ကေ့ချ်, တားရော့စျေးသက်သာပက်ကေ့ချ်, တားရော့စျေးအနိမ့်ပက်ကေ့ချ်, တားရော့စျေးမြင့်ပက်ကေ့ချ်, နက္ခတ်ဗေဒင်ပက်ကေ့ချ်, နက္ခတ်ဗေဒင်ဝန်ဆောင်မှု, နက္ခတ်ဗေဒင်ဖတ်ခြင်းပက်ကေ့ချ်"
        url="/packages"
        structuredData={structuredData}
      />
      <div className="container mx-auto mt-24 mb-20 px-6 md:px-0">
        <motion.h1
          className="header-title text-3xl md:text-4xl lg:text-5xl text-center"
          variants={motionVariants}
          initial="initial"
          animate="animate"
          transition={{ ...motionVariants.transition, delay: 0.2 }}
        >
          <span className="italic">Our</span> Packages
        </motion.h1>
        <p className="text-center text-gray-400 text-lg mt-4 max-w-3xl mx-auto">
          From love readings to career guidance, find the perfect
          tarot session for your needs.
        </p>

        <div className="mt-8 package-grid grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-6">
          {packages &&
            packages.map((item, index) => (
              <PackageCard key={index} item={item} />
            ))}
        </div>

        {hasMore && (
          <div className="flex justify-center">
            <button
              className="astro-primary-btn mt-10"
              onClick={handleLoadMore}
              disabled={loadingMore}
            >
              {loadingMore ? (
                <>
                  <Loader className="w-5 h-5 animate-spin" />
                  Loading...
                </>
              ) : (
                <>See More</>
              )}
            </button>
          </div>
        )}
      </div>
    </>
  );
}
