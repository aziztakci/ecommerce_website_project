import React, { useEffect, useState, useRef } from "react";
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
import { fetchCategories } from "../store/actions/productActions";

function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: layoutContent, isLoading } = useLayoutData();
  const user = useSelector((state) => state.client.user);
  const categories = useSelector((state) => state.product.categories);
  const cart = useSelector((state) => state.shoppingCart.cart);
  const dispatch = useDispatch();

  const totalItemsInCart = cart.reduce((total, item) => total + item.count, 0);
  const favorites = useSelector((state) => state.shoppingCart.favorites);
  const totalFavorites = favorites.length;
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsCartOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(fetchCategories());
    }
  }, [dispatch, categories.length]);

  if (isLoading) return null;
  const headerContent = layoutContent.header;

  const handleLogout = () => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    dispatch(setUser({}));
  };

  const womanCats = categories.filter((c) => c.gender === "k");
  const manCats = categories.filter((c) => c.gender === "e");

  const createSlug = (str) => {
    if (!str) return "urun";
    return str
      .toLowerCase()
      .trim()
      .replace(/[ğĞ]/g, "g")
      .replace(/[üÜ]/g, "u")
      .replace(/[şŞ]/g, "s")
      .replace(/[ıİ]/g, "i")
      .replace(/[öÖ]/g, "o")
      .replace(/[çÇ]/g, "c")
      .replace(/[^a-z0-9 -]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  };

  return (
    <header className="w-full max-w-360 mx-auto flex flex-wrap justify-between items-center px-8.75 pt-9 md:pl-49 md:pr-55 md:pt-0 md:my-7.5 relative z-50">
      <h1 className=" font-bold text-[24px]">{headerContent.logo}</h1>

      <nav className="order-3 xl:order-2 w-full xl:w-auto">
        {/* Desktop Menü */}
        <ul className="hidden md:flex gap-3.75 pt-10 xl:pt-0 items-center list-none">
          {headerContent.menu.map((e, i) => {
            const isShop = e === "Shop";

            if (isShop) {
              return (
                <li key={i} className="group relative">
                  <NavLink
                    to="/shop"
                    className="flex items-center text-[14px]  text-second-text font-bold hover:text-primary transition-colors py-2"
                  >
                    Shop
                    <ChevronDown size={14} className="ml-1" />
                  </NavLink>

                  <div className="absolute hidden group-hover:flex bg-white shadow-xl border rounded-lg p-8 gap-16 top-full left-0 min-w-112.5 animate-in fade-in slide-in-from-top-2 duration-200">
                    {/* Kadın Bölümü */}
                    <div className="flex flex-col gap-3">
                      <h3 className="font-bold text-text text-base border-b pb-2 mb-2">
                        Kadın
                      </h3>
                      {womanCats.map((cat) => (
                        <Link
                          key={cat.id}
                          to={`/shop/kadin/${createSlug(cat.title)}/${cat.id}`}
                          className="text-second-text hover:text-primary font-medium text-[14px] transition-colors"
                        >
                          {cat.title}
                        </Link>
                      ))}
                    </div>

                    {/* Erkek Bölümü */}
                    <div className="flex flex-col gap-3">
                      <h3 className="font-bold text-text text-base border-b pb-2 mb-2">
                        Erkek
                      </h3>
                      {manCats.map((cat) => (
                        <Link
                          key={cat.id}
                          to={`/shop/erkek/${createSlug(cat.title)}/${cat.id}`}
                          className="..."
                        >
                          {cat.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>
              );
            }

            const path = e === "Home" ? "/" : `/${e.toLowerCase()}`;
            return (
              <li key={i}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `flex items-center text-[14px]  ${
                      isActive
                        ? "text-text font-medium"
                        : "text-second-text font-bold hover:text-primary transition-colors"
                    }`
                  }
                >
                  {e}
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
                        ? "text-second-text text-[30px]  font-bold"
                        : "text-second-text text-[30px]  font-normal"
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

      {/* Sağ Taraf */}
      <div className="hidden md:flex order-2 xl:order-3 pt-10 min-[842px]:pt-0 gap-1 text-primary text-[14px]  font-bold items-center">
        {user && user.name ? (
          <div className="flex gap-3 items-center">
            <div className="flex gap-2">
              <Gravatar
                email={user.email}
                size={25}
                className="rounded-full border border-primary/10"
                default="retro"
              />
              <span className="text-text  text-[14px]">{user.name}</span>
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

        <div className="flex ml-7.5 gap-7.5 text-primary">
          <span className="flex items-center text-[12px] font-medium gap-1.25 cursor-pointer">
            <Search size={19} />
          </span>

          {/* SEPET DROPDOWN */}
          <div className="relative py-2" ref={cartRef}>
            <button
              onClick={() => setIsCartOpen(!isCartOpen)}
              className="flex items-center text-[12px] font-medium gap-1.25 cursor-pointer text-primary outline-none"
            >
              <ShoppingCart size={19} />
              {totalItemsInCart > 0 && <span>{totalItemsInCart}</span>}
            </button>

            {/* Dropdown Panel */}
            {isCartOpen && (
              <div className="absolute bg-white shadow-2xl border rounded-lg top-full right-0 min-w-[320px] p-4 animate-in fade-in slide-in-from-top-2 duration-200 z-100">
                <h3 className="text-text font-bold mb-4 border-b pb-2">
                  Sepetim ({totalItemsInCart} Ürün)
                </h3>

                <div className="max-h-75 overflow-y-auto flex flex-col gap-4">
                  {cart.length === 0 ? (
                    <p className="text-second-text text-sm py-4 text-center">
                      Sepetiniz boş.
                    </p>
                  ) : (
                    cart.map((item, index) => {
                      const { product } = item;
                      const productCategory = categories?.find(
                        (cat) => cat.id === product.category_id,
                      );
                      const gender =
                        productCategory?.gender === "k" ? "kadin" : "erkek";
                      const categoryName = createSlug(
                        productCategory?.title || "urun",
                      );
                      const productNameSlug = createSlug(product.name);
                      const productDetailLink = `/shop/${gender}/${categoryName}/${product.category_id}/${productNameSlug}/${product.id}`;

                      return (
                        <div
                          key={index}
                          className="flex gap-3 items-start border-b border-light-gray-2 pb-3 last:border-0"
                        >
                          <img
                            src={product.images[0]?.url}
                            className="w-16 h-20 object-cover rounded shadow-sm"
                            alt={product.name}
                          />
                          <div className="flex flex-col gap-1 flex-1">
                            <Link
                              to={productDetailLink}
                              onClick={() => setIsCartOpen(false)} // Linke tıklayınca dropdown kapansın
                              className="text-text font-bold text-xs line-clamp-2 hover:text-primary transition-colors"
                            >
                              {product.name}
                            </Link>
                            <p className="text-second-text text-[10px]">
                              Adet: {item.count}
                            </p>
                            <p className="text-primary font-bold text-sm">
                              ${(product.price * item.count).toFixed(2)}
                            </p>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>

                {cart.length > 0 && (
                  <div className="flex gap-2 mt-4 pt-2 border-t">
                    <Link
                      to="/cart"
                      onClick={() => setIsCartOpen(false)}
                      className="flex-1 text-center py-2.5 bg-white border border-primary text-primary rounded-md font-bold text-xs hover:bg-light-gray-1 transition-all"
                    >
                      Sepete Git
                    </Link>
                    <Link
                      to="/cart"
                      onClick={() => setIsCartOpen(false)}
                      className="flex-1 text-center py-2.5 bg-primary text-white rounded-md font-bold text-xs hover:bg-hover transition-all"
                    >
                      Siparişi Tamamla
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
          <Link
            to="/favorites"
            className="flex items-center text-[12px] font-medium gap-1.25 cursor-pointer"
          >
            <Heart
              size={19}
              className={totalFavorites > 0 ? "text-alert fill-alert" : ""}
            />
            {totalFavorites > 0 && <span>{totalFavorites}</span>}
          </Link>
        </div>
      </div>

      {/* Mobil Hamburger */}
      <div className="flex gap-6.25 md:hidden">
        <span className="flex items-center text-[12px]  font-medium gap-1.25">
          <Search size={25} />
        </span>
        <span className="flex items-center text-[12px]  font-medium gap-1.25">
          <ShoppingCart size={25} />
        </span>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center text-[12px]  font-medium gap-1.25"
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
