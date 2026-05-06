"use client";
import Link from "next/link";
import React, { useState } from "react";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/provider/CardProvider";
import { usePathname } from "next/navigation";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { items } = useCart();
  const pathname = usePathname();

  const cartItemCount = items.reduce((total, item) => total + item.quantity, 0);

  // Check if we're on cart page OR product detail page
  const isCartPage = pathname === "/cart";
  const isProductDetailPage =
    pathname?.startsWith("/collection/") && pathname !== "/collection";
  const hideLogoOnMobile = isCartPage || isProductDetailPage;

  return (
    <div className="bg-gradient-to-b from-black/50 to-transparent absolute top-0 left-0 w-full z-50">
      <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo - hidden on cart page AND product detail page when mobile */}
          <Link
            href={"/"}
            className={`text-white font-bold text-xl drop-shadow-lg ${
              hideLogoOnMobile ? "hidden sm:block" : "block"
            }`}
          >
            <img
              src="/nobg.png"
              alt="logo"
              width={40}
              className="sm:w-[50px]"
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden text-white ml-auto"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop Links - hidden on mobile, flex on sm+ */}
          <div className="hidden sm:flex space-x-4 md:space-x-8 items-center">
            <Link
              href={"/"}
              className="text-white hover:text-gray-300 transition text-sm md:text-base"
            >
              HOME
            </Link>
            <Link
              href={"/collection"}
              className="text-white hover:text-gray-300 transition text-sm md:text-base"
            >
              COLLECTION
            </Link>
            <Link
              href={"/about"}
              className="text-white hover:text-gray-300 transition text-sm md:text-base"
            >
              ABOUT
            </Link>
            <Link
              href={"/contact"}
              className="text-white hover:text-gray-300 transition text-sm md:text-base"
            >
              CONTACT
            </Link>
            <Link
              href={"/cart"}
              className="text-white hover:text-gray-300 transition relative text-sm md:text-base"
            >
              <ShoppingBag size={20} />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-5 md:-right-6 bg-red-500 text-white text-xs rounded-full px-1.5 min-w-[18px] text-center">
                  {cartItemCount > 99 ? "99+" : cartItemCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile Menu - shows/hides with state */}
        {isMenuOpen && (
          <div className="sm:hidden mt-4 space-y-3 bg-black/50 backdrop-blur-md rounded-lg p-4">
            <Link
              href="/"
              className="block text-white text-center py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </Link>
            <Link
              href="/collection"
              className="block text-white text-center py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              COLLECTION
            </Link>
            <Link
              href="/about"
              className="block text-white text-center py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT
            </Link>
            <Link
              href="/cart"
              className="flex items-center justify-center gap-2 text-white text-center py-2 relative"
              onClick={() => setIsMenuOpen(false)}
            >
              <ShoppingBag size={16} />
              CART
              {cartItemCount > 0 && (
                <span className="bg-red-500 text-white text-xs rounded-full px-2 min-w-[20px] text-center">
                  {cartItemCount > 99 ? "99+" : cartItemCount}
                </span>
              )}
            </Link>
            <Link
              href="/contact"
              className="block text-white text-center py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
