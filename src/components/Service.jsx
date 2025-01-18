import { moon } from "@/assets";
import Card from "./Card";

export default function Service() {
  return (
    <div className="relative h-screen">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-24">
          <h1 className="text-5xl">
            <span className="text-4xl italic mr-1">Featured</span> Services
          </h1>
          <h4 className="text-lg italic">
            Personalized horoscopes, compatibility readings, <br /> and life
            guidance based on birth charts.
          </h4>
        </div>
        <div>
          <h1 className="text-5xl text-center mb-10">
            Our <span className="text-4xl italic">Packages</span>
          </h1>
          <div className="grid grid-cols-4 gap-4">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}
