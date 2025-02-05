// src/Home.js
import React, { useState } from "react";
import { Link } from "react-router-dom"; // Для навігації між сторінками

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Функція для відкриття модального вікна
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      {/* Навігаційне меню */}
      <nav className="bg-blue-500 text-white p-4">
        <ul className="flex space-x-4">
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
            <Link to="/contact" className="hover:underline">
              Зворотний зв'язок
            </Link>
          </li>
        </ul>
      </nav>

      {/* Інформація про платформу */}
      <section className="my-8 p-8 bg-gray-100 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Про нашу платформу</h2>
        <p>
          Ми пропонуємо високоякісні онлайн курси з різних тем, що допоможуть
          вам розвивати нові навички.
        </p>
      </section>

      {/* Перелік курсів */}
      <section className="my-8 p-8">
        <h2 className="text-3xl font-bold mb-4">Наші курси</h2>
        <div className="grid grid-cols-2 gap-4">
          <Link
            to="/course1"
            className="block bg-orange-500 text-white text-center p-4 rounded-lg"
          >
            Курс 1
          </Link>
          <Link
            to="/course2"
            className="block bg-orange-500 text-white text-center p-4 rounded-lg"
          >
            Курс 2
          </Link>
          <Link
            to="/course3"
            className="block bg-orange-500 text-white text-center p-4 rounded-lg"
          >
            Курс 3
          </Link>
          <Link
            to="/course4"
            className="block bg-orange-500 text-white text-center p-4 rounded-lg"
          >
            Курс 4
          </Link>
          <Link
            to="/course5"
            className="block bg-orange-500 text-white text-center p-4 rounded-lg"
          >
            Курс 5
          </Link>
        </div>
      </section>

      {/* Кнопка для відкриття модального вікна реєстрації */}
      <button
        onClick={openModal}
        className="bg-blue-500 text-white p-2 rounded-lg"
      >
        Зареєструватися
      </button>

      {/* Модальне вікно для реєстрації */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg w-96">
            <h3 className="text-2xl font-bold mb-4">Реєстрація</h3>
            <form>
              <div className="mb-4">
                <label className="block">Ім'я</label>
                <input type="text" className="border p-2 w-full" />
              </div>
              <div className="mb-4">
                <label className="block">Прізвище</label>
                <input type="text" className="border p-2 w-full" />
              </div>
              <div className="mb-4">
                <label className="block">Емейл</label>
                <input type="email" className="border p-2 w-full" />
              </div>
              <div className="mb-4">
                <label className="block">Телефон</label>
                <input type="text" className="border p-2 w-full" />
              </div>
              <div className="mb-4">
                <label className="block">Пароль</label>
                <input type="password" className="border p-2 w-full" />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded-lg w-full"
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
