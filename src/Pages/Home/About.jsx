import { astroSign, sunBg } from "@/assets";
import { motion, useInView } from "framer-motion";
import styles from "@/styles";
import { useRef } from "react";
import { Link } from "react-router-dom";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="relative h-screen" id="#about" ref={ref}>
      <motion.img
        src={sunBg}
        className="absolute -left-[22rem] xl:-left-[26rem] -top-48 h-[37.5rem] xl:h-[45rem]"
        alt="sun bg"
        initial={{ opacity: 0, x: -100 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1 }}
      />
      <div className={`${styles.paddingX} ${styles.flexCenter} h-full`}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1 className="text-6xl xl:text-7xl mb-6">
            Who We <span className="text-4xl ml-2 xl:text-5xl italic">Are</span>
          </h1>
          <h1 className="text-6xl xl:text-7xl mb-10">
            We <span className="text-4xl italic">Can Use</span> Astrology
            <span className="ml-3 text-4xl italic">To Find Your</span> Future
          </h1>
          <p className="text-xl xl:text-2xl mb-8">
            We will provide the best free horoscope astrology to you by
            analysing your birth chart and your astrology sign.
          </p>
          <div>
            <Link to="/appointment" className="astro-primary-btn w-fit">
              Book Now!
            </Link>
          </div>
        </motion.div>
      </div>
      <motion.img
        src={astroSign}
        className="absolute -right-20 xl:-right-28 bottom-5 h-72 xl:h-[26rem]"
        alt="astro-sign"
        initial={{ opacity: 0, x: 100 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </div>
  );
}
