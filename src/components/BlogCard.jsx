import { Link } from "react-router-dom";

export default function BlogCard({ post }) {
  return (
    <div className="border p-4">
      <Link to={`/blogs/${post.slug}`}>
        <img
          src={
            post.poster_url
              ? post.poster_url
              : "https://img.freepik.com/free-photo/numerology-collage-concept_23-2150061758.jpg?t=st=1737230077~exp=1737233677~hmac=accc89e5e7f17911d42be59e88f1674c839c03c1450e8b7fafaf0e30ccee24e3&w=1800"
          }
          className="h-auto w-auto"
          alt="poster"
        />
      </Link>
      <div className="flex items-center gap-4 my-4">
        <img
          src={`https://ui-avatars.com/api/?name=${post.author}`}
          className="h-10"
          alt="Man"
        />
        <div>
          <h4>{post.author}</h4>
          <p>{post.published_at}</p>
        </div>
      </div>
      <div className="mt-3">
        <h1 className="text-3xl font-medium mb-3">
          <Link to={`/blogs/${post.slug}`}>{post.title}</Link>
        </h1>
        <p className="text-gray-400 text-justify">{post.excerpt}</p>
      </div>
    </div>
  );
}
