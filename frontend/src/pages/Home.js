import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import backgroundImage from "../assets/images/background.jpg";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="bg-white text-black min-h-screen">
      <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Психологічні курси</h1>
        <div className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
        <ul
          className={`md:flex space-x-4 ${
            isMenuOpen ? "block" : "hidden"
          } md:block absolute md:static bg-blue-600 w-full md:w-auto left-0 top-16 md:top-0 p-4 md:p-0`}
        >
          <li>
            <Link to="/" className="hover:underline block md:inline">
              Головна
            </Link>
          </li>
          <li>
            <Link to="/courses" className="hover:underline block md:inline">
              Курси
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline block md:inline">
              Зворотний зв'язок
            </Link>
          </li>
        </ul>
      </nav>

      <header
        className="text-center py-20 bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="bg-black bg-opacity-50 p-6 rounded-lg inline-block">
          <h1 className="text-4xl font-bold">
            Платформа онлайн-курсів з психології
          </h1>
          <p className="mt-4 text-lg">
            Навчайтеся в зручному темпі, отримуйте практичні навички та
            рухайтеся до психологічного добробуту разом із нами!
          </p>
        </div>
      </header>

      <section className="p-8">
        <h2 className="text-3xl font-bold mb-4">Категорії курсів</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            to="/beginner"
            className="block bg-orange-500 text-white text-center p-4 rounded-lg"
          >
            Для початківців
          </Link>
          <Link
            to="/professionals"
            className="block bg-orange-500 text-white text-center p-4 rounded-lg"
          >
            Для фахівців
          </Link>
          <Link
            to="/selfhelp"
            className="block bg-orange-500 text-white text-center p-4 rounded-lg"
          >
            Для самодопомоги
          </Link>
          <Link
            to="/parents"
            className="block bg-orange-500 text-white text-center p-4 rounded-lg"
          >
            Для батьків
          </Link>
        </div>
      </section>

      <button
        onClick={openModal}
        className="bg-blue-600 text-white p-3 rounded-lg mt-4 mx-auto block"
      >
        Зареєструватися
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg w-96">
            <h3 className="text-2xl font-bold mb-4">Реєстрація</h3>
            <form>
              <input
                type="text"
                placeholder="Ім'я"
                className="border p-2 w-full mb-2"
              />
              <input
                type="text"
                placeholder="Прізвище"
                className="border p-2 w-full mb-2"
              />
              <input
                type="email"
                placeholder="Емейл"
                className="border p-2 w-full mb-2"
              />
              <input
                type="text"
                placeholder="Телефон"
                className="border p-2 w-full mb-2"
              />
              <input
                type="password"
                placeholder="Пароль"
                className="border p-2 w-full mb-2"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white p-2 rounded-lg w-full"
              >
                Зареєструватися
              </button>
            </form>
            <button onClick={closeModal} className="mt-4 text-red-500">
              Закрити
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
