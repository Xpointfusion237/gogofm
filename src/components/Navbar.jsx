import { useState } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-yellow-500/20 shadow-lg">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* LOGO */}
        <div className="flex items-center gap-4">

          <img
            src={logo}
            alt="GOGO FM"
            className="w-14 h-14 rounded-full border-2 border-yellow-400 object-cover shadow-[0_0_25px_rgba(255,215,0,0.5)] animate-pulse"
          />

          <div>
            <h1 className="text-yellow-400 font-extrabold text-2xl tracking-wide">
              GOGO FM
            </h1>

            <p className="text-gray-300 text-xs tracking-widest uppercase">
              Radio Digitale Premium
            </p>
          </div>
        </div>

        {/* MENU DESKTOP */}
        <ul className="hidden md:flex items-center gap-8 text-white font-semibold">

          <li className="hover:text-yellow-400 transition duration-300 cursor-pointer">
            Accueil
          </li>

          <li className="hover:text-yellow-400 transition duration-300 cursor-pointer">
            Live
          </li>

          <li className="hover:text-yellow-400 transition duration-300 cursor-pointer">
            Podcasts
          </li>

          <li className="hover:text-yellow-400 transition duration-300 cursor-pointer">
            Solidarité
          </li>

          <li className="hover:text-yellow-400 transition duration-300 cursor-pointer">
            Cadeaux
          </li>

          <li className="hover:text-yellow-400 transition duration-300 cursor-pointer">
            Shop
          </li>
        </ul>

        {/* SEARCH BAR */}
        <div className="hidden lg:flex items-center">

          <input
            type="text"
            placeholder="Rechercher..."
            className="bg-[#111] border border-yellow-500/40 rounded-full px-5 py-2 text-white outline-none focus:border-yellow-400 transition duration-300 w-56"
          />
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-yellow-400 text-4xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 border-t border-yellow-500/20 px-6 py-6 backdrop-blur-xl">

          <ul className="flex flex-col gap-6 text-white font-semibold text-lg">

            <li className="hover:text-yellow-400 transition">
              Accueil
            </li>

            <li className="hover:text-yellow-400 transition">
              Live
            </li>

            <li className="hover:text-yellow-400 transition">
              Podcasts
            </li>

            <li className="hover:text-yellow-400 transition">
              Solidarité
            </li>

            <li className="hover:text-yellow-400 transition">
              Cadeaux
            </li>

            <li className="hover:text-yellow-400 transition">
              Shop
            </li>

            <input
              type="text"
              placeholder="Rechercher..."
              className="bg-[#111] border border-yellow-500/40 rounded-full px-5 py-3 text-white outline-none focus:border-yellow-400"
            />
          </ul>
        </div>
      )}
    </nav>
  );
}