import React from 'react'

function Loading() {
   return (
    <div className="fixed inset-0 bg-white/95 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="flex flex-col items-center gap-5">
        {/* Multiple Gold Rings */}
        <div className="relative w-20 h-20 sm:w-24 sm:h-24">
          {/* Outer Ring */}
          <div className="absolute inset-0 rounded-full border-2 border-amber-200 animate-pulse"></div>

          {/* Middle Ring - Rotating */}
          <div className="absolute inset-1 rounded-full border-2 border-t-amber-600 border-r-amber-600 border-b-transparent border-l-transparent animate-spin"></div>

          {/* Inner Ring - Counter Rotating */}
          <div className="absolute inset-3 rounded-full border-2 border-t-amber-400 border-l-amber-400 border-r-transparent border-b-transparent animate-spin-slow"></div>

          {/* Center Dot */}
          <div className="absolute inset-[33%] rounded-full bg-amber-600 animate-pulse"></div>
        </div>

        {/* Elegant Text */}
        <div className="text-center space-y-1">
          <p className="text-amber-700 font-light tracking-wide text-sm sm:text-base">
            Crafting Your Experience
          </p>
          <div className="flex justify-center gap-1">
            <div
              className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-bounce"
              style={{ animationDelay: "0s" }}
            ></div>
            <div
              className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-bounce"
              style={{ animationDelay: "0.4s" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loading