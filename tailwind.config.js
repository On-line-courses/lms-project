/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        primary: "#0866ff", // Синій для назв курсів
        button: "#ffa500", // Помаранчовий для кнопок
        textLight: "#f4f4f4", // Білий для тексту
        textDark: "#333333", // Чорний для тексту
      },
      fontFamily: {
        title: ["Pattaya", "sans-serif"], // Для назв курсів
        body: ["Open Sans", "Arial", "sans-serif"], // Для заголовків і основного тексту
      },
    },
  },
  plugins: [],
};

