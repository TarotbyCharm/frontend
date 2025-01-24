import { ArrowUpRight, Bookmark, Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";

export default function BlogCard({ post }) {
  return (
    <div className="relative border p-3.5 xl:p-4 cursor-pointer hover:shadow-lg hover:border-gray-600">
      <Link to={`/blogs/${post.slug}`}>
        <img
          src={
            post.poster_url
              ? post.poster_url
              : "https://img.freepik.com/free-photo/numerology-collage-concept_23-2150061758.jpg?t=st=1737230077~exp=1737233677~hmac=accc89e5e7f17911d42be59e88f1674c839c03c1450e8b7fafaf0e30ccee24e3&w=1800"
          }
          className="h-36 w-auto object-cover"
          alt="poster"
        />
      </Link>
      <div className="pb-8 mt-3">
        <h1 className="text-lg xl:text-xl hover:text-primary-500 font-medium mb-1 line-clamp-1">
          <Link to={`/blogs/${post.slug}`}>{post.title}</Link>
        </h1>
        <div className="flex items-center gap-4 text-xs xl:text-sm text-gray-500 mb-3">
          <h6 className="flex gap-1.5 items-center">
            <User size={14} /> {post.author}
          </h6>
          <h6 className="flex gap-1.5 items-center">
            <Calendar size={14} /> {post.published_at}
          </h6>
        </div>
        <p className="text-gray-400 text-justify line-clamp-3 text-sm xl:text-base">
          {post.excerpt}
        </p>
        <div className="flex justify-between items-center mt-4">
          <Link
            to={`/blogs/${post.slug}`}
            className="white-btn absolute bottom-4"
          >
            Read More
            <ArrowUpRight size={16} />
          </Link>
          <button type="button" className="absolute right-5 bottom-5 text-gray-500">
            <Bookmark />
          </button>
        </div>
      </div>
    </div>
  );
}
