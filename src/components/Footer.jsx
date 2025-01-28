import { fullLogo } from "@/assets";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="relative pt-16 pb-8 xl:pt-40">
      <div className="container mx-auto ">
        <div className="flex items-start">
          <div className="w-full md:w-[40%] lg:w-[60%]">
            <img src={fullLogo} className="h-12" alt="logo" />
            <div className="flex gap-10 mt-7">
              <div>
                <h5 className="text-gray-300 mb-2">Email</h5>
                <p>tarotbycharm@gmail.com</p>
              </div>
              <div>
                <h5 className="text-gray-300 mb-2">Phone Number</h5>
                <p>+66660857579</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 lg:gap-6">
            <ul className="space-y-3">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <Link to="/packages">Package</Link>
              </li>
              <li>
                <Link to="/blogs">Blog</Link>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
            <ul className="space-y-3">
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Tiktok</a>
              </li>
              <li>
                <a href="#">Telegram</a>
              </li>
              <li>
                <a href="#">Viber</a>
              </li>
            </ul>
            <ul className="space-y-3">
              <li>
                <a href="">Terms of Service</a>
              </li>
              <li>
                <a href="">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8 mb-5 h-px w-full bg-gradient-to-r from-secondary-700 via-gray-600 to-secondary-700"></div>
      <div className="text-center">
        <h5>
          &copy; {new Date().getFullYear()} TarotByCharm. All rights reserved.
        </h5>
      </div>
    </div>
  );
}
