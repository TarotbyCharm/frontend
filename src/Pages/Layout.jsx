import Footer from "@/components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles";
import { Outlet, useNavigate } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import { useEffect } from "react";

export default function Layout() {
  const navigate = useNavigate();
  useEffect(() => {
    let active = localStorage.getItem("active").toLowerCase();
    if (active) {
      if (active == "home") {
        navigate("/");
        return;
      }
      navigate(active);
    }
  }, []);
  return (
    <div className="w-full overflow-x-hidden">
      <div
        className={`${styles.paddingX} ${styles.flexCenter} border-b border-gray-500 z-50 bg-secondary-500`}
      >
        <div className="w-full">
          <Navbar />
        </div>
      </div>
      <ScrollToTop />
      <Outlet />
      <Footer />
    </div>
  );
}
