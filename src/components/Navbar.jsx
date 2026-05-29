import { useState } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black/80 backdrop-blur-lg border-b border-yellow-500/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="GOGO FM"
            className="w-14 h-14 rounded-full border-2 border-yellow-400 object-cover animate-pulse"
          />

          <div>
            <h1 className="text-yellow-400 font-extrabold text-xl">
              GOGO FM
            </h1>

            <p className="text-gray-300 text-xs">
              Radio Digitale Africaine
            </p>
          </div>
        </div>

        {/* MENU DESKTOP */}
        <ul className="hidden md:flex items-center gap-8 text-white font-semibold">
          <li className="hover:text-yellow-400 cursor-pointer transition">
            Accueil
          </li>

          <li className="hover:text-yellow-400 cursor-pointer transition">
            Live
          </li>

          <li className="hover:text-yellow-400 cursor-pointer transition">
            Podcasts
          </li>

          <li className="hover:text-yellow-400 cursor-pointer transition">
            Solidarité
          </li>

          <li className="hover:text-yellow-400 cursor-pointer transition">
            Cadeaux
          </li>
        </ul>

        {/* SEARCH */}
        <div className="hidden lg:flex items-center">
          <input
            type="text"
            placeholder="Rechercher..."
            className="bg-black border border-yellow-500/40 rounded-full px-4 py-2 text-white outline-none focus:border-yellow-400"
          />
        </div>

        {/* MENU MOBILE BUTTON */}
        <button
          className="md:hidden text-yellow-400 text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-yellow-500/20 px-6 py-4">
          <ul className="flex flex-col gap-4 text-white font-semibold">
            <li>Accueil</li>
            <li>Live</li>
            <li>Podcasts</li>
            <li>Solidarité</li>
            <li>Cadeaux</li>

            <input
              type="text"
              placeholder="Rechercher..."
              className="bg-black border border-yellow-500/40 rounded-full px-4 py-2 text-white outline-none"
            />
          </ul>
        </div>
      )}
    </nav>
  );
}