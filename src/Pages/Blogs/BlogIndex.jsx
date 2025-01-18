import BlogCard from "@/components/BlogCard";
import BlogHorCard from "@/components/BlogHorCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function BlogIndex() {
  return (
    <div>
      <div className="container mx-auto">
        <div className="my-10">
          <h1 className="text-5xl text-center">
            <span className="text-4xl italic">Our</span> Blogs
          </h1>

          {/* Today Special */}
          <div className="mt-20">
            <h2 className="text-5xl mb-7">
              <span className="text-4xl italic">Today</span> Special...
            </h2>
            <BlogHorCard />
          </div>

          {/* Blog List */}
          <div className="mt-20">
            <Select defaultValue="latest">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="latest">
                  Sort By <span className="font-bold italic ml-1.5 text-primary-500">Latest</span>
                </SelectItem>
                <SelectItem value="asc">
                  Sort By <span className="font-bold italic ml-1.5 text-primary-500">Ascending</span>
                </SelectItem>
                <SelectItem value="desc">
                  Sort By <span className="font-bold italic ml-1.5 text-primary-500">Descending</span>
                </SelectItem>
              </SelectContent>
            </Select>

            <div className="mt-8">
              <div className="grid grid-cols-3 gap-6 xl:gap-8">
                <BlogCard />
                <BlogCard />
                <BlogCard />
              </div>
              <div className="text-center">
                <button className="astro-primary-btn mt-10">
                  See More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
