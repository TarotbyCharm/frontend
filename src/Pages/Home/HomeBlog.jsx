import { sun } from "@/assets";
import BlogCard from "@/components/BlogCard";
import { fetchPosts } from "@/redux/reducers/PostsSlice";
import { ArrowUpRight } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ScrollReveal from "scrollreveal";

export default function HomeBlog() {
  const dispatch = useDispatch();
  const { posts, status, error } = useSelector((state) => state.posts);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPosts());

      const bottomTitle = ScrollReveal({
        origin: "bottom",
        distance: "50px",
        duration: 1000,
        delay: 200,
        reset: false,
      });

      bottomTitle.reveal(".bottom-title", { delay: 300 });
    }
  }, [status, dispatch]);
  return (
    <div className="relative container mx-auto py-20">
      <img
        src={sun}
        className="absolute -bottom-[14rem] xl:-bottom-[2rem] -right-72 xl:-right-[22rem] opacity-10 h-[62rem] xl:h-[80rem]"
        alt="sun"
      />
      <div className="flex justify-between">
        <h1 className="bottom-title text-5xl xl:text-6xl">
          <span className="text-4xl xl:text-5xl italic">Latest</span> Blogs
        </h1>
        <Link
          to="/blogs"
          className="bottom-title z-10 auth-border-btn flex items-center text-sm italic"
        >
          View All Our Blogs
          <ArrowUpRight size={16} />
        </Link>
      </div>
      <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 xl:gap-6">
        {posts && posts.map((post) => <BlogCard key={post.id} post={post} />)}
      </div>
    </div>
  );
}
