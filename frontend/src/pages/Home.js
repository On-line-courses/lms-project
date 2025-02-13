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
    <div className="bg-[#333333] text-[#f4f4f4] min-h-screen">
      <Header />

      {/* Головний екран з бекграундом */}
      <header
        className="h-screen flex flex-col justify-center items-center text-center bg-cover bg-center px-4"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-5xl font-bold text-[#f4f4f4]">Баланс</h1>
          <h2 className="text-2xl mt-2 text-[#f4f4f4]">
            Онлайн школа психології для всіх
          </h2>
        </div>
      </header>

      {/* Категорії курсів */}
      <section className="p-8">
        <h2 className="text-3xl font-bold text-center">Категорії курсів</h2>
        <div className="mt-6 max-w-2xl mx-auto">
          {[
            "Для початківців",
            "Для фахівців",
            "Для самодопомоги",
            "Для батьків",
          ].map((category, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full text-left bg-orange-500 text-white p-4 rounded-lg font-bold"
                onClick={() => toggleCategory(index)}
              >
                {category}
              </button>
              {openCategory === index && (
                <ul className="mt-2 bg-white text-black p-4 rounded-lg">
                  <li>
                    <Link
                      to={`/courses/${index}/1`}
                      className="block hover:underline"
                    >
                      Курс 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`/courses/${index}/2`}
                      className="block hover:underline"
                    >
                      Курс 2
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`/courses/${index}/3`}
                      className="block hover:underline"
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
