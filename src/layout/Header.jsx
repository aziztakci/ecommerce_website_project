import React, { useContext } from "react";
import { GlobalContext } from "../contexts/globalContext";
import { useSelector } from "react-redux";
import { ChevronDown, UserRound, Search, ShoppingCart, Heart   } from "lucide-react";
import { NavLink } from "react-router-dom";

function Header() {
  const { lang } = useContext(GlobalContext);
  const allData = useSelector((state) => state.global.data);
  const headerContent = allData[lang].header;

  return (
    <header className="flex justify-between items-center my-7.5 mx-49">
      <h1 className="font-montserrat font-bold text-[24px]">{headerContent.logo}</h1>
      <nav>
        <ul className="flex gap-3.75 list-none ">
          {headerContent.menu.map((e, i) => {
            const isShop = e === "Shop";
            const path = e === "Home" ? "/" : `/${e.toLowerCase()}`;

            return (
              <li key={i}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `flex items-center ${
                      isActive
                        ? "text-text text-[14px] font-montserrat font-medium"
                        : "text-second-text text-[14px] font-montserrat font-bold"
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
      </nav>
      <div className="flex gap-1 text-primary text-[14px] font-montserrat font-bold">
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

          {/* TODO */}
          <div className="flex ml-7.5 gap-7.5 text-primary">
            <span className="flex items-center text-[12px] font-montserrat font-medium gap-1.25"><Search size={19}/></span> 
            <span className="flex items-center text-[12px] font-montserrat font-medium gap-1.25"><ShoppingCart size={19}/>1</span>
            <span className="flex items-center text-[12px] font-montserrat font-medium gap-1.25"><Heart  size={19}/>1</span>
          </div>

      </div>
      
    </header>
  );
}

export default Header;

