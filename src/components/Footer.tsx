"use client";

export default function Footer() {
  return (
    <footer
      className="bg-[#0a0908] border-t border-[#c9a84c22] px-10 pt-12 pb-8"
      style={{ fontFamily: "'Jost', sans-serif" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        <div>
          <p
            className="text-[#c9a84c] text-2xl font-light tracking-widest mb-3"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Fakhfekh
          </p>
          <p className="text-xs text-[#6b5e4e] leading-relaxed font-light">
            Handcrafted jewellery from the heart of Tunis. Each piece tells a
            story of heritage, precision, and beauty.
          </p>
        </div>
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-[#c9a84c] opacity-70 mb-4">
            Navigate
          </p>
          <ul className="flex flex-col gap-3 text-sm text-[#7a6a58] font-light">
            {["Collections", "New arrivals", "Custom orders", "Our story"].map(
              (l) => (
                <li
                  key={l}
                  className="hover:text-[#c9a84c] transition-colors cursor-pointer"
                >
                  {l}
                </li>
              ),
            )}
          </ul>
        </div>
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-[#c9a84c] opacity-70 mb-4">
            Contact
          </p>
          <ul className="flex flex-col gap-3 text-sm text-[#7a6a58] font-light">
            <li>contact@fakhfekh.tn</li>
            <li>+216 XX XXX XXX</li>
            <li>Tunis, Tunisia</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#c9a84c18] pt-6 flex justify-between items-center">
        <p className="text-xs text-[#4a3f33]">
          © {new Date().getFullYear()} Fakhfekh Jewellery. All rights reserved.
        </p>
        <div className="flex gap-6">
          {["Instagram", "Facebook", "TikTok"].map((s) => (
            <span
              key={s}
              className="text-xs text-[#4a3f33] hover:text-[#c9a84c] transition-colors cursor-pointer tracking-wider"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
