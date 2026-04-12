import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PageContent from "../layout/PageContent";
import { fetchAddresses } from "../store/actions/shoppingCartActions";
import { Plus, User, Phone, MapPin } from "lucide-react";

export default function OrderPage() {
  const dispatch = useDispatch();
  const addressList = useSelector((state) => state.shoppingCart.address);
  const cart = useSelector((state) => state.shoppingCart.cart);
  
  const [activeStep, setActiveStep] = useState(1);
  const [selectedAddress, setSelectedAddress] = useState(null);

  useEffect(() => {
    dispatch(fetchAddresses());
  }, [dispatch]);

  const SHIPPING_COST = 29.99;
  const FREE_SHIPPING_THRESHOLD = 150;

  const subtotal = cart
    .filter((item) => item.checked)
    .reduce((sum, item) => sum + item.product.price * item.count, 0);

  const isFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD;
  const shippingTotal = subtotal > 0 && !isFreeShipping ? SHIPPING_COST : 0;
  const grandTotal = subtotal + shippingTotal;

  return (
    <PageContent className="py-12 px-4 bg-light-gray-1 min-h-screen">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
        
        {/* SOL - ADDRESS & PAYMENT Kısımları */}
        <div className="flex-grow flex flex-col gap-6">
          
          {/* Payment Headers- address information vs. */}
          <div className="flex bg-white rounded-t-lg border-b overflow-hidden shadow-sm">
            <button 
              onClick={() => setActiveStep(1)}
              className={`flex-1 py-6 px-4 text-left border-r transition-all ${activeStep === 1 ? "border-b-4 border-b-primary bg-light-gray-1" : ""}`}
            >
              <h3 className="text-xl font-bold flex items-center gap-2">
                <span className="text-primary text-2xl italic">1</span> Address Information
              </h3>
              <p className="text-sm text-second-text ml-5 line-clamp-1">
                {selectedAddress ? `Shipping to: ${selectedAddress.title}` : "Select a shipping address"}
              </p>
            </button>
            <button 
              onClick={() => setActiveStep(2)}
              className={`flex-1 py-6 px-4 text-left transition-all ${activeStep === 2 ? "border-b-4 border-b-primary bg-light-gray-1" : ""}`}
            >
              <h3 className="text-xl font-bold flex items-center gap-2 text-second-text">
                <span className="text-2xl italic">2</span> Payment Options
              </h3>
              <p className="text-sm text-second-text ml-5">Pay securely with your credit card.</p>
            </button>
          </div>

          {/* ADRES Bölümü */}
          {activeStep === 1 && (
            <div className="bg-white p-6 rounded-b-lg shadow-sm border border-t-0">
              <div className="flex justify-between items-center mb-6">
                <h4 className="text-lg font-bold text-text">Shipping Address</h4>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="sameAddress" defaultChecked className="accent-primary" />
                  <label htmlFor="sameAddress" className="text-sm font-medium">Send Invoice to Same Address</label>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* adres ekleme */}
                <button className="h-40 border-2 border-dashed border-light-gray-2 rounded-lg flex flex-col items-center justify-center gap-2 hover:border-primary transition-colors group">
                  <div className="w-10 h-10 bg-light-gray-1 rounded-full flex items-center justify-center group-hover:bg-primary/10">
                    <Plus className="text-primary" />
                  </div>
                  <span className="font-bold text-text">Add New Address</span>
                </button>

                {/* Kayıtrlı adresler */}
                {Array.isArray(addressList) && addressList.map((addr) => (
                  <div 
                    key={addr.id}
                    onClick={() => setSelectedAddress(addr)}
                    className={`h-40 border-2 rounded-lg p-4 cursor-pointer transition-all relative ${selectedAddress?.id === addr.id ? "border-primary bg-primary/5" : "border-light-gray-1 hover:border-light-gray-2"}`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        <input type="radio" checked={selectedAddress?.id === addr.id} readOnly className="accent-primary" />
                        <span className="font-bold text-text">{addr.title}</span>
                      </div>
                      <button className="text-second-text hover:text-primary transition-colors flex items-center gap-1 text-sm underline font-medium">
                        Edit
                      </button>
                    </div>
                    <div className="space-y-1 text-sm text-text">
                      <p className="flex items-center gap-2"><User size={14} className="text-second-text"/> {addr.name} {addr.surname}</p>
                      <p className="flex items-center gap-2"><Phone size={14} className="text-second-text"/> {addr.phone}</p>
                      <p className="line-clamp-2"><MapPin size={14} className="inline text-second-text mr-1"/> {addr.neighborhood}, {addr.district}, {addr.city}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Order Summary tarafı*/}
        <div className="lg:w-80 flex flex-col gap-4">
          <button 
            disabled={!selectedAddress}
            onClick={() => setActiveStep(2)}
            className={`w-full py-4 rounded-lg font-bold shadow-lg transition-all ${!selectedAddress ? "bg-light-gray-2 text-second-text cursor-not-allowed" : "bg-primary text-white hover:bg-hover"}`}
          >
            {activeStep === 1 ? "Save and Continue" : "Complete Payment"}
          </button>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-light-gray-2">
            <h3 className="text-xl font-bold mb-6">Order Summary</h3>
            <div className="space-y-3 text-second-text">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-bold text-text">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="font-bold text-text">${shippingTotal.toFixed(2)}</span>
              </div>
              
              {isFreeShipping && subtotal > 0 && (
                <div className="flex justify-between text-success text-sm italic font-medium">
                  <span>Free Shipping on $150+</span>
                  <span className="font-bold">-${SHIPPING_COST}</span>
                </div>
              )}

              <div className="border-t pt-4 flex justify-between font-bold text-xl text-primary">
                <span>Total</span>
                <span>${grandTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageContent>
  );
}