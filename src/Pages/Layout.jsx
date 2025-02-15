import Footer from "@/components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";

export default function Layout() {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </div>
  );
}
