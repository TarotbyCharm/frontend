import { ArrowUpRight, Bookmark } from "lucide-react";
import { Link } from "react-router-dom";

export default function BlogHorCard({ post }) {
  return (
    <div className="border p-5">
      <div className="flex gap-4">
        <div className="w-[40%]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src={`https://ui-avatars.com/api/?name=${post?.author}&background=1f2937&color=fff`}
                className="h-10"
                alt="Man"
              />
              <div className="text-sm">
                <h4>{post?.author}</h4>
                <p>{post?.published_at}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Link to={`/blogs/${post?.slug}`} className="white-btn">
                Read More
                <ArrowUpRight size={16} />
              </Link>
              <button type="button" className="auth-border-btn border-gray-500 hover:border-gray-600 p-2">
                <Bookmark size={17} />
              </button>
            </div>
          </div>
          <div className="mt-4">
            <h1 className="text-xl lg:text-2xl font-medium mb-3 line-clamp-2">
              <Link to={`/blogs/${post?.slug}`}>{post?.title}</Link>
            </h1>
            <p className="text-gray-400 text-justify line-clamp-8 text-sm lg:text-base">
              {post?.excerpt}
            </p>
          </div>
        </div>
        <div className="w-[60%]">
          <Link to={`/blogs/${post?.slug}`}>
            <img
              src={
                post?.poster_url
                  ? post?.poster_url
                  : "https://img.freepik.com/free-photo/numerology-collage-concept_23-2150061758.jpg?t=st=1737230077~exp=1737233677~hmac=accc89e5e7f17911d42be59e88f1674c839c03c1450e8b7fafaf0e30ccee24e3&w=1800"
              }
              alt="poster"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
