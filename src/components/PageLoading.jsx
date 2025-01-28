import { Loader } from "lucide-react";

export default function PageLoading() {
  return (
    <div className="flex items-center justify-center p-8">
      <Loader className="w-8 h-8 animate-spin text-gray-500" />
      <span className="ml-2 text-gray-500">Loading...</span>
    </div>
  );
}
