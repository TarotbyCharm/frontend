import Navbar from "../components/Navbar";
import styles from "../styles";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="w-full overflow-x-hidden">
      <div
        className={`${styles.paddingX} ${styles.flexCenter} border-b border-gray-400 z-50 bg-secondary-500`}
      >
        <div className="w-full">
          <Navbar />
        </div>
      </div>
      <Outlet />
    </div>
  );
}
