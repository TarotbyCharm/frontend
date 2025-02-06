import { moon, star } from "@/assets";
import ZCard from "@/components/ZCard";
import { fetchZodiacs } from "@/redux/reducers/ZodiacsSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ScrollReveal from "scrollreveal";

export default function Zodiac() {
  const dispatch = useDispatch();
  const { zodiacs, status } = useSelector((state) => state.zodiacs);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchZodiacs());

      const sr = ScrollReveal({
        origin: "bottom",
        distance: "50px",
        duration: 1000,
        delay: 200,
        reset: false,
      });
      sr.reveal(".page-title", { delay: 300 });
    }
  }, [status, dispatch]);
  return (
    <div className="relative py-20 z-30">
      <div className="container mx-auto z-30">
        <div className="text-center mb-10 xl:mb-16">
          <h1 className="page-title text-4xl xl:text-5xl italic mb-7 xl:mb-10">
            Choose
            <span className="mx-3 xl:mx-5 text-5xl xl:text-6xl not-italic">
              Your Zodiac
            </span>
            Sign
          </h1>
          <h4 className="page-title text-lg xl:text-xl italic text-gray-400">
            What is Your Sign?
          </h4>
          <h4 className="page-title text-lg xl:text-xl italic text-gray-400">
            Read Your Daily Horoscope Today
          </h4>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {zodiacs &&
            zodiacs.map((zodiac) => <ZCard key={zodiac.id} zodiac={zodiac} />)}
        </div>
      </div>
      <img
        src={moon}
        className="absolute -left-20 -top-60 opacity-10 h-[28rem] xl:h-[40rem]"
        alt="moon bg"
      />
      <img
        src={star}
        className="absolute right-52 top-0 opacity-10 h-40 xl:h-52"
        alt="star bg"
      />
      {/* <img
        src={sun}
        className="absolute -bottom-[21rem] -right-40 opacity-10 h-[62rem]"
        alt="sun"
      /> */}
    </div>
  );
}
