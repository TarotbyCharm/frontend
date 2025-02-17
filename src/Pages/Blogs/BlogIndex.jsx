import BlogCard from "@/components/BlogCard";
import BlogHorCard from "@/components/BlogHorCard";
import FetchError from "@/components/FetchError";
import PageLoading from "@/components/PageLoading";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  fetchPosts,
  fetchTodaySpecialPost,
  incrementPage,
} from "@/redux/reducers/PostsSlice";
import { Loader } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

export default function BlogIndex() {
  const dispatch = useDispatch();
  const {
    posts,
    status,
    error,
    hasMore,
    loadingMore,
    specialPost,
    specialPostStatus,
  } = useSelector((state) => state.posts);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPosts());
    }

    if (specialPostStatus === "idle") {
      dispatch(fetchTodaySpecialPost());
    }
  }, [status, dispatch, specialPostStatus]);

  const handleLoadMore = () => {
    dispatch(incrementPage());
    dispatch(fetchPosts());
  };

  if (specialPostStatus === "loading" || status === "loading") {
    return (
      <div className="mt-20">
        <PageLoading />
      </div>
    );
  }

  if (status === "failed") {
    return <FetchError error={error} />;
  }

  const motionVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: "easeOut" },
  };

  return (
    <div className="container mx-auto mt-24 mb-20 px-6 md:px-0">
      {/* Header */}
      <div className="my-10">
        <motion.h1
          className="header-title text-3xl md:text-4xl lg:text-5xl text-center"
          variants={motionVariants}
          initial="initial"
          animate="animate"
          transition={{ ...motionVariants.transition, delay: 0.2 }}
        >
          <span className="italic">Our</span> Blog
        </motion.h1>
      </div>

      {/* Today Special */}
      <div className="today-title md:mt-20">
        <h2 className="text-3xl md:text-4xl xl:text-5xl mb-7">
          <span className="text-4xl italic">Today</span> Special...
        </h2>
        <BlogHorCard post={specialPost} />
      </div>

      {/* Blog List */}
      <div className="mt-20 blog-list">
        <Select defaultValue="latest">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="latest">
              Sort By
              <span className="font-bold italic ml-1.5 text-primary-500">
                Latest
              </span>
            </SelectItem>
            <SelectItem value="oldest">
              Sort By
              <span className="font-bold italic ml-1.5 text-primary-500">
                Oldest
              </span>
            </SelectItem>
            <SelectItem value="alphabet-asc">
              Sort By
              <span className="font-bold italic ml-1.5 text-primary-500">
                A-Z
              </span>
            </SelectItem>
            <SelectItem value="alphabet-desc">
              Sort By
              <span className="font-bold italic ml-1.5 text-primary-500">
                Z-A
              </span>
            </SelectItem>
          </SelectContent>
        </Select>

        <div className="mt-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-6">
            {posts &&
              posts.map((post) => <BlogCard key={post.id} post={post} />)}
          </div>
          {hasMore && (
            <div className="flex justify-center">
              <button
                className="astro-primary-btn mt-10"
                onClick={handleLoadMore}
                disabled={loadingMore}
              >
                {loadingMore ? (
                  <>
                    <Loader className="w-5 h-5 animate-spin" />
                    Loading...
                  </>
                ) : (
                  <>See More</>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
