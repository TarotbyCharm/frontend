import { useState } from "react";
import { fullLogo, menu, close, star } from "../assets";
import { navLinks } from "../constants";
import { Link, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useAuth } from "@/context/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/redux/reducers/UserSlice";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const { isAuthenticated, clearAuth } = useAuth();
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await dispatch(logout());
      clearAuth();
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  return (
    <nav className="w-full flex py-4 xl:py-5 justify-between items-center navbar">
      <img src={fullLogo} alt="logo" className="h-[32px] xl:h-[36px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1 uppercase">
        {navLinks.map((nav, index) => (
          <li
            key={index}
            className={`font-normal cursor-pointer text-[16px] mr-7`}
          >
            {nav.link !== null ? (
              <Link to={nav.link}>{nav.title}</Link>
            ) : (
              <Link href={`#${nav.id}`}>{nav.title}</Link>
            )}
          </li>
        ))}

        <li>
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage src={user?.profile} alt="profile" />
                  <AvatarFallback>
                    <img
                      src={`https://ui-avatars.com/api/?name=${user?.name}`}
                      alt=""
                    />
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  <span className="text-red-500">Log Out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link to="/login" className="auth-border-btn">
              Login
              <img src={star} alt="Star" className="h-4" />
            </Link>
          )}
        </li>
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-normal cursor-pointer text-[16px] text-white ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                }`}
              >
                <Link href={`#${nav.id}`}>{nav.title}</Link>
              </li>
            ))}
            <li>
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Avatar>
                      <AvatarImage src={user?.profile} alt="profile" />
                      <AvatarFallback>
                        <img
                          src={`https://ui-avatars.com/api/?name=${user?.name}`}
                          alt=""
                        />
                      </AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout}>
                      Log Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link to="/login" className="auth-border-btn">
                  Login
                  <img src={star} alt="Star" className="h-4" />
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
