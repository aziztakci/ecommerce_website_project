import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PageContent from "../layout/PageContent";
import { Trash2, Plus, Minus, Check } from "lucide-react"; // Check ikonu eklendi
import { removeFromCart, setCart } from "../store/actions/shoppingCartActions";
import { Link } from "react-router-dom";

export default function CartPage() {
  const cart = useSelector((state) => state.shoppingCart.cart);
  const dispatch = useDispatch();  
  const toggleCheck = (productId) => {
    const newCart = cart.map((item) =>
      item.product.id === productId ? { ...item, checked: !item.checked } : item
    );
    dispatch(setCart(newCart));
  };

  const updateCount = (productId, delta) => {
    const newCart = cart.map((item) => {
      if (item.product.id === productId) {
        const newCount = Math.max(1, item.count + delta);
        return { ...item, count: newCount };
      }
      return item;
    });
    dispatch(setCart(newCart));
  };
  
  const totalPrice = cart
    .filter((item) => item.checked)
    .reduce((sum, item) => sum + item.product.price * item.count, 0);

  return (
    <PageContent className="py-12 px-4">
      <h2 className="text-3xl font-bold mb-8 text-text">Shopping Cart</h2>
      {cart.length === 0 ? (
        <div className="text-center py-20 bg-light-gray-1 rounded-xl">
          <p className="text-second-text">Your cart is empty.</p>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="grow flex flex-col gap-4">
            {cart.map((item) => {
              const { product, checked, count } = item;              
              const gender = product.gender === "k" ? "kadin" : "erkek";
              const categoryName = product.categoryName || "urun";
              const productNameSlug = product.name.toLowerCase().replace(/\s+/g, "-");
              const productDetailLink = `/shop/${gender}/${categoryName}/${product.category_id}/${productNameSlug}/${product.id}`;

              return (
                <div
                  key={product.id}
                  className={`flex items-center gap-4 p-4 bg-white border rounded-lg shadow-sm transition-all ${
                    checked ? "border-primary/20" : "border-light-gray-2 opacity-80"
                  }`}
                >
                  {/* CHECKBOX: Seçme/Kaldırma */}
                  <button
                    onClick={() => toggleCheck(product.id)}
                    className={`w-6 h-6 rounded border flex items-center justify-center transition-colors ${
                      checked
                        ? "bg-primary border-primary text-white"
                        : "border-light-gray-2 bg-white"
                    }`}
                  >
                    {checked && <Check size={16} strokeWidth={3} />}
                  </button>

                  <Link to={productDetailLink} className="shrink-0">
                    <img
                      src={product.images[0]?.url}
                      alt={product.name}
                      className="w-20 h-20 object-cover rounded hover:opacity-80 transition-opacity"
                    />
                  </Link>

                  <div className="grow">
                    <Link to={productDetailLink}>
                      <h4 className="font-bold text-text hover:text-primary transition-colors line-clamp-1">
                        {product.name}
                      </h4>
                    </Link>
                    <p className="text-primary font-bold">${product.price}</p>
                  </div>

                  {/* ADET GÜNCELLEME */}
                  <div className="flex items-center border rounded-lg bg-white">
                    <button
                      onClick={() => updateCount(product.id, -1)}
                      className="p-2 hover:text-primary transition-colors"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="px-3 font-bold text-sm">{count}</span>
                    <button
                      onClick={() => updateCount(product.id, 1)}
                      className="p-2 hover:text-primary transition-colors"
                    >
                      <Plus size={14} />
                    </button>
                  </div>

                  {/* SİLME BUTONU */}
                  <button
                    onClick={() => dispatch(removeFromCart(product.id))}
                    className="text-danger p-2 hover:bg-danger/10 rounded-full transition-colors"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              );
            })}
          </div>

          {/* SİPARİŞ ÖZETİ */}
          <div className="lg:w-80 p-6 bg-light-gray-1 rounded-xl h-fit border border-light-gray-2">
            <h3 className="text-xl font-bold mb-4">Order Summary</h3>
            <div className="flex justify-between mb-2 text-second-text">
              <span>Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-4 text-second-text">
              <span>Shipping</span>
              <span className="text-success font-medium">Free</span>
            </div>
            <div className="border-t border-light-gray-2 pt-4 flex justify-between font-bold text-xl text-text">
              <span>Total</span>
              <span className="text-primary">${totalPrice.toFixed(2)}</span>
            </div>
            <button
              disabled={totalPrice === 0}
              className={`w-full py-4 rounded-lg mt-6 font-bold transition-all ${
                totalPrice === 0
                  ? "bg-light-gray-2 text-second-text cursor-not-allowed"
                  : "bg-primary text-white hover:bg-hover shadow-lg shadow-primary/20"
              }`}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </PageContent>
  );
}