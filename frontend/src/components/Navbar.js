import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-primary text-textLight p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-title">Мій LMS</div>
        <div className="space-x-4">
          <Link to="/" className="hover:underline font-body">
            Головна
          </Link>
          <Link to="/course" className="hover:underline font-body">
            Курс
          </Link>
          <Link to="/dashboard" className="hover:underline font-body">
            Особистий кабінет
          </Link>
          <Link to="/checklist" className="hover:underline font-body">
            Чек-лист
          </Link>
          <Link to="/contact" className="hover:underline font-body">
            Контакти
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
