import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PageContent from "../layout/PageContent";
import { Trash2, Plus, Minus } from "lucide-react";
import { removeFromCart, setCart } from "../store/actions/shoppingCartActions";
import { Link } from "react-router-dom";

export default function CartPage() {
  const cart = useSelector((state) => state.shoppingCart.cart);
  const dispatch = useDispatch();

  const updateCount = (productId, delta) => {
    const newCart = cart.map(item => {
      if (item.product.id === productId) {
        const newCount = Math.max(1, item.count + delta);
        return { ...item, count: newCount };
      }
      return item;
    });
    dispatch(setCart(newCart));
  };

  const totalPrice = cart.reduce((sum, item) => sum + (item.product.price * item.count), 0);

  return (
    <PageContent className="py-12 px-4">
      <h2 className="text-3xl font-bold mb-8 text-text">Shopping Cart</h2>
      {cart.length === 0 ? (
        <div className="text-center py-20 bg-light-gray-1 rounded-xl">
          <p className="text-second-text">Your cart is empty.</p>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-grow flex flex-col gap-4">
            {cart.map((item) => {
                const { product } = item;
                const gender = product.gender === "k" ? "kadin" : "erkek"; 
                const categoryName = product.categoryName || "urun";
                const categoryId = product.category_id;
                const productNameSlug = product.name.toLowerCase().replace(/\s+/g, '-');
                const productId = product.id;
                const productDetailLink = `/shop/${gender}/${categoryName}/${categoryId}/${productNameSlug}/${productId}`;
                return(
              <div key={item.product.id} className="flex items-center gap-4 p-4 bg-white border border-light-gray-2 rounded-lg shadow-sm">
                <Link to={productDetailLink} className="shrink-0">
                    <img 
                      src={item.product.images[0]?.url} 
                      alt={item.product.name} 
                      className="w-20 h-20 object-cover rounded hover:opacity-80 transition-opacity" 
                    />
                  </Link>
                <div className="flex-grow">
                  <Link to={productDetailLink}>
                      <h4 className="font-bold text-text hover:text-primary transition-colors">
                        {item.product.name}
                      </h4>
                    </Link>
                  <p className="text-primary font-bold">${item.product.price}</p>
                </div>
                <div className="flex items-center border rounded-lg">
                  <button onClick={() => updateCount(item.product.id, -1)} className="p-2 hover:text-primary"><Minus size={16}/></button>
                  <span className="px-4 font-bold">{item.count}</span>
                  <button onClick={() => updateCount(item.product.id, 1)} className="p-2 hover:text-primary"><Plus size={16}/></button>
                </div>
                <button onClick={() => dispatch(removeFromCart(item.product.id))} className="text-danger p-2 hover:bg-danger/10 rounded-full transition-colors">
                  <Trash2 size={20} />
                </button>
              </div>
            )})}
          </div>
          <div className="lg:w-80 p-6 bg-light-gray-1 rounded-xl h-fit">
            <h3 className="text-xl font-bold mb-4">Order Summary</h3>
            <div className="flex justify-between mb-2"><span>Subtotal</span><span>${totalPrice.toFixed(2)}</span></div>
            <div className="flex justify-between mb-4"><span>Shipping</span><span className="text-success">Free</span></div>
            <div className="border-t pt-4 flex justify-between font-bold text-xl">
              <span>Total</span><span className="text-primary">${totalPrice.toFixed(2)}</span>
            </div>
            <button className="w-full bg-primary text-white py-4 rounded-lg mt-6 font-bold hover:bg-hover transition-all">
              Checkout
            </button>
          </div>
        </div>
      )}
    </PageContent>
  );
}