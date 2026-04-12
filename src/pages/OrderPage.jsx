import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import PageContent from "../layout/PageContent";
import {
  fetchAddresses,
  postAddress,
  updateAddressAction,
  deleteAddressAction,
  postOrderAction,
  fetchCards,
  deleteCardAction,
  postCardAction,
} from "../store/actions/shoppingCartActions";
import {
  Plus,
  User,
  Phone,
  MapPin,
  X,
  CreditCard,
  Trash2,
  CheckCircle2,
} from "lucide-react";
import { useForm } from "react-hook-form";

export default function OrderPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addressList = useSelector((state) => state.shoppingCart.address);
  const cart = useSelector((state) => state.shoppingCart.cart);
  const creditCards = useSelector((state) => state.shoppingCart.creditCards);

  const [activeStep, setActiveStep] = useState(1);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);
  const [isCardSaved, setIsCardSaved] = useState(false);

  // Adres Formu
  const {
    register: registerAddress,
    handleSubmit: handleSubmitAddress,
    reset: resetAddress,
    formState: { errors: addressErrors },
  } = useForm();

  // Ödeme Formu
  const {
    register: registerPayment,
    handleSubmit: handleSubmitPayment,
    reset: resetPayment,
    watch,
    formState: { errors: paymentErrors },
  } = useForm({
    defaultValues: {
      card_name: "",
      card_no: "",
      card_expire_month: "",
      card_expire_year: "",
      card_ccv: "",
    },
  });

  const watchedFields = watch();
  const isFormComplete =
    watchedFields.card_name?.length > 2 &&
    watchedFields.card_no?.length === 16 &&
    watchedFields.card_expire_month &&
    watchedFields.card_expire_year &&
    watchedFields.card_ccv?.length === 3;

  useEffect(() => {
    dispatch(fetchAddresses());
    dispatch(fetchCards());
  }, [dispatch]);

  const SHIPPING_COST = 29.99;
  const FREE_SHIPPING_THRESHOLD = 150;

  const subtotal = cart
    .filter((item) => item.checked)
    .reduce((sum, item) => sum + item.product.price * item.count, 0);

  const isFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD;
  const shippingTotal = subtotal > 0 && !isFreeShipping ? SHIPPING_COST : 0;
  const grandTotal = subtotal + shippingTotal;

  const closeForm = () => {
    setShowAddressForm(false);
    setEditingAddress(null);
    resetAddress();
  };

  const handleEditAddress = (addr, e) => {
    e.stopPropagation();
    setEditingAddress(addr);
    setShowAddressForm(true);
    resetAddress(addr);
  };

  const handleDeleteAddress = (addressId, e) => {
    e.stopPropagation();
    if (window.confirm("Are you sure?")) {
      dispatch(deleteAddressAction(addressId)).then(() => {
        if (selectedAddress?.id === addressId) setSelectedAddress(null);
      });
    }
  };

  const onAddressSubmit = (data) => {
    if (editingAddress) {
      const payload = { ...data, id: editingAddress.id };
      dispatch(updateAddressAction(payload)).then(() => {
        if (selectedAddress?.id === editingAddress.id)
          setSelectedAddress(payload);
        closeForm();
      });
    } else {
      dispatch(postAddress(data)).then(() => closeForm());
    }
  };

  const handleSaveCardToggle = (e) => {
    setIsCardSaved(e.target.checked);
  };

  const handleOrderSubmit = (formData) => {
    if (!selectedAddress) return;

    const payload = {
      address_id: selectedAddress.id,
      card_no: formData.card_no.replace(/\s/g, ""),
      card_name: formData.card_name,
      card_expire_month: Number(formData.card_expire_month),
      card_expire_year: Number(formData.card_expire_year),
      card_ccv: Number(formData.card_ccv),
      price: Number(grandTotal.toFixed(2)),
      products: cart
        .filter((item) => item.checked)
        .map((item) => ({
          product_id: item.product.id,
          count: item.count,
          detail: "",
        })),
    };

    dispatch(postOrderAction(payload))
      .then(() => {
        if (isCardSaved && !selectedCard) {
          const newCard = {
            card_no: formData.card_no,
            expire_month: Number(formData.card_expire_month),
            expire_year: Number(formData.card_expire_year),
            name_on_card: formData.card_name,
          };
          dispatch(postCardAction(newCard));
        }
        navigate("/order-success");
      })
      .catch((err) => console.error("Sipariş Hatası:", err));
  };

  return (
    <PageContent className="py-12 px-4 bg-light-gray-1 min-h-screen font-montserrat">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* SOL KOLON */}
        <div className="grow flex flex-col gap-6">
          {/* Step Menüsü */}
          <div className="flex bg-white rounded-t-lg border-b overflow-hidden shadow-sm">
            <button
              onClick={() => setActiveStep(1)}
              className={`flex-1 py-6 px-4 text-left border-r transition-all ${activeStep === 1 ? "border-b-4 border-b-primary bg-light-gray-1" : "bg-white opacity-70"}`}
            >
              <h3
                className={`text-xl flex items-center gap-2 ${activeStep === 1 ? "font-bold text-text" : "font-medium text-second-text"}`}
              >
                <span
                  className={`${activeStep === 1 ? "text-primary" : "text-second-text"} text-2xl italic`}
                >
                  1
                </span>
                Address Info
              </h3>
            </button>

            <button
              disabled={!selectedAddress}
              onClick={() => setActiveStep(2)}
              className={`flex-1 py-6 px-4 text-left transition-all ${!selectedAddress ? "opacity-50 cursor-not-allowed" : ""} ${activeStep === 2 ? "border-b-4 border-b-primary bg-light-gray-1" : "bg-white opacity-70"}`}
            >
              <h3
                className={`text-xl flex items-center gap-2 ${activeStep === 2 ? "font-bold text-text" : "font-medium text-second-text"}`}
              >
                <span
                  className={`${activeStep === 2 ? "text-primary" : "text-second-text"} text-2xl italic`}
                >
                  2
                </span>
                Payment Options
              </h3>
            </button>
          </div>

          {/* STEP 1: ADRES LİSTESİ */}
          {activeStep === 1 && (
            <div className="bg-white p-6 rounded-b-lg shadow-sm animate-in fade-in duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  onClick={() => setShowAddressForm(true)}
                  className="h-44 border-2 border-dashed border-light-gray-2 rounded-lg flex flex-col items-center justify-center gap-2 hover:border-primary transition-colors group"
                >
                  <div className="w-10 h-10 bg-light-gray-1 rounded-full flex items-center justify-center group-hover:bg-primary/10">
                    <Plus className="text-primary" />
                  </div>
                  <span className="font-bold">Add New Address</span>
                </button>

                {addressList?.map((addr) => (
                  <div
                    key={addr.id}
                    onClick={() => setSelectedAddress(addr)}
                    className={`h-44 border-2 rounded-lg p-4 cursor-pointer transition-all relative ${selectedAddress?.id === addr.id ? "border-primary bg-primary/5" : "border-light-gray-1 hover:border-light-gray-2"}`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${selectedAddress?.id === addr.id ? "border-primary bg-primary" : "border-light-gray-2"}`}
                        >
                          {selectedAddress?.id === addr.id && (
                            <div className="w-1.5 h-1.5 bg-white rounded-full" />
                          )}
                        </div>
                        <span className="font-bold">{addr.title}</span>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={(e) => handleEditAddress(addr, e)}
                          className="text-xs text-second-text underline"
                        >
                          Edit
                        </button>
                        <button
                          onClick={(e) => handleDeleteAddress(addr.id, e)}
                          className="text-xs text-danger underline"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                    <div className="text-sm space-y-1 text-second-text">
                      <p className="flex items-center gap-2 text-text font-medium">
                        <User size={14} /> {addr.name} {addr.surname}
                      </p>
                      <p className="flex items-center gap-2">
                        <Phone size={14} /> {addr.phone}
                      </p>
                      <p className="line-clamp-2">
                        <MapPin size={14} className="inline mr-1" />{" "}
                        {addr.neighborhood}, {addr.district}, {addr.city}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: ÖDEME */}
          {activeStep === 2 && (
            <div className="bg-white p-8 rounded-b-lg shadow-sm animate-in fade-in duration-300">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-xl font-bold">Payment Methods</h4>
                <div className="flex items-center gap-2 text-sm text-green-600 font-medium">
                  <CheckCircle2 size={16} />
                  <span>Secure 256-bit SSL Connection</span>
                </div>
              </div>

              {/* Kayıtlı Kartlar Bölümü */}
              <div className="mb-10">
                <h5 className="text-sm font-bold text-second-text uppercase tracking-wider mb-4">
                  Saved Cards
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {creditCards?.map((card) => (
                    <div
                      key={card.id}
                      onClick={() => {
                        setSelectedCard(card);
                        resetPayment({
                          card_name: card.name_on_card,
                          card_no: card.card_no,
                          card_expire_month: card.expire_month,
                          card_expire_year: card.expire_year,
                          card_ccv: "",
                        });
                      }}
                      className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${selectedCard?.id === card.id ? "border-primary bg-primary/5" : "border-light-gray-2 hover:border-light-gray-3"}`}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <CreditCard className="text-primary" size={24} />
                        <Trash2
                          size={16}
                          className="text-light-gray-2 hover:text-danger"
                          onClick={(e) => {
                            e.stopPropagation();
                            dispatch(deleteCardAction(card.id));
                          }}
                        />
                      </div>
                      <p className="font-mono text-lg mb-1">
                        {card.card_no.replace(/\d(?=\d{4})/g, "*")}
                      </p>
                      <div className="flex justify-between text-xs text-second-text">
                        <span>{card.name_on_card}</span>
                        <span>
                          {card.expire_month}/{card.expire_year}
                        </span>
                      </div>
                    </div>
                  ))}

                  <div
                    onClick={() => {
                      setSelectedCard(null);
                      resetPayment({
                        card_name: "",
                        card_no: "",
                        card_expire_month: "",
                        card_expire_year: "",
                        card_ccv: "",
                      });
                    }}
                    className={`p-4 border-2 border-dashed rounded-xl cursor-pointer flex flex-col items-center justify-center gap-2 min-h-[110px] ${!selectedCard ? "border-primary bg-primary/5" : "border-light-gray-2 hover:border-primary"}`}
                  >
                    <Plus size={20} className="text-primary" />
                    <span className="text-xs font-bold uppercase">
                      New Card
                    </span>
                  </div>
                </div>
              </div>

              {/* Form Bölümü */}
              <form
                id="payment-form"
                onSubmit={handleSubmitPayment(handleOrderSubmit)}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t pt-8"
              >
                <div className="space-y-4">
                  <h5 className="font-bold mb-4">Card Information</h5>
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase text-second-text">
                      Cardholder Name
                    </label>
                    <input
                      {...registerPayment("card_name", {
                        required: "Required",
                      })}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="Name Surname"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase text-second-text">
                      Card Number
                    </label>
                    <input
                      {...registerPayment("card_no", {
                        required: "Required",
                        pattern: /^\d{16}$/,
                      })}
                      maxLength="16"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="1234567812345678"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr] gap-4">
                    {/* Expiry Bölümü */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold uppercase text-second-text">
                        Expiry
                      </label>
                      <div className="flex gap-2">
                        <select
                          {...registerPayment("card_expire_month", {
                            required: true,
                          })}
                          className="w-1/2 p-3 border rounded-lg outline-none bg-white appearance-none"
                        >
                          <option value="">MM</option>
                          {Array.from({ length: 12 }, (_, i) => (
                            <option key={i + 1} value={i + 1}>
                              {String(i + 1).padStart(2, "0")}
                            </option>
                          ))}
                        </select>
                        <select
                          {...registerPayment("card_expire_year", {
                            required: true,
                          })}
                          className="w-1/2 p-3 border rounded-lg outline-none bg-white appearance-none"
                        >
                          <option value="">YYYY</option>
                          {[2024, 2025, 2026, 2027, 2028, 2029, 2030].map(
                            (y) => (
                              <option key={y} value={y}>
                                {y}
                              </option>
                            ),
                          )}
                        </select>
                      </div>
                    </div>

                    {/* CVV Bölümü */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold uppercase text-second-text">
                        CVV
                      </label>
                      <input
                        type="password"
                        {...registerPayment("card_ccv", {
                          required: "Required",
                          pattern: /^\d{3}$/,
                        })}
                        maxLength="3"
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="***"
                      />
                    </div>
                  </div>

                  {!selectedCard && (
                    <div
                      className={`flex items-center gap-3 pt-4 transition-opacity ${!isFormComplete ? "opacity-40" : "opacity-100"}`}
                    >
                      <input
                        type="checkbox"
                        id="save-card"
                        disabled={!isFormComplete}
                        checked={isCardSaved}
                        onChange={handleSaveCardToggle}
                        className="w-5 h-5 accent-primary cursor-pointer disabled:cursor-not-allowed"
                      />
                      <label
                        htmlFor="save-card"
                        className="text-sm font-medium cursor-pointer"
                      >
                        Save this card for future purchases
                      </label>
                    </div>
                  )}
                </div>

                {/* Görsel Kart Önizleme  */}
                <div className="hidden md:flex items-center justify-center bg-light-gray-1 rounded-2xl p-8">
                  <div className="w-full max-w-[320px] aspect-[1.6/1] bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 text-white shadow-2xl flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16" />
                    <div className="flex justify-between items-start">
                      <div className="w-12 h-10 bg-yellow-500/80 rounded-md" />
                      <CreditCard size={32} className="opacity-50" />
                    </div>
                    <p className="text-xl font-mono tracking-[4px] py-4">
                      {watchedFields.card_no
                        ? watchedFields.card_no
                            .replace(/(\d{4})/g, "$1 ")
                            .trim()
                        : "**** **** **** ****"}
                    </p>
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-[10px] uppercase opacity-50 mb-1">
                          Card Holder
                        </p>
                        <p className="text-sm font-medium tracking-wide truncate max-w-[150px]">
                          {watchedFields.card_name || "NAME SURNAME"}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] uppercase opacity-50 mb-1">
                          Expires
                        </p>
                        <p className="text-sm font-medium">
                          {watchedFields.card_expire_month || "MM"}/
                          {watchedFields.card_expire_year || "YY"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>

        {/* SAĞ KOLON: ÖZET */}
        <div className="lg:w-80 shrink-0 space-y-4">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-light-gray-2">
            <h3 className="text-lg font-bold mb-4 border-b pb-4">
              Order Summary
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-second-text">
                <span>Items Total</span>
                <span className="font-bold text-text">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-second-text">
                <span>Shipping</span>
                <span className="font-bold text-text">
                  ${shippingTotal.toFixed(2)}
                </span>
              </div>
              {isFreeShipping && (
                <div className="text-[10px] text-green-600 font-bold bg-green-50 p-2 rounded text-center">
                  FREE SHIPPING APPLIED!
                </div>
              )}
              <div className="border-t pt-4 flex justify-between items-center">
                <span className="font-bold">Grand Total</span>
                <span className="text-2xl font-black text-primary">
                  ${grandTotal.toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          {activeStep === 1 ? (
            <button
              onClick={() => setActiveStep(2)}
              disabled={!selectedAddress}
              className="w-full py-4 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/20 hover:bg-hover transition-all disabled:bg-light-gray-2 disabled:shadow-none"
            >
              Continue to Payment
            </button>
          ) : (
            <button
              type="submit"
              form="payment-form"
              className="w-full py-4 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/20 hover:bg-hover transition-all"
            >
              Complete Order
            </button>
          )}
        </div>
      </div>

      {/* ADRES MODALI */}
      {showAddressForm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b sticky top-0 bg-white z-10">
              <h3 className="text-xl font-bold">
                {editingAddress ? "Update Address" : "New Shipping Address"}
              </h3>
              <button
                onClick={closeForm}
                className="p-2 hover:bg-light-gray-1 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <form
              onSubmit={handleSubmitAddress(onAddressSubmit)}
              className="p-6 space-y-4"
            >
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-second-text">
                  Address Title
                </label>
                <input
                  {...registerAddress("title", {
                    required: "Title is required",
                  })}
                  placeholder="Home, Office etc."
                  className="w-full p-3 border rounded-lg bg-light-gray-1"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase text-second-text">
                    Name
                  </label>
                  <input
                    {...registerAddress("name", { required: true })}
                    className="w-full p-3 border rounded-lg bg-light-gray-1"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase text-second-text">
                    Surname
                  </label>
                  <input
                    {...registerAddress("surname", { required: true })}
                    className="w-full p-3 border rounded-lg bg-light-gray-1"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-second-text">
                  Phone
                </label>
                <input
                  {...registerAddress("phone", { required: true })}
                  placeholder="0555..."
                  className="w-full p-3 border rounded-lg bg-light-gray-1"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase text-second-text">
                    City
                  </label>
                  <select
                    {...registerAddress("city", { required: true })}
                    className="w-full p-3 border rounded-lg bg-light-gray-1"
                  >
                    <option value="istanbul">İstanbul</option>
                    <option value="ankara">Ankara</option>
                    <option value="izmir">İzmir</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase text-second-text">
                    District
                  </label>
                  <input
                    {...registerAddress("district", { required: true })}
                    className="w-full p-3 border rounded-lg bg-light-gray-1"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-second-text">
                  Address Detail
                </label>
                <textarea
                  {...registerAddress("address", { required: true })}
                  rows="3"
                  className="w-full p-3 border rounded-lg bg-light-gray-1 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-hover transition-all"
              >
                {editingAddress ? "Save Changes" : "Save Address"}
              </button>
            </form>
          </div>
        </div>
      )}
    </PageContent>
  );
}
