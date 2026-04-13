import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageContent from "../layout/PageContent";
import { fetchOrders } from "../store/actions/shoppingCartActions";
import { Package, ChevronRight, ChevronDown, CreditCard } from "lucide-react";

export default function PreviousOrdersPage() {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.shoppingCart.orders);
  const [expandedOrderId, setExpandedOrderId] = useState(null);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  const toggleDetails = (orderId) => {
    setExpandedOrderId(expandedOrderId === orderId ? null : orderId);
  };

  return (
    <PageContent className="min-h-[80vh] py-12 font-montserrat">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-black text-text mb-2">Order History</h1>
        <p className="text-second-text font-medium mb-8">Review and track your past orders</p>

        <div className="flex flex-col gap-6">
          {orders && orders.length > 0 ? (
            orders.map((order) => (
              <div key={order.id} className="bg-white rounded-2xl shadow-sm border border-light-gray-2 overflow-hidden">
                
                
                <div className="bg-light-gray-1/30 p-5 border-b flex justify-between items-center flex-wrap gap-4">
                  <div className="flex gap-10">
                    <div>
                      <p className="text-[10px] font-bold text-second-text uppercase tracking-widest mb-1">Order Date</p>
                      <p className="text-sm font-bold text-text">
                        {order.order_date 
                          ? new Date(order.order_date).toLocaleDateString() 
                          : "Processing"}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-second-text uppercase tracking-widest mb-1">Total</p>
                      <p className="text-sm font-black text-primary">${order.price.toFixed(2)}</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-second-text bg-white px-3 py-1 rounded-full border">
                    ID: #{order.id}
                  </span>
                </div>

                
                <div className="p-6 flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                      <Package size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-base text-text">{order.products?.length || 0} Products</p>
                      <p className="text-xs text-second-text flex items-center gap-1">
                        <CreditCard size={12} /> {order.card_name}
                      </p>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => toggleDetails(order.id)}
                    className="flex items-center gap-2 text-primary font-bold text-sm hover:underline"
                  >
                    {expandedOrderId === order.id ? "Hide Details" : "Show Details"}
                    {expandedOrderId === order.id ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                  </button>
                </div>

                
                {expandedOrderId === order.id && (
                  <div className="p-6 bg-light-gray-1/10 border-t">
                    <div className="grid gap-4">
                      {order.products.map((item) => (
                        <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded-xl border">
                          <div className="flex items-center gap-4">                            
                            <div className="w-20 h-20 rounded-lg overflow-hidden border bg-white shrink-0">
                              <img 
                                src={item.images?.[0]?.url || "https://via.placeholder.com/150"} 
                                alt={item.name} 
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <div>
                              <p className="font-bold text-sm text-text">{item.name}</p>
                              <p className="text-xs text-second-text line-clamp-1">{item.description}</p>
                              <p className="text-xs font-bold mt-1">Quantity: {item.count}</p>
                            </div>
                          </div>
                          <div className="text-right shrink-0">
                            <p className="font-bold text-primary">${(item.price * item.count).toFixed(2)}</p>
                            <p className="text-[10px] text-second-text">Unit: ${item.price}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-20 bg-light-gray-1/20 rounded-2xl border border-dashed">
              <p className="text-second-text font-bold">No orders found.</p>
            </div>
          )}
        </div>
      </div>
    </PageContent>
  );
}