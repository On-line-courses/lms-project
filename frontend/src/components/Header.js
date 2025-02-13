import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#333333] text-[#f4f4f4] w-full h-[100px] flex items-center justify-between px-6 fixed top-0 left-0 z-50">
      <h1 className="text-2xl font-bold">Баланс</h1>

      {/* Бургер-меню для мобільних */}
      <div className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? (
          <X size={28} className="text-white" />
        ) : (
          <Menu size={28} className="text-white" />
        )}
      </div>

      {/* Меню */}
      <ul
        className={`md:flex space-x-6 ${
          isMenuOpen
            ? "block absolute top-[100px] left-0 bg-[#333333] w-full p-4"
            : "hidden md:flex"
        }`}
      >
        <li>
          <Link to="/" className="hover:underline">
            Головна
          </Link>
        </li>
        <li>
          <Link to="/courses" className="hover:underline">
            Курси
          </Link>
        </li>
        <li>
          <Link to="/dashboard" className="hover:underline">
            Особистий кабінет
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:underline">
            Контакти
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
