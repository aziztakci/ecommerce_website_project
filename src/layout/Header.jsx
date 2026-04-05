import React, { useState } from "react"; // 1. useState eklendi
import {
  ChevronDown,
  UserRound,
  Search,
  ShoppingCart,
  Heart,
  Menu,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { useLayoutData } from "../hooks/useLayoutData";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: layoutContent, isLoading } = useLayoutData();

  if (isLoading) return null;
  const headerContent = layoutContent.header;

  return (
    <header className="w-full max-w-360 mx-auto flex flex-wrap justify-between items-center px-8.75 pt-9 md:pl-49 md:pr-55 md:pt-0 md:my-7.5">
      <h1 className="font-montserrat font-bold text-[24px]">
        {headerContent.logo}
      </h1>

      <nav className="order-3 xl:order-2 w-full xl:w-auto">
        {/* Masaüstü Menü */}
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
                    className={({ isActive }) => {
                      return isActive
                        ? "text-second-text text-[30px] font-montserrat font-bold"
                        : "text-second-text text-[30px] font-montserrat font-normal";
                    }}
                  >
                    {e}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        )}
      </nav>

      {/* Masaüstü Sağ İkonlar */}
      <div className="hidden md:flex order-2 xl:order-3 pt-10 min-[842px]:pt-0 gap-1 text-primary text-[14px] font-montserrat font-bold">
        {headerContent.auth.map((e, i) => {
          const isLogin = e === "Login";
          const isLastItem = i === headerContent.auth.length - 1;

          return (
            <React.Fragment key={i}>
              <a href="#" className="flex items-center">
                {isLogin && <UserRound size={14} className="mr-1" />}
                {e}
              </a>
              {!isLastItem && <span className="mx-1">/</span>}
            </React.Fragment>
          );
        })}

        <div className="flex ml-7.5 gap-7.5 text-primary">
          <span className="flex items-center text-[12px] font-montserrat font-medium gap-1.25">
            <Search size={19} />
          </span>
          <span className="flex items-center text-[12px] font-montserrat font-medium gap-1.25">
            <ShoppingCart size={19} />1
          </span>
          <span className="flex items-center text-[12px] font-montserrat font-medium gap-1.25">
            <Heart size={19} />1
          </span>
        </div>
      </div>

      {/* Mobil Sağ İkonlar & Hamburger */}
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
          {isMenuOpen ? <Menu size={25} className="rotate-90 transition-all" /> : <Menu size={25} />}
        </button>
      </div>
    </header>
  );
}

export default Header;