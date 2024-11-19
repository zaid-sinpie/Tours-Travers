/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        inactive: "#697565",
        active: "#3C3D37",
      },
      backgroundImage: {
        bg1: "url(/bg1.jpg)",
        bg2: "url(/bg2.jpg)",
        bg3: "url(/bg3.jpeg)",
        bg4: "url(/bg4.png)",
      },
    },
  },
  plugins: [],
};
