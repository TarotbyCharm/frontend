import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Loader2,
  AlertCircle,
  ArrowLeft,
  MessageSquare,
  ThumbsUp,
  Share2,
  Search,
  Clock,
  ChevronRight,
} from "lucide-react";
import {
  fetchPostDetails,
  fetchRecentPosts,
  searchPosts,
} from "@/redux/reducers/PostsSlice";

export default function Single() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const {
    currentPost,
    postStatus,
    postError,
    recentPosts,
    searchResults,
    searchStatus,
  } = useSelector((state) => state.posts);

  useEffect(() => {
    if (slug) {
      dispatch(fetchPostDetails(slug));
    }
  }, [slug, dispatch]);

  useEffect(() => {
    if (currentPost) {
      dispatch(fetchRecentPosts(currentPost.category.slug));
    }
  }, [currentPost, dispatch]);

  const handleBack = () => {
    navigate(-1);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      dispatch(searchPosts(searchQuery));
    }
  };

  if (postStatus === "loading") {
    return (
      <div className="flex items-center justify-center p-8 text-gray-200">
        <Loader2 className="w-8 h-8 animate-spin" />
        <span className="ml-2">Loading post details...</span>
      </div>
    );
  }

  if (postStatus === "failed") {
    return (
      <div className="flex items-center justify-center p-8 text-red-400">
        <AlertCircle className="w-6 h-6 mr-2" />
        <span>{postError}</span>
      </div>
    );
  }

  if (!currentPost) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 overflow-visible">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <button
          onClick={handleBack}
          className="flex items-center text-gray-400 hover:text-blue-400 transition-colors mb-6"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Posts
        </button>

        <div className="flex gap-8">
          {/* Main Content */}
          <article className="flex-grow max-w-3xl">
            <div className="bg-gray-800 rounded-xl shadow-xl p-8 mb-6">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center">
                    <span className="text-gray-300 font-medium text-lg">
                      {currentPost.author?.charAt(0) || "U"}
                    </span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium text-gray-200 text-lg">
                      {currentPost.author || "Unknown Author"}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {currentPost.published_at}
                    </p>
                  </div>
                </div>
              </div>

              <h1 className="text-4xl font-bold text-gray-100 mb-6 leading-tight">
                {currentPost.title}
              </h1>

              <div className="prose prose-invert max-w-none text-gray-300 mb-8 leading-relaxed">
                <p>{currentPost.desc}</p>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-gray-700">
                <button className="flex items-center text-gray-400 hover:text-blue-400 transition-colors">
                  <ThumbsUp className="w-6 h-6 mr-2" />
                  <span className="text-lg">Like</span>
                </button>

                <button className="flex items-center text-gray-400 hover:text-blue-400 transition-colors">
                  <MessageSquare className="w-6 h-6 mr-2" />
                  <span className="text-lg">Comment</span>
                </button>

                <button className="flex items-center text-gray-400 hover:text-blue-400 transition-colors">
                  <Share2 className="w-6 h-6 mr-2" />
                  <span className="text-lg">Share</span>
                </button>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="w-80 flex-shrink-0">
            <div className="sticky top-8">
              {/* Search */}
              <div className="bg-gray-800 rounded-xl shadow-xl p-6 mb-6">
                <form onSubmit={handleSearch} className="relative">
                  <input
                    type="text"
                    placeholder="Search posts..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-gray-700 text-gray-200 rounded-lg px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
                </form>

                {searchStatus === "loading" && (
                  <div className="flex items-center justify-center mt-4">
                    <Loader2 className="w-6 h-6 animate-spin text-blue-400" />
                  </div>
                )}

                {searchResults?.length > 0 && (
                  <div className="mt-4 space-y-4">
                    {searchResults.map((post) => (
                      <Link
                        key={post.id}
                        to={`/posts/${post.id}`}
                        className="block text-gray-300 hover:text-blue-400 transition-colors"
                      >
                        {post.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Recent Posts */}
              <div className="bg-gray-800 rounded-xl shadow-xl p-6">
                <h2 className="text-xl font-semibold text-gray-200 mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  Recent Posts
                </h2>
                <div className="space-y-4">
                  {recentPosts?.map((post) => (
                    <Link
                      key={post.id}
                      to={`/posts/${post.id}`}
                      className="group block"
                    >
                      <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors">
                        <h3 className="font-medium text-gray-200 mb-2 group-hover:text-blue-400 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-sm text-gray-400 line-clamp-2 mb-2">
                          {post.desc}
                        </p>
                        <div className="flex items-center text-sm text-gray-500">
                          <span>{post.published_at}</span>
                          <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
