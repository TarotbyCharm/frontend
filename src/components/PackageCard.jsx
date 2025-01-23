import { soulmate } from "@/assets";

export default function PackageCard() {
  return (
    <div className="border px-6 py-8">
      <img src={soulmate} className="h-20 w-auto mx-auto" alt="Soulmate" />
      <div className="">
        <h3 className="text-3xl italic my-10 tracking-wide font-bold">
          Soulmate Connection
        </h3>
        <h5 className="mb-2">12000 Ks</h5>
        <button className="astro-primary-btn">Book Now</button>
      </div>
    </div>
  );
}
