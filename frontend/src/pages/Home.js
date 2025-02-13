import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import backgroundImage from "../assets/images/background.jpg";

const Home = () => {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (index) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  return (
    <div className="bg-[#f4f4f4] text-[#333333] min-h-screen">
      <Header />

      {/* Головний екран з бекграундом */}
      <header
        className="h-screen flex flex-col justify-center items-center text-center bg-cover bg-center px-4"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="bg-black bg-opacity-50 p-10 rounded-lg shadow-lg max-w-lg mx-auto">
          <h1 className="text-5xl font-extrabold text-[#f4f4f4] leading-tight">
            Баланс
          </h1>
          <h2 className="text-xl mt-4 text-[#f4f4f4] opacity-75">
            Онлайн школа психології для всіх
          </h2>
        </div>
      </header>

      {/* Категорії курсів */}
      <section className="p-8 bg-[#ffffff]">
        <h2 className="text-4xl font-semibold text-center text-[#333333]">
          Категорії курсів
        </h2>
        <div className="mt-6 max-w-3xl mx-auto">
          {[
            "Для початківців",
            "Для фахівців",
            "Для самодопомоги",
            "Для батьків",
          ].map((category, index) => (
            <div key={index} className="mb-6">
              <button
                className="w-full text-left bg-gradient-to-r from-[#f5a623] to-[#ff6a00] text-white p-5 rounded-xl font-bold shadow-md hover:scale-105 transition-transform"
                onClick={() => toggleCategory(index)}
              >
                {category}
              </button>
              {openCategory === index && (
                <ul className="mt-4 bg-white text-black p-4 rounded-lg shadow-md space-y-2">
                  <li>
                    <Link
                      to={`/courses/${index}/1`}
                      className="block text-[#f5a623] hover:underline transition-all"
                    >
                      Курс 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`/courses/${index}/2`}
                      className="block text-[#f5a623] hover:underline transition-all"
                    >
                      Курс 2
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`/courses/${index}/3`}
                      className="block text-[#f5a623] hover:underline transition-all"
                    >
                      Курс 3
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
