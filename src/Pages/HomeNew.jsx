import styles from "@/styles";
import About from "../components/About";
import Service from "@/components/Service";
import Zodiac from "@/components/Zodiac";

export default function HomeNew() {
  return (
    <div className={`${styles.flexCenter}`}>
      <div className="w-full">
        <About />
        <Service />
        <Zodiac />
      </div>
    </div>
  );
}
