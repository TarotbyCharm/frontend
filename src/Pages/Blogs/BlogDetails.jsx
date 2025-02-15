import { facebook, twitterX } from "@/assets";
import BlogSmallCard from "@/components/BlogSmallCard";
import FetchError from "@/components/FetchError";
import NotFound from "@/components/NotFound";
import PageLoading from "@/components/PageLoading";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  fetchPostDetails,
  fetchRecentPosts,
} from "@/redux/reducers/PostsSlice";
import { Calendar, Copy, User } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function BlogDetails() {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { currentPost, postStatus, postError, recentPosts } = useSelector(
    (state) => state.posts
  );

  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    let link = window.location.href;
    navigator.clipboard
      .writeText(link)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  useEffect(() => {
    if (slug) {
      dispatch(fetchPostDetails(slug));
    }
  }, [slug, dispatch]);

  useEffect(() => {
    if (currentPost) {
      const params = {
        postId: currentPost.id,
        category: currentPost.category.slug,
      };
      dispatch(fetchRecentPosts(params));
    }
  }, [currentPost, dispatch]);

  if (postStatus === "loading") {
    return <PageLoading />;
  }

  if (postStatus === "failed") {
    return <FetchError error={postError} />;
  }
  if (!currentPost) {
    return <NotFound />;
  }
  return (
    <div className="relative">
      <div className="container mx-auto py-16">
        <div className="flex items-start gap-4 lg:gap-6">
          {/* left  */}
          <div className="flex-1">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-primary-500">
                    {currentPost.title}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="mt-8">
              <img
                src={
                  currentPost.poster_url
                    ? currentPost.poster_url
                    : "https://img.freepik.com/free-photo/numerology-collage-concept_23-2150061758.jpg?t=st=1737230077~exp=1737233677~hmac=accc89e5e7f17911d42be59e88f1674c839c03c1450e8b7fafaf0e30ccee24e3&w=1800"
                }
                className="max-h-[22rem] w-full object-cover"
                alt="poster"
              />
              <h1 className="text-4xl mb-4 mt-8">{currentPost.title}</h1>
              <div className="flex items-center gap-5 text-gray-400 text-sm mb-8">
                <h4 className="flex items-center gap-1">
                  <User size={16} /> {currentPost.author}
                </h4>
                <h4 className="flex items-center gap-1">
                  <Calendar size={16} /> {currentPost.published_at}
                </h4>
              </div>
              <p className="text-gray-300 leading-7 mb-[55px]">
                {currentPost.desc}
              </p>
              <div className="flex justify-between items-center border-y py-3.5 mt-10 text-sm">
                <div className="flex items-center gap-4">
                  <h4>Category:</h4>
                  <div className="space-x-2">
                    <Badge>
                      {currentPost.category ? currentPost.category.name : ""}
                    </Badge>
                  </div>
                </div>
                <div className="flex items-center text-sm">
                  <h4 className="mr-4">Share: </h4>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={copyToClipboard}
                      type="button"
                      disabled={copied}
                      className="bg-slate-800 disabled:hover:bg-slate-800 cursor-pointer hover:bg-slate-700 rounded-full p-2"
                    >
                      {copied ? (
                        <span className="text-green-500 px-2">Copied!</span>
                      ) : (
                        <Copy size={17} />
                      )}
                    </button>
                    <a
                      href={`https://www.facebook.com/sharer.php?u=${window.location.href}`}
                      target="_blank"
                      className="bg-slate-800 hover:bg-slate-700 rounded-full p-2"
                    >
                      <img src={facebook} alt="facebook" />
                    </a>
                    <a
                      href={`https://www.x.com/share?url=${window.location.href}`}
                      target="_blank"
                      className="bg-slate-800 hover:bg-slate-700 rounded-full p-2"
                    >
                      <img src={twitterX} alt="twitter-x" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* right sidebar */}
          <div className="w-[30%]">
            <div className="space-y-6">
              {/* <div className="flex w-full max-w-sm items-center space-x-2">
                <Input placeholder="Type Something..." />
                <Button type="submit">Search</Button>
              </div> */}

              <Card>
                <CardHeader className="border-b py-3">
                  <CardTitle className="text-xl text-primary-500 underline underline-offset-4">
                    Recent Posts
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  {recentPosts &&
                    recentPosts.map((recentPost) => (
                      <BlogSmallCard key={recentPost.id} post={recentPost} />
                    ))}
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="border-b py-3">
                  <CardTitle className="text-xl text-primary-500 underline underline-offset-4">
                    Tags
                  </CardTitle>
                </CardHeader>
                <CardContent className="py-3 space-x-1">
                  {currentPost?.tags?.map((tag, index) => (
                    <Badge key={index} variant="secondary">
                      # {tag?.name}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
