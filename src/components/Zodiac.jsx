import { moon } from "@/assets";

export default function Zodiac() {
  return (
    <div className="relative h-screen">
      <img
        src={moon}
        className="absolute -left-20 -top-52 opacity-20 h-[28rem] "
        alt="moon bg"
      />
    </div>
  );
}
