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
        secondaryBg: "#F8F8F8",
      },
      backgroundImage: {
        bg1: "url(/bg1.jpg)",
        bg2: "url(/bg2.jpg)",
        bg3: "url(/bg3.jpeg)",
        bg4: "url(/bg4.png)",
      },
      keyframes: {
        fadein: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeout: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        slideInFromBottom: {
          "0%": {
            transform: "translateY(15%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
      },
      animation: {
        fadein: "fadein 1s ease-in-out",
        fadeout: "fadeout 1s ease-in-out",
        slideInFromBottom: "slideInFromBottom .4s ease-in-out",
      },
    },
  },
  plugins: [],
};
