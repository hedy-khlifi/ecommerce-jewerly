// app/collection/[product]/page.tsx
import { products } from "@/app/data/products";
import Link from "next/link";
import AddToCartButton from "@/components/AddToCartButton";

type Props = { params: Promise<{ product: string }> };

async function Page({ params }: Props) {
  const { product } = await params;
  const prod = products.find((p) => String(p.id) === product);

  if (!prod)
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-amber-700 font-light tracking-widest text-sm mb-4">
            Product not found
          </p>
          <Link
            href="/collection"
            className="inline-block text-xs tracking-[0.25em] uppercase text-amber-700 border border-amber-200 px-6 py-3 hover:bg-amber-50 transition-colors rounded-lg"
          >
            Back to Collection
          </Link>
        </div>
      </div>
    );

  return (
    <div
      className="min-h-screen bg-white text-gray-900 overflow-x-hidden w-full mt-10 pt-2.5 md:mt-0 md:pt-0"
      style={{ fontFamily: "'Jost', sans-serif" }}
    >
      <div className="flex flex-col lg:flex-row w-full">
        {/* Image Section - Responsive */}
        <div className="w-full lg:w-1/2 bg-gray-50 flex items-center justify-center p-6 sm:p-8 md:p-12 lg:p-16 min-h-[50vh] lg:min-h-screen">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg aspect-[3/4]">
            {/* Decorative frame */}
            <div className="absolute inset-0 border border-amber-200 pointer-events-none z-10 rounded-lg" />
            <div className="absolute -inset-2 border border-amber-100 pointer-events-none hidden sm:block rounded-lg" />

            {/* Main Image */}
            <img
              src={prod.images[0]}
              alt={prod.name}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 rounded-lg"
            />

            {/* Image counter badge */}
            {prod.images.length > 1 && (
              <div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-sm text-amber-600 text-xs px-2 py-1 rounded-full">
                {prod.images.length} photos
              </div>
            )}
          </div>
        </div>

        {/* Info Section - Responsive */}
        <div className="w-full lg:w-1/2 bg-white p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center gap-4 sm:gap-6">
          {/* Brand */}
          <div>
            <p className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-amber-600 mb-2 sm:mb-3">
              FAKHFEKH JEWELLERY
            </p>
            <h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {prod.name}
            </h1>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-3 flex-wrap">
            <p className="text-2xl sm:text-3xl md:text-4xl font-light text-amber-600 tracking-wider">
              {prod.price} TND
            </p>
          </div>

          {/* Divider */}
          <div className="h-px bg-gray-200 my-2" />

          {/* Description */}
          <div className="space-y-4">
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-light">
              {prod.description}
            </p>
          </div>

          {/* Divider */}
          <div className="h-px bg-gray-200 my-2" />

          {/* Product Specs */}
          <div className="grid grid-cols-2 gap-4 text-xs">
            {prod.material && (
              <div>
                <p className="text-amber-600 uppercase tracking-wider mb-1">
                  Material
                </p>
                <p className="text-gray-600 font-light">{prod.material}</p>
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="h-px bg-gray-200 my-2" />

          {/* Actions - Using Client Component */}
          <AddToCartButton
            productId={String(prod.id)}
            productName={prod.name}
            productDescription={prod.description}
            productPrice={prod.price}
            productImage={prod.images[0]}
          />

          {/* Additional info */}
          <p className="text-[10px] text-gray-400 text-center">
            Free shipping in Tunisia | Secure payment
          </p>

          {/* Thumbnail gallery for multiple images */}
          {prod.images.length > 1 && (
            <div className="mt-6 pt-4 border-t border-gray-200">
              <p className="text-[10px] text-amber-600 uppercase tracking-wider mb-3">
                More views
              </p>
              <div className="flex gap-3 overflow-x-auto pb-2">
                {prod.images.slice(0, 4).map((img: string, idx: number) => (
                  <div
                    key={idx}
                    className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 border border-gray-200 cursor-pointer hover:border-amber-400 transition-colors overflow-hidden rounded-lg"
                  >
                    <img
                      src={img}
                      alt={`${prod.name} view ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Page;
