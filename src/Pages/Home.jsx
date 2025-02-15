import { homeCard, mainAstro, doubleStars } from "@/assets";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const Index = () => {
  return (
    <div className="relative min-h-screen py-16">
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
            className="relative mr-28 xl:mr-60"
          >
            <div className="absolute -bottom-3.5 -right-3 w-[10rem] lg:w-[16rem] h-full xl:w-[18.5rem] border border-gray-400" />
            <div className="relative bg-transparent">
              <img
                src={doubleStars}
                className="absolute -top-16 left-20"
                alt="Double star"
              />
              <img
                src={homeCard}
                alt="First"
                className="w-48 h-[18rem] lg:w-72 lg:h-[25rem] xl:h-[30rem] xl:w-80 object-cover"
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
            className="relative ml-28 xl:ml-60"
          >
            <div className="absolute -top-3.5 -left-3 w-[16rem] h-full xl:w-[18.5rem] border border-gray-300" />
            <div className="relative bg-transparent">
              <img
                src={homeCard}
                alt="Second"
                className="w-48 h-[18rem] lg:w-72 lg:h-[25rem] xl:h-[30rem] xl:w-80 object-cover"
              />
              <img
                src={doubleStars}
                className="absolute -bottom-16 left-20"
                alt="Double star"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Index;
