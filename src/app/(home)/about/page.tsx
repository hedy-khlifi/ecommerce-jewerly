import Link from "next/link";

function About() {
  return (
    <div className="font-sans antialiased overflow-x-hidden w-full max-w-full">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-amber-50 to-orange-50 w-full max-w-full overflow-x-hidden">
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="relative w-full max-w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
          <div className="text-center max-w-7xl mx-auto w-full">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-amber-900 tracking-tight">
              JEWELRY FAKHFAKH
            </h1>
            <p className="mt-4 text-base sm:text-lg md:text-xl text-amber-700 max-w-2xl mx-auto px-2">
              The art of Tunisian jewelry, passed down from generation to
              generation
            </p>
            <div className="mt-6 flex justify-center space-x-2">
              <div className="w-12 h-0.5 bg-amber-400"></div>
              <div className="w-6 h-0.5 bg-amber-600"></div>
              <div className="w-12 h-0.5 bg-amber-400"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 1: Image Left, Text Right */}
      <div className="w-full max-w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 overflow-x-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 items-center">
            {/* Image Left */}
            <div className="lg:w-1/2 w-full">
              <div className="rounded-2xl overflow-hidden shadow-xl transform transition duration-500 hover:scale-105">
                <img
                  src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Tunisian artisan crafting jewelry"
                  className="w-full h-64 sm:h-80 md:h-96 object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Text Right */}
            <div className="lg:w-1/2 w-full space-y-4 sm:space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-amber-900">
                The Craftsmanship Behind Every Jewel
              </h2>
              <div className="w-20 h-0.5 bg-amber-500"></div>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                At Jewelry Fakhfakh, every piece tells a story. Our master
                jewelers preserve traditional Tunisian techniques that are
                centuries old, blended with contemporary designs.
              </p>
              <p className="text-gray-600 text-sm sm:text-base">
                From the selection of precious stones to the meticulous
                finishing, every step is done by hand with an unwavering passion
                for beauty and quality.
              </p>
              <button className="mt-2 sm:mt-4 px-6 sm:px-8 py-2.5 sm:py-3 bg-amber-800 text-white rounded-full hover:bg-amber-900 transition duration-300 shadow-md hover:shadow-lg text-sm sm:text-base">
                <Link href="/collection"> Discover Our Craftsmanship</Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Image Right, Text Left */}
      <div className="bg-amber-50/50 w-full max-w-full overflow-x-hidden py-12 sm:py-16 md:py-20">
        <div className="w-full max-w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex flex-col lg:flex-row-reverse gap-8 sm:gap-12 items-center">
              {/* Image Right */}
              <div className="lg:w-1/2 w-full">
                <div className="rounded-2xl overflow-hidden shadow-xl transform transition duration-500 hover:scale-105">
                  <img
                    src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                    alt="Contemporary Tunisian jewelry collection"
                    className="w-full h-64 sm:h-80 md:h-96 object-cover"
                  />
                </div>
              </div>

              {/* Text Left */}
              <div className="lg:w-1/2 w-full space-y-4 sm:space-y-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-amber-900">
                  Tunisian Heritage Reinvented
                </h2>
                <div className="w-20 h-0.5 bg-amber-500"></div>
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  Our creations draw inspiration from Tunisia's cultural
                  richness — from the patterns of the Tunis medina to the
                  vibrant colors of the southern desert.
                </p>
                <p className="text-gray-600 text-sm sm:text-base">
                  We believe that every woman deserves a unique piece that
                  celebrates her individuality while honoring ancestral
                  heritage. Our collection offers jewelry that transcends
                  generations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="w-full max-w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 overflow-x-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-amber-900">
              Our Values, Your Trust
            </h2>
            <div className="w-20 h-0.5 bg-amber-500 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center p-4 sm:p-6 rounded-xl hover:shadow-lg transition duration-300">
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">🤝</div>
              <h3 className="text-lg sm:text-xl font-semibold text-amber-800 mb-2">
                Authenticity Guaranteed
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Every piece comes with a certificate of authenticity and
                lifetime warranty.
              </p>
            </div>
            <div className="text-center p-4 sm:p-6 rounded-xl hover:shadow-lg transition duration-300">
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">🚚</div>
              <h3 className="text-lg sm:text-xl font-semibold text-amber-800 mb-2">
                Free Delivery
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Free shipping across Tunisia for every order.
              </p>
            </div>
            <div className="text-center p-4 sm:p-6 rounded-xl hover:shadow-lg transition duration-300">
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">🔧</div>
              <h3 className="text-lg sm:text-xl font-semibold text-amber-800 mb-2">
                Personalization
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Create the jewelry of your dreams with our unique customization
                service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
