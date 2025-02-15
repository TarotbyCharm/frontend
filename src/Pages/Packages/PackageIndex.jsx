import FetchError from "@/components/FetchError";
import PackageCard from "@/components/PackageCard";
import PageLoading from "@/components/PageLoading";
import { fetchPackages, incrementPage } from "@/redux/reducers/PackagesSlice";
import { Loader } from "lucide-react";
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

  if (status === "loading") {
    return <PageLoading />;
  }

  if (status === "failed") {
    return <FetchError error={error} />;
  }

  return (
    <div className="container mx-auto mt-24 mb-20 px-6 md:px-0">
      <h1 className="title text-5xl text-center">
        <span className="text-4xl italic">Our</span> Packages
      </h1>

      <div className="mt-8 package-grid grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-6">
        {packages &&
          packages.map((item, index) => (
            <PackageCard key={index} item={item} />
          ))}
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
  );
}
