// app/components/AddToCartButton.tsx
"use client";

import { useState } from "react";
import { useCart } from "@/provider/CardProvider";

type AddToCartButtonProps = {
  productId: string;
  productName: string;
  productDescription: string;
  productPrice: number;
  productImage: string;
};

export default function AddToCartButton({
  productId,
  productName,
  productDescription,
  productPrice,
  productImage,
}: AddToCartButtonProps) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");

  const handleAddToCart = () => {
    addToCart({
      productId: productId,
      productName: productName,
      productDescription: productDescription,
      productPrice: productPrice,
      quantity: quantity,
      productImage: productImage,
    });

    setMessage(`✓ ${quantity} × ${productName} added to cart!`);
    setShowMessage(true);

    setQuantity(1);

    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <span className="text-[#a89880] text-sm">Quantity:</span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-8 h-8 border border-[#c9a84c33] text-[#deb43e] hover:bg-[#c9a84c11] transition-colors rounded"
          >
            -
          </button>
          <span className="text-[#1f1602] w-12 text-center">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="w-8 h-8 border border-[#c9a84c33] text-[#dab346] hover:bg-[#c9a84c11] transition-colors rounded"
          >
            +
          </button>
        </div>
      </div>

      {/* Add to Cart Button */}
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={handleAddToCart}
          className="flex-1 bg-[#c9a84c] text-[#111009] px-6 py-3 text-sm tracking-wider uppercase hover:bg-[#b8923a] transition-colors font-medium"
        >
          Add to Cart 
        </button>
        <button className="flex-1 border border-[#c9a84c33] text-[#c9a84c] px-6 py-3 text-sm tracking-wider uppercase hover:bg-[#c9a84c11] transition-colors">
          Contact Us
        </button>
      </div>

      {/* Success Message Toast */}
      {showMessage && (
        <div className="fixed top-20 right-4 z-50 animate-slide-in">
          <div className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-3">
            <span className="text-xl">✓</span>
            <p className="text-sm">{message}</p>
          </div>
        </div>
      )}
    </div>
  );
}
