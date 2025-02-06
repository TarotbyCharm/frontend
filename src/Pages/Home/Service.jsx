import PackageCard from "@/components/PackageCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPackages } from "@/redux/reducers/PackagesSlice";
import ScrollReveal from "scrollreveal";
export default function Service() {
  const dispatch = useDispatch();
  const { packages, status } = useSelector((state) => state.packages);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPackages(8));

      const bottomService = ScrollReveal({
        origin: "bottom",
        distance: "50px",
        duration: 1000,
        delay: 200,
        reset: false,
      });

      bottomService.reveal(".service", { delay: 200 });

      const leftService = ScrollReveal({
        origin: "left",
        distance: "50px",
        duration: 1000,
        delay: 200,
        reset: false,
      });

      leftService.reveal(".left-service", { delay: 200 });

      const rightService = ScrollReveal({
        origin: "right",
        distance: "50px",
        duration: 1000,
        delay: 200,
        reset: false,
      });

      rightService.reveal(".right-service", { delay: 200 });
    }
  }, [status, dispatch]);

  return (
    <div className="relative pt-16 pb-40">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-24">
          <h1 className="left-service text-5xl text-white">
            <span className="text-4xl italic mr-1">Featured</span> Services
          </h1>

          <h4 className="right-service text-lg italic">
            Personalized horoscopes, compatibility readings, <br /> and life
            guidance based on birth charts.
          </h4>
        </div>
        <div>
          <h1 className="service text-5xl text-center mb-10">
            Our <span className="text-4xl italic">Packages</span>
          </h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
            {packages &&
              packages.map((item, index) => (
                <PackageCard key={index} item={item} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
