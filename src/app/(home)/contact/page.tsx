import React from "react";
import Link from "next/link";

function Contact() {
  return (
    <div className="font-sans antialiased overflow-x-hidden w-full max-w-full bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-amber-50 to-orange-50 w-full max-w-full overflow-x-hidden">
        <div className="relative w-full max-w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
          <div className="text-center max-w-4xl mx-auto w-full">
            <p className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-amber-700 mb-3">
              Precious Moments Deserve Precious Connections
            </p>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-amber-900 mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Contact Us
            </h1>
            <div className="w-16 h-px bg-amber-300 mx-auto"></div>
            <p className="mt-6 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We would be delighted to assist you with your jewelry inquiries,
              custom orders, or any questions about our collections.
            </p>
          </div>
        </div>
      </div>

      {/* Main Contact Section */}
      <div className="w-full max-w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 overflow-x-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="w-full lg:w-2/3">
              <div className="bg-gray-50 border border-gray-200 p-6 sm:p-8 md:p-10 rounded-lg">
                <h2
                  className="text-xl sm:text-2xl text-gray-900 mb-2"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Send us a message
                </h2>
                <p className="text-xs text-gray-500 mb-6 sm:mb-8">
                  Fill out the form below and we will get back to you within 24
                  hours.
                </p>

                <form className="space-y-5 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-[10px] sm:text-xs tracking-wider uppercase text-amber-700 mb-2 font-medium">
                        First Name *
                      </label>
                      <input
                        type="text"
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] sm:text-xs tracking-wider uppercase text-amber-700 mb-2 font-medium">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] sm:text-xs tracking-wider uppercase text-amber-700 mb-2 font-medium">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                      placeholder="hello@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] sm:text-xs tracking-wider uppercase text-amber-700 mb-2 font-medium">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                      placeholder="+216 XX XXX XXX"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] sm:text-xs tracking-wider uppercase text-amber-700 mb-2 font-medium">
                      Inquiry Type *
                    </label>
                    <select className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-600 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors">
                      <option>Select an option</option>
                      <option>Product Inquiry</option>
                      <option>Custom Order</option>
                      <option>Repair & Care</option>
                      <option>Wholesale</option>
                      <option>Press & Media</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] sm:text-xs tracking-wider uppercase text-amber-700 mb-2 font-medium">
                      Message *
                    </label>
                    <textarea
                      rows={5}
                      className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors resize-none"
                      placeholder="Tell us about your inquiry..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-amber-800 text-white px-8 py-3 text-sm tracking-wider uppercase hover:bg-amber-900 transition-colors font-medium rounded-lg"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="w-full lg:w-1/3 space-y-6 sm:space-y-8">
              {/* Showroom Info */}
              <div className="bg-gray-50 border border-gray-200 p-6 sm:p-8 rounded-lg">
                <div className="mb-6">
                  <div className="text-amber-700 text-3xl mb-3">📍</div>
                  <h3
                    className="text-lg text-gray-900 mb-2 font-medium"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    Showroom
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Les Berges du Lac,
                    <br />
                    Tunis, Tunisia 1053
                    <br />
                    (Next to Tunisia Mall)
                  </p>
                </div>

                <div className="mb-6">
                  <div className="text-amber-700 text-3xl mb-3">📞</div>
                  <h3
                    className="text-lg text-gray-900 mb-2 font-medium"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    Contact
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    +216 70 123 456
                    <br />
                    +216 98 765 432 (WhatsApp)
                    <br />
                    contact@leclatdetunisie.tn
                  </p>
                </div>

                <div>
                  <div className="text-amber-700 text-3xl mb-3">⏰</div>
                  <h3
                    className="text-lg text-gray-900 mb-2 font-medium"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    Opening Hours
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Monday - Saturday: 10:00 - 19:00
                    <br />
                    Sunday: Closed
                    <br />
                    *Private appointments available upon request
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gray-50 border border-gray-200 p-6 sm:p-8 rounded-lg">
                <h3
                  className="text-lg text-gray-900 mb-4 text-center font-medium"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Follow our journey
                </h3>
                <div className="flex justify-center space-x-6">
                  {/* Instagram */}
                  <Link
                    href="https://www.instagram.com/jewelry_fakhfakh_aslam/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-amber-700 transition-colors duration-300"
                  >
                    <svg
                      className="w-6 h-6 sm:w-7 sm:h-7"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </Link>

                  {/* Facebook */}
                  <Link
                    href="https://www.facebook.com/profile.php?id=100063944954723"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-amber-700 transition-colors duration-300"
                  >
                    <svg
                      className="w-6 h-6 sm:w-7 sm:h-7"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </Link>

                  {/* TikTok */}
                  <Link
                    href="https://tiktok.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-amber-700 transition-colors duration-300"
                  >
                    <svg
                      className="w-6 h-6 sm:w-7 sm:h-7"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-3.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Selling Points Section */}
      <div className="bg-gray-50 w-full max-w-full overflow-x-hidden py-12 sm:py-16 md:py-20 border-t border-gray-200">
        <div className="w-full max-w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto w-full">
            <div className="text-center mb-10 sm:mb-12">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-3"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Why Choose Jewelry Fakhfakh
              </h2>
              <div className="w-16 h-px bg-amber-300 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {/* Authenticity Guaranteed */}
              <div className="text-center bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300 group">
                <div className="text-amber-600 mb-3 flex justify-center">
                  <svg
                    className="w-12 h-12 sm:w-14 sm:h-14 group-hover:scale-110 transition-transform duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2L15 8.5L22 9.5L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9.5L9 8.5L12 2Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <path
                      d="M12 7L13.5 10.5L17 11L14.5 13.5L15 17L12 15.5L9 17L9.5 13.5L7 11L10.5 10.5L12 7Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg text-gray-900 mb-2 font-medium">
                  Authenticity Guaranteed
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Every piece comes with a certificate of authenticity and
                  lifetime warranty
                </p>
              </div>

              {/* Handcrafted Excellence */}
              <div className="text-center bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300 group">
                <div className="text-amber-600 mb-3 flex justify-center">
                  <svg
                    className="w-12 h-12 sm:w-14 sm:h-14 group-hover:scale-110 transition-transform duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9 3L5 7L9 11"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <path
                      d="M15 3L19 7L15 11"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <path
                      d="M12 2V22"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <circle cx="12" cy="14" r="3" fill="currentColor" />
                    <path
                      d="M7 16C7 14 9 12 12 12"
                      stroke="currentColor"
                      strokeWidth="1"
                      fill="none"
                    />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg text-gray-900 mb-2 font-medium">
                  Handcrafted Excellence
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Traditional Tunisian craftsmanship meets contemporary design
                </p>
              </div>

              {/* Free Delivery */}
              <div className="text-center bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300 group">
                <div className="text-amber-600 mb-3 flex justify-center">
                  <svg
                    className="w-12 h-12 sm:w-14 sm:h-14 group-hover:scale-110 transition-transform duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M3 6H21V18H3V6Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <path
                      d="M7 6V4H17V6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <circle cx="7" cy="16" r="2" fill="currentColor" />
                    <circle cx="17" cy="16" r="2" fill="currentColor" />
                    <path
                      d="M12 6V14"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                    />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg text-gray-900 mb-2 font-medium">
                  Free Delivery
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Complimentary shipping across Tunisia and secure packaging
                </p>
              </div>

              {/* Custom Creations */}
              <div className="text-center bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300 group">
                <div className="text-amber-600 mb-3 flex justify-center">
                  <svg
                    className="w-12 h-12 sm:w-14 sm:h-14 group-hover:scale-110 transition-transform duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 4V20"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <path
                      d="M4 12H20"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <circle cx="12" cy="12" r="3" fill="currentColor" />
                    <path
                      d="M8 8L4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <path
                      d="M16 8L20 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <path
                      d="M16 16L20 20"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <path
                      d="M8 16L4 20"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                    />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg text-gray-900 mb-2 font-medium">
                  Custom Creations
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Personalized jewelry designed to bring your vision to life
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-6 sm:mt-8">
              {/* Lifetime Maintenance */}
              <div className="text-center bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300 group">
                <div className="text-amber-600 mb-3 flex justify-center">
                  <svg
                    className="w-12 h-12 sm:w-14 sm:h-14 group-hover:scale-110 transition-transform duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="9"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <path
                      d="M12 8V12L14 14"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <path
                      d="M5 3L3 5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <path
                      d="M19 3L21 5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                    />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg text-gray-900 mb-2 font-medium">
                  Lifetime Maintenance
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Free cleaning, polishing, and maintenance services for life
                </p>
              </div>

              {/* Flexible Payment */}
              <div className="text-center bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300 group">
                <div className="text-amber-600 mb-3 flex justify-center">
                  <svg
                    className="w-12 h-12 sm:w-14 sm:h-14 group-hover:scale-110 transition-transform duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      x="2"
                      y="6"
                      width="20"
                      height="12"
                      rx="1"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <path
                      d="M6 10H8"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <path
                      d="M16 14H18"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <circle cx="12" cy="12" r="2" fill="currentColor" />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg text-gray-900 mb-2 font-medium">
                  Flexible Payment
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Installment plans available with zero interest for 3-6 months
                </p>
              </div>

              {/* Gift Wrapping */}
              <div className="text-center bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300 group">
                <div className="text-amber-600 mb-3 flex justify-center">
                  <svg
                    className="w-12 h-12 sm:w-14 sm:h-14 group-hover:scale-110 transition-transform duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2L16 6L12 10L8 6L12 2Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <rect
                      x="4"
                      y="10"
                      width="16"
                      height="11"
                      rx="1"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <path
                      d="M12 10V21"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <path
                      d="M8 14H16"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                    />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg text-gray-900 mb-2 font-medium">
                  Gift Wrapping
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Complimentary luxury gift packaging with every purchase
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      {/* Map Section - Jewelry Fakhfakh Aslam Location */}
      <div className="w-full max-w-full overflow-x-hidden">
        <div className="w-full h-64 sm:h-80 md:h-96 bg-gray-100 relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.531658684752!2d10.2363647!3d36.8375752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd356f9c843363%3A0x1b76c3a2f921d4cd!2sJewelry%20Fakhfakh%20Aslam!5e0!3m2!1sfr!2stn!4v1746549876543!5m2!1sfr!2stn"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Jewelry Fakhfakh Aslam Location"
          ></iframe>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="w-full max-w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 overflow-x-hidden">
        <div className="max-w-4xl mx-auto w-full">
          <div className="text-center mb-10 sm:mb-12">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-3"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Frequently Asked Questions
            </h2>
            <div className="w-16 h-px bg-amber-300 mx-auto"></div>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-50 border border-gray-200 p-4 sm:p-6 rounded-lg">
              <h3 className="text-base sm:text-lg text-gray-900 mb-2 font-medium">
                Do you offer international shipping?
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Yes, we ship worldwide with fully insured delivery. Shipping
                costs vary by destination.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 p-4 sm:p-6 rounded-lg">
              <h3 className="text-base sm:text-lg text-gray-900 mb-2 font-medium">
                Can I return or exchange a product?
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Absolutely. We offer a 14-day return policy for unworn items in
                original condition.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 p-4 sm:p-6 rounded-lg">
              <h3 className="text-base sm:text-lg text-gray-900 mb-2 font-medium">
                How do I care for my jewelry?
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Each piece comes with detailed care instructions. We also offer
                free professional cleaning.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 p-4 sm:p-6 rounded-lg">
              <h3 className="text-base sm:text-lg text-gray-900 mb-2 font-medium">
                Do you offer custom design services?
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Yes, our master jewelers can create bespoke pieces tailored to
                your preferences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
