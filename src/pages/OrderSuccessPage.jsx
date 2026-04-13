import React from "react";

import { Link } from "react-router-dom";
import { CheckCircle, ShoppingBag, ArrowRight } from "lucide-react";
import PageContent from "../layout/PageContent";

export default function OrderSuccessPage() {

  const orderNumber = `ORD-${Math.floor(100000 + Math.random() * 900000)}`;

  return (
    <PageContent className="min-h-[80vh] flex items-center justify-center font-montserrat">
      <div className="max-w-md w-full bg-white p-10 rounded-3xl shadow-xl text-center space-y-6 animate-in zoom-in duration-500">
        
        {/* Başarı İkonu */}
        <div className="flex justify-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 animate-bounce">
            <CheckCircle size={48} />
          </div>
        </div>

        {/* Tebrik Mesajı */}
        <div className="space-y-2">
          <h2 className="text-3xl font-black text-text">Congratulations!</h2>
          <p className="text-second-text font-medium">
            Your order has been successfully placed and is being prepared.
          </p>
        </div>

        <div className="pt-4 space-y-3">
          {/* Call to Action */}
          <Link
            to="/"
            className="w-full py-4 bg-primary text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-hover transition-all shadow-lg shadow-primary/20"
          >
            <ShoppingBag size={18} />
            Continue Shopping
          </Link>

          <p className="text-xs text-second-text">
            A confirmation email has been sent to your address.
          </p>
        </div>

        {/* Alt Detay  */}
        <div className="flex justify-center gap-2 pt-4">
          <div className="w-2 h-2 rounded-full bg-primary/20" />
          <div className="w-2 h-2 rounded-full bg-primary/40" />
          <div className="w-2 h-2 rounded-full bg-primary/60" />
        </div>
      </div>
    </PageContent>
  );
}