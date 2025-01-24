import { sun } from "@/assets";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function HomeBlog() {
  return (
    <div className="relative container mx-auto py-16 xl:py-40">
      <img
        src={sun}
        className="absolute -bottom-[14rem] xl:-bottom-[2rem] -right-72 xl:-right-[22rem] opacity-10 h-[62rem] xl:h-[80rem]"
        alt="sun"
      />
      <div className="flex justify-between">
        <h1 className="text-5xl">
          <span className="text-4xl italic">Latest</span> Blogs
        </h1>
        <Link
          to="/blogs"
          className="z-10 auth-border-btn flex items-center text-sm italic"
        >
          View All Our Blogs
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </div>
  );
}
