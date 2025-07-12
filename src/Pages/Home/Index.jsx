import { homeCard, mainAstro, doubleStars } from "@/assets";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import SEO from "../../components/SEO";

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Tarot by Charm - Home",
    "description": "Discover your future and gain clarity with Tarot by Charm. Expert tarot readings, love & career insights, and personalized spiritual guidance. Book your session today!",
    "url": "https://tarotbycharm.com",
    "mainEntity": {
      "@type": "Service",
      "name": "Tarot Reading Services",
      "description": "Professional tarot reading services providing accurate spiritual guidance and insights",
      "provider": {
        "@type": "Organization",
        "name": "Tarot by Charm"
      },
      "areaServed": "Worldwide",
      "serviceType": "Tarot Reading"
    }
  };

  return (
    <>
      <SEO 
        title="Tarot by Charm | Accurate Tarot Readings & Spiritual Guidance"
        description="Discover your future and gain clarity with Tarot by Charm. Expert tarot readings, love & career insights, and personalized spiritual guidance. Book your session today!"
        keywords="tarot reading, online tarot, love tarot, career tarot, tarot reader, spiritual guidance, accurate tarot readings, psychic reading, tarot consultation"
        url="/"
        structuredData={structuredData}
      />
      <div className="relative min-h-screen py-16">
        <div className="absolute inset-0">
          {[...Array(45)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{ opacity: 0.2, scale: 0.5 }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            >
              <Star className="w-3 h-3 text-primary-300" />
            </motion.div>
          ))}
        </div>
        <div
          className="relative mx-auto bg-no-repeat bg-center h-screen flex flex-col md:flex-row items-center justify-center main-bg-img"
          style={{ backgroundImage: `url(${mainAstro})` }}
        >
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            {/* First Card */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              className="relative md:mr-28 xl:mr-60"
            >
              <div className="absolute -bottom-3.5 -right-3 w-[10rem] lg:w-[16rem] h-full xl:w-[18.5rem] border border-gray-400" />
              <div className="relative bg-transparent">
                <img
                  src={doubleStars}
                  className="absolute -top-10 md:-top-16 left-16 md:left-20 h-20 md:h-auto"
                  alt="Double star"
                  loading="lazy"
                />
                <img
                  src={homeCard}
                  alt="First"
                  className="w-48 h-[18rem] lg:w-72 lg:h-[25rem] xl:h-[30rem] xl:w-80 object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>

            {/* Center Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              className="md:max-w-md xl:max-w-lg px-6 text-center"
            >
              <div>
                <div className="space-y-3 mt-10 mx-auto max-w-2xl text-4xl lg:text-5xl font-bold xl:text-6xl">
                  <p>Mystic Visions</p>
                  <p className="italic text-3xl lg:text-4xl xl:text-5xl font-normal">
                    Guiding{" "}
                    <span className="text-4xl lg:text-5xl xl:text-6xl not-italic font-bold">
                      You
                    </span>{" "}
                    for
                  </p>
                  <p>Better Future</p>
                </div>
                <div className="mt-8 xl:mt-12 flex justify-center">
                  <Link to="/appointment" className="astro-primary-btn w-fit">
                    Make Appointment Now
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Second Card */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              className="relative md:ml-28 xl:ml-60"
            >
              <div className="absolute -top-3.5 -left-3 w-[10rem] lg:w-[16rem] h-full xl:w-[18.5rem] border border-gray-300" />
              <div className="relative bg-transparent">
                <img
                  src={homeCard}
                  alt="Second"
                  className="w-48 h-[18rem] lg:w-72 lg:h-[25rem] xl:h-[30rem] xl:w-80 object-cover"
                  loading="lazy"
                />
                <img
                  src={doubleStars}
                  className="absolute -bottom-10 md:-bottom-16 left-16 md:left-20 h-20 md:h-auto"
                  alt="Double star"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
