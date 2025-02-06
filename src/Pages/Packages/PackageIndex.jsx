import FetchError from "@/components/FetchError";
import PackageCard from "@/components/PackageCard";
import PageLoading from "@/components/PageLoading";
import ScrollRevealComponent from "@/components/ScrollReveal";
import { Input } from "@/components/ui/input";
import { fetchPackages, incrementPage } from "@/redux/reducers/PackagesSlice";
import { Loader, Search } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function PackageIndex() {
  const dispatch = useDispatch();
  const { packages, status, error, hasMore, loadingMore } = useSelector(
    (state) => state.packages
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPackages());
    }
  }, [status, dispatch]);

  const handleLoadMore = () => {
    dispatch(incrementPage());
    dispatch(fetchPackages());
  };

  if (status === "loading" || status === "loading") {
    return <PageLoading />;
  }

  if (status === "failed") {
    return <FetchError error={error} />;
  }

  return (
    <div>
      <div className="container mx-auto">
        <ScrollRevealComponent className="my-10">
          <h1 className="text-5xl text-center">
            <span className="text-4xl italic">Our</span> Packages
          </h1>
        </ScrollRevealComponent>
        <ScrollRevealComponent options={{ delay: 350 }} className="">
          <div className="flex justify-center mt-6">
            <div className="relative w-full max-w-lg">
              <Search
                className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <Input
                type="text"
                placeholder="Search for packages..."
                className="pl-10"
              />
            </div>
          </div>
        </ScrollRevealComponent>
        <ScrollRevealComponent options={{ delay: 500 }} className="mt-20">
          <div className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-6">
              {packages &&
                packages.map((item, index) => (
                  <PackageCard key={index} item={item} />
                ))}
            </div>
            {hasMore && (
              <div className="text-center">
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
        </ScrollRevealComponent>
      </div>
    </div>
  );
}
