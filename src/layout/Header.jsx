import React, { useState } from "react";
import {
  ChevronDown,
  UserRound,
  Search,
  ShoppingCart,
  Heart,
  Menu,
  LogOut,
} from "lucide-react";
import { NavLink, Link, useLocation } from "react-router-dom"; 
import { useSelector, useDispatch } from "react-redux";
import { useLayoutData } from "../hooks/useLayoutData";
import Gravatar from "react-gravatar";
import { setUser } from "../store/actions/clientActions";

function Header() {
  const location = useLocation(); 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: layoutContent, isLoading } = useLayoutData();

  const user = useSelector((state) => state.client.user);
  const dispatch = useDispatch();

  if (isLoading) return null;
  const headerContent = layoutContent.header;

  const handleLogout = () => {
  localStorage.removeItem("token");
  sessionStorage.removeItem("token"); 
  dispatch(setUser({}));
};

  return (
    <header className="w-full max-w-360 mx-auto flex flex-wrap justify-between items-center px-8.75 pt-9 md:pl-49 md:pr-55 md:pt-0 md:my-7.5">
      <h1 className="font-montserrat font-bold text-[24px]">
        {headerContent.logo}
      </h1>

      <nav className="order-3 xl:order-2 w-full xl:w-auto">
        {/* Desktop Menü */}
        <ul className="hidden md:flex gap-3.75 pt-10 xl:pt-0 list-none">
          {headerContent.menu.map((e, i) => {
            const isShop = e === "Shop";
            const path = e === "Home" ? "/" : `/${e.toLowerCase()}`;
            return (
              <li key={i}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `flex items-center text-[14px] font-montserrat ${
                      isActive
                        ? "text-text font-medium"
                        : "text-second-text font-bold"
                    }`
                  }
                >
                  {e}
                  {isShop && <ChevronDown size={14} className="ml-1" />}
                </NavLink>
              </li>
            );
          })}
        </ul>

        {/* Mobil Menü */}
        {isMenuOpen && (
          <ul className="flex flex-col md:hidden items-center gap-7.5 py-20.75 ">
            {headerContent.menuResp.map((e, i) => {
              const path = e === "Home" ? "/" : `/${e.toLowerCase()}`;
              return (
                <li key={i}>
                  <NavLink
                    onClick={() => setIsMenuOpen(false)}
                    to={path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-second-text text-[30px] font-montserrat font-bold"
                        : "text-second-text text-[30px] font-montserrat font-normal"
                    }
                  >
                    {e}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        )}
      </nav>

      <div className="hidden md:flex order-2 xl:order-3 pt-10 min-[842px]:pt-0 gap-1 text-primary text-[14px] font-montserrat font-bold items-center">
        {user && user.name ? (
          <div className="flex  gap-3 items-center">
            <div className="flex  gap-2">
              <Gravatar
                email={user.email}
                size={25}
                className="rounded-full border border-primary/10"
                default="retro"
              />
              <span className="text-text font-montserrat text-[14px]">
                {user.name}
              </span>
            </div>
            <button
              onClick={handleLogout}
              className="flex gap-1 text-danger hover:opacity-70 transition-all cursor-pointer ml-2"
            >
              <LogOut size={16} />
              <span>Logout</span>
            </button>
          </div>
        ) : (
          <>
            <Link
              to="/login"
              state={{ from: location.pathname }}
              className="flex items-center py-2 px-1 hover:text-hover transition-colors leading-none"
            >
              <UserRound size={14} className="mr-1" />
              Login
            </Link>

            <span className="mx-1 text-second-text select-none">/</span>

            <Link
              to="/signup"
              className="py-2 px-1 hover:text-hover transition-colors leading-none"
            >
              Register
            </Link>
          </>
        )}

        {/* İkonlar Bölümü */}
        <div className="flex ml-7.5 gap-7.5 text-primary">
          <span className="flex items-center text-[12px] font-montserrat font-medium gap-1.25 cursor-pointer">
            <Search size={19} />
          </span>
          <span className="flex items-center text-[12px] font-montserrat font-medium gap-1.25 cursor-pointer">
            <ShoppingCart size={19} />1
          </span>
          <span className="flex items-center text-[12px] font-montserrat font-medium gap-1.25 cursor-pointer">
            <Heart size={19} />1
          </span>
        </div>
      </div>

      {/* Mobil Hamburger */}
      <div className="flex gap-6.25 md:hidden">
        <span className="flex items-center text-[12px] font-montserrat font-medium gap-1.25">
          <Search size={25} />
        </span>
        <span className="flex items-center text-[12px] font-montserrat font-medium gap-1.25">
          <ShoppingCart size={25} />
        </span>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center text-[12px] font-montserrat font-medium gap-1.25"
        >
          {isMenuOpen ? (
            <Menu size={25} className="rotate-90 transition-all" />
          ) : (
            <Menu size={25} />
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;
