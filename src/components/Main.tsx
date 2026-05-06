// app/components/MainSection.jsx
"use client";

import Link from "next/link";

export default function MainSection() {
  const products = [
    {
      name: "Diamond Solitaire Ring",
      price: "14,500",
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600",
      category: "Rings",
    },
    {
      name: "Pearl Drop Earrings",
      price: "3,900",
      image:
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600",
      category: "Earrings",
    },
    {
      name: "Gold Infinity Necklace",
      price: "8,200",
      image:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600",
      category: "Necklaces",
    },
    {
      name: "Sapphire Tennis Bracelet",
      price: "10,500",
      image:
        "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600",
      category: "Bracelets",
    },
    {
      name: "Rose Gold Wedding Band",
      price: "6,200",
      image:
        "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=600",
      category: "Rings",
    },
    {
      name: "Emerald Pendant",
      price: "12,800",
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600",
      category: "Necklaces",
    },
  ];

  const categories = ["All", "Rings", "Necklaces", "Earrings", "Bracelets"];
  const items = [
    {
      id: 1,
      alt: "rim",
      img: "https://scontent.ftun9-1.fna.fbcdn.net/v/t51.75761-15/510933905_18073551494500213_2353954909651596061_n.jpg?stp=c0.118.1440.1440a_dst-jpg_s206x206_tt6&_nc_cat=102&ccb=1-7&_nc_sid=a934a8&_nc_ohc=pmKTJB-tgwEQ7kNvwFLJyQh&_nc_oc=Adquh5zwRFcZ3tmJlqX-sCq4iXcfrK4X3Zyzf_zpRC8wtCQS3ivwr2MvHLlkh_FIZoc&_nc_zt=23&_nc_ht=scontent.ftun9-1.fna&_nc_gid=Mzduzbku1rHr-EjGSZPt3g&_nc_ss=7b2a8&oh=00_Af0UAkiYgEgHk2pdPX_3En0xk3JA-Im4ZOMqI2Br-FbTBg&oe=69F80E97",
    },
    {
      id: 2,
      alt: "image",
      img: "https://scontent.ftun9-1.fna.fbcdn.net/v/t39.30808-6/469058405_18050730596500213_7226161165494324001_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=101&ccb=1-7&_nc_sid=a934a8&_nc_ohc=TgOuG26keG4Q7kNvwF5aWHY&_nc_oc=Adom6o8pO2a6Boryfj8-JFnuTJ99vSVzM3dFtHcioPzvLF22YzaRxpmWoffai0Jg5a8&_nc_zt=23&_nc_ht=scontent.ftun9-1.fna&_nc_gid=jvhg3l1DtTbXrs25_p7mfA&_nc_ss=7b2a8&oh=00_Af0v_phONJdXAQ3YrMZCPPDRFjXUAgGy4xOMirBSs08wpQ&oe=69F7E1D5",
    },
    {
      id: 3,
      alt: "this",
      img: "https://scontent.ftun9-1.fna.fbcdn.net/v/t39.30808-6/482209106_1085902200217935_2076160933620977104_n.jpg?stp=c0.67.983.983a_dst-jpg_s206x206_tt6&_nc_cat=108&ccb=1-7&_nc_sid=a934a8&_nc_ohc=KNb0jMJfQ6EQ7kNvwH4O0qx&_nc_oc=AdpGMLqHJ7zpeHw4_MH2LpwTB3DkD5nfpTQKuyviVCzvJc65WmMVSQpiiCCwLdNe5qU&_nc_zt=23&_nc_ht=scontent.ftun9-1.fna&_nc_gid=Jvf0_ngv7eTPzY3ooIfBTQ&_nc_ss=7b2a8&oh=00_Af1lVCbpST7KjfLE30ukJQ1J2d2hsAXXIY75hqzPEaoZcg&oe=69F7E054",
    },
    {
      id: 4,
      alt: "luxury",
      img: "https://scontent.ftun9-1.fna.fbcdn.net/v/t51.75761-15/491453202_18067096604500213_7242273988277295847_n.jpg?stp=c0.119.1440.1440a_dst-jpg_s206x206_tt6&_nc_cat=107&ccb=1-7&_nc_sid=a934a8&_nc_ohc=UJIH_jl6hd4Q7kNvwEOmTxP&_nc_oc=AdpaaYit1yqepzeVcvSOcxR2VoefIhdF4cNzR2x_4eBiHt9Weys-4a4b-_VChihwgwY&_nc_zt=23&_nc_ht=scontent.ftun9-1.fna&_nc_gid=qnUWrwIqkGSoW2i7su91Xw&_nc_ss=7b2a8&oh=00_Af1-3zS8PamWI7WN_5CrRnoDl7wl0zGtuh96Zs8YYROjIQ&oe=69F7E234",
    },
  ];

  return (
    <div className="bg-white  overflow-x-hidden w-full mt max-w-full ">
      {/* Hero Banner */}
      <div className="relative mt-0 lg:-mt-20 h-[500px] sm:h-[550px] md:h-[600px] bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-amber-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-amber-600 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <div className="mb-4">
              <span className="text-amber-600 text-xs sm:text-sm tracking-[0.3em] uppercase font-light">
                Since 2020
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-4 sm:mb-6">
              Where Dreams
              <span className="text-amber-600 font-semibold block">
                Become Heirlooms
              </span>
            </h1>
            <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
              Discover exceptional craftsmanship and timeless elegance. Each
              piece tells a story of luxury, passion, and enduring beauty.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gray-900 text-white hover:bg-amber-600 transition-all duration-300 rounded-sm tracking-wide text-sm sm:text-base">
                Shop Collection
              </button>
              <button className="px-6 sm:px-8 py-2.5 sm:py-3 border border-gray-300 text-gray-900 hover:border-amber-600 hover:text-amber-600 transition-all duration-300 rounded-sm text-sm sm:text-base">
                View Lookbook
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Stats */}
      <div className="border-y border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            {[
              { number: "10,000+", label: "Happy Customers" },
              { number: "300+", label: "Unique Designs" },
              { number: "7+", label: "Years of Excellence" },
              { number: "100%", label: "Authentic Gems" },
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-2xl sm:text-3xl font-light text-amber-600">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-amber-600 text-xs sm:text-sm tracking-wider uppercase">
            Bestsellers
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mt-2 mb-3 sm:mb-4">
            Timeless Creations
          </h2>
          <div className="w-20 h-px bg-amber-600 mx-auto"></div>
          <p className="text-gray-500 mt-4 sm:mt-6 max-w-xl mx-auto text-sm sm:text-base">
            Each masterpiece is crafted with precision and adorned with the
            finest materials
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative overflow-hidden bg-gray-50 rounded-lg mb-3 sm:mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 sm:h-80 md:h-96 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                <button className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 bg-white text-gray-900 py-2 text-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 text-xs sm:text-sm tracking-wide rounded">
                  Quick View
                </button>
                <span className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-amber-600 text-white px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs tracking-wide rounded">
                  {product.category}
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                {product.name}
              </h3>
              <p className="text-amber-600 font-light text-sm sm:text-base">
                {product.price} TND
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 sm:mt-12">
          <button className="px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 rounded-sm tracking-wide text-sm sm:text-base">
            View All Collections
          </button>
        </div>
      </div>

      {/* Luxury Features */}
      <div className="bg-gradient-to-br from-gray-50 to-white py-16 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            {[
              {
                icon: "💎",
                title: "Certified Gemstones",
                description:
                  "Every stone comes with authenticity certification",
              },
              {
                icon: "✨",
                title: "Lifetime Service",
                description: "Complimentary cleaning and maintenance",
              },
              {
                icon: "🚚",
                title: "Secure Delivery",
                description: "Insured shipping worldwide",
              },
            ].map((feature, idx) => (
              <div key={idx} className="text-center group">
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm sm:text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video/Image Banner */}
      <div
        className="relative h-[400px] sm:h-[450px] md:h-[500px] bg-fixed bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/20858959/pexels-photo-20858959.jpeg)",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-2xl px-4">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-white mb-3 sm:mb-4">
              Bespoke Creations
            </h3>
            <div className="w-16 h-px bg-amber-600 mx-auto mb-4 sm:mb-6"></div>
            <p className="text-gray-200 text-sm sm:text-base mb-6 sm:mb-8 px-2">
              Commission a unique piece that captures your vision. Our master
              jewelers bring your dreams to life.
            </p>
            <button className="px-6 sm:px-8 py-2.5 sm:py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300 text-sm sm:text-base">
              <Link href="/contact">Contact Us</Link>
            </button>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-amber-600 text-xs sm:text-sm tracking-wider uppercase">
              Testimonials
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mt-2">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                text: "The craftsmanship is extraordinary. I've never owned such a beautiful piece.",
                name: "Rim Riayhi",
                role: "Actress",
              },
              {
                text: "From consultation to delivery, the experience was seamless and luxurious.",
                name: "Azza Slimeni",
                role: "Model",
              },
              {
                text: "The attention to detail in my custom ring exceeded all expectations.",
                name: "Jihen Miled",
                role: "Journalist",
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="border border-gray-100 p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-amber-600 text-3xl sm:text-4xl mb-3 sm:mb-4">
                  "
                </div>
                <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                  {testimonial.text}
                </p>
                <div>
                  <p className="font-semibold text-gray-900 text-sm sm:text-base">
                    {testimonial.name}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* last section3 */}
      {/* Gallery Section */}
      {/* <div className="bg-gradient-to-br from-gray-50 to-white py-16 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-amber-600 text-xs sm:text-sm tracking-wider uppercase">
              Signature Moments
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mt-2">
              Jewelry That Tells Your Story
            </h2>
            <div className="w-20 h-px bg-amber-600 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
            {items.map((item, index) => (
              <div key={index} className="relative group cursor-pointer">
                <div className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                  <img
                    src={item.img}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
}
