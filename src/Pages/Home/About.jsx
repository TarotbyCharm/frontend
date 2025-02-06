import { astroSign, sunBg } from "@/assets";
import ScrollRevealComponent from "@/components/ScrollReveal";
import styles from "@/styles";

export default function About() {
  return (
    <div className="relative h-screen" id="#about">
      <ScrollRevealComponent options={{ origin: "left" }}>
        <img
          src={sunBg}
          className="absolute -left-[22rem] xl:-left-[26rem] -top-48 h-[37.5rem] xl:h-[45rem]"
          alt="sun bg"
        />
      </ScrollRevealComponent>
      <div className={`${styles.paddingX} ${styles.flexCenter} h-full`}>
        <ScrollRevealComponent>
          <h1 className="text-6xl xl:text-7xl mb-6">
            Who We <span className="text-4xl ml-2 xl:text-5xl italic">Are</span>
          </h1>
          <h1 className="text-6xl xl:txt-7xl mb-10">
            We <span className="text-4xl italic">Can Use</span> Astrology
            <span className="ml-3 text-4xl italic">To Find Your</span> Future
          </h1>
          <p className="text-xl xl:text-2xl mb-8">
            We will provide the best free horoscope astrology to you by
            analysing your birth chart and your astrology sign.
          </p>
          <div>
            <button className="astro-primary-btn">Book Now !</button>
          </div>
        </ScrollRevealComponent>
      </div>
      <ScrollRevealComponent options={{ origin: "right" }}>
        <img
          src={astroSign}
          className="absolute -right-20 xl:-right-28 bottom-5 h-72 xl:h-[26rem]"
          alt="astro-sign"
        />
      </ScrollRevealComponent>
    </div>
  );
}
