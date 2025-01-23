import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function BlogSmallCard({ post }) {
  return (
    <Link to={`/blogs/${post.slug}`} className="group block">
      <div className="bg-secondary-500 py-4 px-6 hover:bg-gray-800 transition-colors">
        <h3 className="font-medium mb-2 group-hover:text-primary-500 transition-colors">
          {post.title}
        </h3>
        <p className="text-sm text-gray-400 line-clamp-2 mb-2">{post.desc}</p>
        <div className="flex items-center text-sm text-gray-500">
          <span>{post.published_at}</span>
          <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
