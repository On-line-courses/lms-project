import React from "react";
import facebookIcon from "../assets/images/facebook.svg";
import telegramIcon from "../assets/images/telegram.svg";
import youtubeIcon from "../assets/images/youtube.svg"; // Виправлена назва файлу
import emailIcon from "../assets/images/email.svg";

const Footer = () => {
  return (
    <footer className="bg-[#333333] text-[#f4f4f4] w-full h-[100px] flex flex-col items-center justify-center">
      <div className="flex space-x-6">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={facebookIcon} alt="Facebook" className="w-6 h-6" />
        </a>
        <a
          href="https://t.me/your_telegram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={telegramIcon} alt="Telegram" className="w-6 h-6" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <img src={youtubeIcon} alt="YouTube" className="w-6 h-6" />
        </a>
        <a href="mailto:1psychologist.online@gmail.com">
          <img src={emailIcon} alt="Gmail" className="w-6 h-6" />
        </a>
      </div>
      <p className="mt-2 text-sm">&copy; 2025 Баланс. Всі права захищені.</p>
    </footer>
  );
};

export default Footer;
