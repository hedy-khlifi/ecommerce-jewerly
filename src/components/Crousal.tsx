"use client";
import React, { useState, useEffect } from "react";

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      img: "https://scontent.ftun9-1.fna.fbcdn.net/v/t39.30808-6/481776170_1081433703998118_6695145387866802381_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=2a1932&_nc_ohc=uh9BD0R26JcQ7kNvwEjYBbV&_nc_oc=AdoVsiEWCCny8cDwlks5HHVpmI0U_xhrJshPWpkKkgdf4uNztcSYrrwxEZw37IhTiG4&_nc_zt=23&_nc_ht=scontent.ftun9-1.fna&_nc_gid=IGK2mf0DrTjqLFEbpNdAtg&_nc_ss=7b2a8&oh=00_Af4TXLjjZCtGO7oWlGgVZi0yMBJcSRhV9fWsrGqW_VYEZg&oe=6A00FF74",
      alt: "Beautiful mountain landscape",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1585960622850-ed33c41d6418",
      alt: "Misty forest",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1611955167811-4711904bb9f8",
      alt: "Sunlight through trees",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1542990254-85e6a9a2ef92",
      alt: "Forest path",
    },
    {
      id: 5,
      img: "https://images.pexels.com/photos/36195254/pexels-photo-36195254.jpeg",
      alt: "Starry night sky",
    },
    {
      id: 6,
      img: "https://images.pexels.com/photos/32988522/pexels-photo-32988522.jpeg",
      alt: "jewelry image",
    },
    {
      id: 7,
      img: "https://images.pexels.com/photos/6625934/pexels-photo-6625934.jpeg",
      alt: "rose jewelry",
    },
  ];

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const goToSlide = (index:number) => setCurrentSlide(index);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  // ✅ Improved image behavior for mobile
  const imgClassname =  "absolute w-full h-full object-cover object-[50%_35%] sm:object-center";
  return (
    <div className="relative w-full">
      {/* ✅ Better responsive height */}
      <div className="relative h-[220px] xs:h-[260px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={slide.img} loading="lazy" className={imgClassname} alt={slide.alt} />

            {/* ✅ Better overlay for mobile */}
            <div className="absolute inset-0 bg-black/40 sm:bg-black/30"></div>
          </div>
        ))}
      </div>

      {/* ✅ Indicators (smaller on mobile) */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-2 sm:bottom-5 left-1/2 space-x-1 sm:space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`transition-all ${
              index === currentSlide
                ? "bg-white w-3 sm:w-6 h-1"
                : "bg-white/50 w-2 sm:w-3 h-1"
            } rounded-full`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      {/* ✅ Left button (smaller mobile) */}
      <button
        className="absolute top-1/2 left-2 sm:left-4 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 rounded-full p-1 sm:p-2"
        onClick={prevSlide}
      >
        <svg
          className="w-4 h-4 sm:w-6 sm:h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m15 19-7-7 7-7"
          />
        </svg>
      </button>

      {/* ✅ Right button */}
      <button
        className="absolute top-1/2 right-2 sm:right-4 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 rounded-full p-1 sm:p-2"
        onClick={nextSlide}
      >
        <svg
          className="w-4 h-4 sm:w-6 sm:h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m9 5 7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
}

export default Carousel;
