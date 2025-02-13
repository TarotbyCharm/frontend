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
import ScrollReveal from "scrollreveal";

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
      const sr = ScrollReveal({
        origin: "bottom",
        distance: "50px",
        duration: 1000,
        delay: 200,
        reset: false,
      });

      sr.reveal(".header-title", { delay: 200 });
      sr.reveal(".today-title", { delay: 400 });
    }
  }, [status, dispatch]);

  useEffect(() => {
    if (specialPostStatus == "idle") {
      dispatch(fetchTodaySpecialPost());
    }
  }, [specialPostStatus, dispatch]);

  const handleLoadMore = () => {
    dispatch(incrementPage());
    dispatch(fetchPosts());
  };

  if (specialPostStatus === "loading" || status === "loading") {
    return <PageLoading />;
  }

  if (status === "failed") {
    return <FetchError error={error} />;
  }

  return (
    <div>
      <div className="container mx-auto">
        <div className="my-10">
          <h1 className="header-title text-3xl md:text-4xl xl:text-5xl text-center">
            <span className="text-4xl italic">Our</span> Blogs
          </h1>

          {/* Today Special */}
          <div className="today-title mt-20">
            <h2 className="text-3xl md:text-4xl xl:text-5xl mb-7">
              <span className="text-4xl italic">Today</span> Special...
            </h2>
            <BlogHorCard post={specialPost} />
          </div>

          {/* Blog List */}
          <div className="mt-20">
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
      </div>
    </div>
  );
}
