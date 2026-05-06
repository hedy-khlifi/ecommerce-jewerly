// app/cart/page.tsx
"use client";

import { useCart } from "@/provider/CardProvider";
import Link from "next/link";
import { useState } from "react";

type OrderForm = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  notes: string;
};

export default function CartPage() {
  const {
    items,
    removeFromCart,
    updateQuantity,
    resetCart,
    cartCount,
    cartTotal,
  } = useCart();
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [formData, setFormData] = useState<OrderForm>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "Tunis",
    postalCode: "",
    notes: "",
  });

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity >= 1) {
      updateQuantity(productId, newQuantity);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Order submitted:", { items, cartTotal, customer: formData });
    setOrderSubmitted(true);
    setTimeout(() => {
      resetCart();
      setShowOrderForm(false);
      setOrderSubmitted(false);
    }, 3000);
  };

  if (items.length === 0 && !orderSubmitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="text-center">
          <div className="text-5xl sm:text-6xl mb-4">🛒</div>
          <h2 className="text-xl sm:text-2xl text-gray-900 mb-2">
            Your cart is empty
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mb-6">
            Add some beautiful jewelry to your cart
          </p>
          <Link
            href="/collection"
            className="inline-block bg-amber-800 text-white px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm tracking-wider uppercase hover:bg-amber-900 transition-colors rounded-lg"
          >
            Browse Collection
          </Link>
        </div>
      </div>
    );
  }

  if (orderSubmitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="text-center">
          <div className="text-5xl sm:text-6xl mb-4 text-green-600">✓</div>
          <h2 className="text-xl sm:text-2xl text-gray-900 mb-2">
            Order Placed Successfully!
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mb-6">
            Thank you for your order. We will contact you shortly.
          </p>
          <Link
            href="/collection"
            className="inline-block bg-amber-800 text-white px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm tracking-wider uppercase hover:bg-amber-900 transition-colors rounded-lg"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-5 pb-8 sm:py-8 md:py-12 px-3 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-xl sm:text-2xl sm:mt-4 md:text-3xl text-gray-900 mb-5 sm:mb-6 md:mb-8 font-light">
        </h1>

        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
          {/* Cart Items */}
          <div className="flex-1">
            <div className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden">
              {items.map((item) => (
                <div
                  key={item.productId}
                  className="border-b border-gray-200 p-3 sm:p-4 md:p-6 last:border-b-0"
                >
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    {/* Product Image */}
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0 mx-auto sm:mx-0">
                      <img
                        src={item.productImage || "/placeholder.jpg"}
                        alt={item.productName}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1">
                      <div className="flex flex-col gap-3">
                        <div className="flex-1">
                          <h3 className="text-sm sm:text-base text-gray-900 font-medium mb-0.5">
                            {item.productName}
                          </h3>
                          <p className="text-xs text-gray-500 mb-1 sm:mb-2 line-clamp-2">
                            {item.productDescription}
                          </p>
                          <p className="text-[#e8b832] font-medium text-sm">
                            {item.productPrice} TND
                          </p>
                        </div>

                        <div className="flex flex-wrap items-center justify-between gap-3">
                          {/* Quantity Controls */}
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() =>
                                handleQuantityChange(
                                  item.productId,
                                  item.quantity - 1,
                                )
                              }
                              className="w-7 h-7 sm:w-8 sm:h-8 border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors rounded flex items-center justify-center text-sm"
                            >
                              -
                            </button>
                            <span className="text-gray-900 w-10 text-center text-sm">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                handleQuantityChange(
                                  item.productId,
                                  item.quantity + 1,
                                )
                              }
                              className="w-7 h-7 sm:w-8 sm:h-8 border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors rounded flex items-center justify-center text-sm"
                            >
                              +
                            </button>
                          </div>

                          {/* Subtotal */}
                          <div className="text-left sm:text-right min-w-[80px]">
                            <p className="text-xs text-gray-500">Subtotal</p>
                            <p className="text-[#e8b832] font-medium text-sm">
                              {item.productPrice * item.quantity} TND
                            </p>
                          </div>

                          {/* Remove Button */}
                          <button
                            onClick={() => removeFromCart(item.productId)}
                            className="text-red-500 hover:text-red-700 text-xs underline underline-offset-2"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 sm:mt-6 flex justify-between">
              <Link
                href="/collection"
                className="text-[#e8b832] hover:text-amber-800 text-xs sm:text-sm"
              >
                ← Continue Shopping
              </Link>
              <button
                onClick={resetCart}
                className="text-red-500 hover:text-red-700 text-xs sm:text-sm"
              >
                Clear Cart
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-96 mt-5 lg:mt-0">
            <div className="bg-gray-50 rounded-lg border border-gray-200 p-4 sm:p-6">
              <h2 className="text-base sm:text-lg text-gray-900 mb-4 font-medium">
                Order Summary
              </h2>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="text-gray-600">
                    Subtotal ({cartCount} {cartCount === 1 ? "item" : "items"})
                  </span>
                  <span className="text-gray-900">{cartTotal} TND</span>
                </div>
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-green-600 text-xs sm:text-sm">
                    Free
                  </span>
                </div>
                <div className="border-t border-gray-200 pt-2 mt-2">
                  <div className="flex justify-between font-medium">
                    <span className="text-gray-900 text-sm sm:text-base">
                      Total
                    </span>
                    <span className=" text-lg sm:text-xl font-semibold">
                      {cartTotal} TND
                    </span>
                  </div>
                </div>
              </div>

              {!showOrderForm ? (
                <button
                  onClick={() => setShowOrderForm(true)}
                  className="w-full  bg-[#c9a84c] text-white py-2.5 sm:py-3 px-4 rounded-lg hover:bg-amber-900 transition-colors text-xs sm:text-sm uppercase tracking-wider font-medium"
                >
                  Proceed to Checkout
                </button>
              ) : (
                <form
                  onSubmit={handleSubmitOrder}
                  className="space-y-3 sm:space-y-4 mt-4"
                >
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name *"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500 text-xs sm:text-sm"
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name *"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500 text-xs sm:text-sm"
                    />
                  </div>

                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500 text-xs sm:text-sm"
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500 text-xs sm:text-sm"
                  />

                  <input
                    type="text"
                    name="address"
                    placeholder="Street Address *"
                    required
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500 text-xs sm:text-sm"
                  />

                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    <input
                      type="text"
                      name="city"
                      placeholder="City *"
                      required
                      value={formData.city}
                      onChange={handleInputChange}
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500 text-xs sm:text-sm"
                    />
                    <input
                      type="text"
                      name="postalCode"
                      placeholder="Postal Code"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500 text-xs sm:text-sm"
                    />
                  </div>

                  <textarea
                    name="notes"
                    placeholder="Order Notes (optional)"
                    rows={3}
                    value={formData.notes}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500 text-xs sm:text-sm resize-none"
                  />

                  <div className="flex gap-2 sm:gap-3">
                    <button
                      type="button"
                      onClick={() => setShowOrderForm(false)}
                      className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 text-xs sm:text-sm transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-[#e8b832] text-white py-2 rounded-lg hover:bg-amber-900 text-xs sm:text-sm uppercase tracking-wider transition-colors font-medium"
                    >
                      Place Order
                    </button>
                  </div>

                  <p className="text-[10px] sm:text-xs text-gray-500 text-center leading-relaxed">
                    Cash on delivery available. We will contact you to confirm
                    your order.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
