import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between">
        <div className="text-white text-lg font-bold">Мій LMS</div>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:underline">
            Головна
          </Link>
          <Link to="/course" className="text-white hover:underline">
            Курс
          </Link>
          <Link to="/dashboard" className="text-white hover:underline">
            Особистий кабінет
          </Link>
          <Link to="/checklist" className="text-white hover:underline">
            Чек-лист
          </Link>
          <Link to="/contact" className="text-white hover:underline">
            Контакти
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
