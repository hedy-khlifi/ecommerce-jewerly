"use client";

import { products, Category } from "@/app/data/products";
import Link from "next/link";
import { useState, useMemo } from "react";

const img =
  "https://images.pexels.com/photos/20299702/pexels-photo-20299702.jpeg";
function Collection() {
  // State for filtering and pagination
  const [selectedCategory, setSelectedCategory] = useState<Category | "All">("All");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  // Get unique categories from products
  const categories: (Category | "All")[] = ["All", "Rings", "Necklaces", "Earrings", "Bracelets"];

  // Filter products based on selected category
  const filteredProducts = useMemo(() => {
    if (selectedCategory === "All") {
      return products;
    }
    return products.filter((product) => product.category === selectedCategory);
  }, [selectedCategory]);

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Reset to first page when category changes
  const handleCategoryChange = (category: Category | "All") => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  // Generate page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div
      style={{ fontFamily: "'DM Sans', sans-serif" }}
      className="overflow-x-hidden w-full"
    >
      {/* Hero Section - Responsive */}
      <div className="relative h-[50vh] sm:h-[60vh] md:h-96 flex items-end p-4 sm:p-6 md:p-10 overflow-hidden bg-neutral-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${img})` }}
        />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <p className="text-[10px] sm:text-xs tracking-widest uppercase text-white/60 mb-1 sm:mb-2">
            New arrivals · 2026
          </p>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 sm:mb-3"
            style={{ fontFamily: "Georgia, serif" }}
          >
            The Collection
          </h1>
          <p className="text-xs sm:text-sm text-white/60 max-w-xs sm:max-w-sm leading-relaxed">
            Handpicked pieces for those who appreciate the details.
          </p>
        </div>
      </div>

      {/* Products Section - Responsive */}
      <div className="p-4 sm:p-6 md:p-10">
        <div className="max-w-7xl mx-auto">
          {/* Header with Category Filter Dropdown */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-neutral-200 pb-3 sm:pb-4 mb-6 sm:mb-8 gap-4">
            <h2
              className="text-xl sm:text-2xl"
              style={{ fontFamily: "Georgia, serif" }}
            >
              All products
            </h2>

            {/* Category Dropdown */}
            <div className="flex items-center gap-3">
              <label className="text-xs sm:text-sm text-neutral-500">
                Filter by:
              </label>
              <select
                value={selectedCategory}
                onChange={(e) =>
                  handleCategoryChange(e.target.value as Category | "All")
                }
                className="text-xs sm:text-sm border border-neutral-300 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:border-amber-500 cursor-pointer"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <span className="text-xs sm:text-sm text-neutral-400">
                {filteredProducts.length} items
              </span>
            </div>
          </div>

          {/* Products Grid - Fully Responsive */}
          {currentProducts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {currentProducts.map((product) => (
                  <div
                    key={product.id}
                    className="border border-neutral-200 rounded-xl overflow-hidden hover:-translate-y-1 transition-transform duration-200 bg-white"
                  >
                    {/* Product Image */}
                    <div className="relative aspect-square sm:aspect-auto sm:h-48 overflow-hidden bg-neutral-100">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        loading="lazy"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="p-3 sm:p-4">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-medium text-sm sm:text-base line-clamp-1">
                          {product.name}
                        </h3>
                        <span className="text-xs text-amber-600 bg-amber-50 px-2 py-0.5 rounded">
                          {product.category}
                        </span>
                      </div>
                      <p className="text-xs text-neutral-500 line-clamp-2 mb-3 sm:mb-4">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-medium text-sm sm:text-base text-amber-800">
                          {product.price} TND
                        </span>
                        <Link
                          href={`/collection/${product.id}`}
                          className="text-xs sm:text-sm bg-black text-white px-3 sm:px-4 py-1.5 rounded-full hover:bg-amber-800 transition-colors whitespace-nowrap"
                        prefetch={true}
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-1 sm:gap-2 mt-8 sm:mt-12 flex-wrap">
                  {/* Previous Button */}
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                    className={`px-2 py-1 sm:px-4 sm:py-2 text-[10px] sm:text-sm rounded-md sm:rounded-lg transition-colors ${
                      currentPage === 1
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-amber-300"
                    }`}
                  >
                    ← Prev
                  </button>

                  {/* Page Numbers */}
                  <div className="flex gap-1">
                    {pageNumbers.map((number) => (
                      <button
                        key={number}
                        onClick={() => setCurrentPage(number)}
                        className={`w-7 h-7 sm:w-10 sm:h-10 text-[10px] sm:text-sm rounded-md sm:rounded-lg transition-colors ${
                          currentPage === number
                            ? "bg-amber-800 text-white"
                            : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-amber-300"
                        }`}
                      >
                        {number}
                      </button>
                    ))}
                  </div>

                  {/* Next Button */}
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    className={`px-2 py-1 sm:px-4 sm:py-2 text-[10px] sm:text-sm rounded-md sm:rounded-lg transition-colors ${
                      currentPage === totalPages
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-amber-300"
                    }`}
                  >
                    Next →
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12 sm:py-20">
              <p className="text-neutral-500">
                No products found in {selectedCategory} category.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Collection;