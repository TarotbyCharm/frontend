import { homeCard, mainAstro, doubleStars } from "@/assets";
import ScrollRevealComponent from "@/components/ScrollReveal";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "scrollreveal";

const Index = () => {
  useEffect(() => {
    // Initialize ScrollReveal
    const sr = ScrollReveal({
      origin: "bottom",
      distance: "50px",
      duration: 1000,
      delay: 200,
      reset: false,
    });

    sr.reveal(".home", { delay: 200 });
  }, []);
  return (
    <div className="relative min-h-screen py-16">
      <div
        className="home relative mx-auto bg-no-repeat bg-center bg-contain h-[70vh] flex flex-col md:flex-row items-center justify-center"
        style={{ backgroundImage: `url(${mainAstro})` }}
      >
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {/* First Card */}
          <ScrollRevealComponent
            options={{ origin: "left" }}
            className="relative mr-28 xl:mr-60"
          >
            <div className="absolute -bottom-3.5 -right-3 w-[16rem] h-full xl:w-[18.5rem] border border-gray-400" />
            <div className="relative bg-transparent">
              <img
                src={doubleStars}
                className="absolute -top-16 left-20"
                alt="Double star"
              />
              <img
                src={homeCard}
                alt="First"
                className="w-72 h-[25rem] xl:h-[30rem] xl:w-80 object-cover"
              />
            </div>
          </ScrollRevealComponent>

          {/* Center Content */}
          <ScrollRevealComponent className="md:max-w-md xl:max-w-lg px-6 text-center">
            <div>
              <div className="space-y-3 mt-10 mx-auto max-w-2xl text-5xl font-bold xl:text-6xl">
                <p>Mystic Visions</p>
                <p className="italic text-4xl xl:text-5xl font-normal">
                  Guiding{" "}
                  <span className="text-5xl xl:text-6xl not-italic font-bold">
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
          </ScrollRevealComponent>

          <ScrollRevealComponent
            options={{ origin: "right" }}
            className="relative ml-28 xl:ml-60"
          >
            <div className="absolute -top-3.5 -left-3 w-[16rem] h-full xl:w-[18.5rem] border border-gray-300" />
            <div className="relative bg-transparent">
              <img
                src={homeCard}
                alt="Second"
                className="w-72 h-[25rem] xl:h-[30rem] xl:w-80 object-cover"
              />
              <img
                src={doubleStars}
                className="absolute -bottom-16 left-20"
                alt="Double star"
              />
            </div>
          </ScrollRevealComponent>
        </div>
      </div>
      {/* <img
        src={mainAstro}
        className="absolute h-auto top-0 left-2 -translate-y-60 w-auto"
        alt="Main Bg"
      /> */}
    </div>
  );
};

export default Index;
