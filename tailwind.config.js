/** @type {import('tailwindcss').Config} */
// import colors from "tailwindcss/colors";

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gowunBatang: ["GowunBatang", "serif"],
        noto: ["Noto Sans KR", "sans-serif"],
      },
      colors: {
        primary: "#1ea687",
        secondary: "#78bcbc",
        brown: "#825239",
        white: "#f9f9f9",
      },
    },
  },
  plugins: [],
};
