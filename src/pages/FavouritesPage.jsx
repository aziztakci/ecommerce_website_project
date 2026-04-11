import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import PageContent from "../layout/PageContent";
import { Trash2, ShoppingCart, HeartOff } from "lucide-react";
import { toggleFavorite } from "../store/actions/shoppingCartActions";
import { addToCart } from "../store/actions/shoppingCartActions";


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

export default function FavouritesPage() {
  const favorites = useSelector((state) => state.shoppingCart.favorites);  
  const categories = useSelector((state) => state.product.categories); 
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <PageContent className="py-12 px-4 min-h-[60vh]">
      <div className="flex items-center justify-between mb-8 border-b pb-4 border-light-gray-2">
        <h2 className="text-3xl font-bold text-text flex items-center gap-3">
          My Favorites
          <span className="text-lg font-normal text-second-text bg-light-gray-1 px-3 py-1 rounded-full">
            {favorites.length}
          </span>
        </h2>
        {favorites.length > 0 && (
          <p className="text-second-text hidden md:block">
            Items you've liked are saved here.
          </p>
        )}
      </div>

      {favorites.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 bg-light-gray-1 rounded-2xl border-2 border-dashed border-light-gray-3">
          <HeartOff size={64} className="text-light-gray-3 mb-4" />
          <h3 className="text-xl font-bold text-text mb-2">Your wishlist is empty</h3>
          <p className="text-second-text mb-8 text-center max-w-xs">
            Look like you haven't added any products to your favorites yet.
          </p>
          <Link
            to="/shop"
            className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-hover transition-all"
          >
            Go Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {favorites.map((product) => {            
            const productCategory = categories?.find(cat => cat.id === product.category_id);            
            const gender = productCategory?.gender === "k" ? "kadin" : "erkek";
            const categoryName = createSlug(productCategory?.title || "urun");
            const productNameSlug = createSlug(product.name);
            const categoryId = product.category_id;
            const productId = product.id;
            const productDetailLink = `/shop/${gender}/${categoryName}/${categoryId}/${productNameSlug}/${productId}`;

            return (
              <div
                key={product.id}
                className="group bg-white border border-light-gray-2 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Link to={productDetailLink}>
                    <img
                      src={product.images[0]?.url}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </Link>
                  <button
                    onClick={() => dispatch(toggleFavorite(product))}
                    className="absolute top-3 right-3 p-2 bg-white/90 hover:bg-alert hover:text-white rounded-full text-alert shadow-sm transition-all"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>

                <div className="p-5 flex flex-col gap-2">
                  <Link to={productDetailLink}>
                    <h4 className="font-bold text-text truncate group-hover:text-primary transition-colors">
                      {product.name}
                    </h4>
                  </Link>
                  <p className="text-second-text text-sm line-clamp-1">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between mt-4">
                    <span className="text-xl font-bold text-text">
                      ${product.price}
                    </span>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-lg font-bold text-sm hover:bg-primary hover:text-white transition-all active:scale-95"
                    >
                      <ShoppingCart size={16} />
                      Add
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </PageContent>
  );
}