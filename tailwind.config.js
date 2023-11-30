/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        purple: {
          900: "#8e44ad",
        },
        slate: {
          900: "#2c3e50",
        },
        stone: {
          300: "#EEEEEE", //background color light mode main
          400: "#888888", // text color
          500: "#fffc0230", // bg color light mode main
        },
        gray: {
          800: "#121212AA", // bg darkmode hover
          900: "#222222", // bg for main in dark mode
          950: "#121212", // bg on dark mode
        },
      },
      screens: {
        tablet: "1084px",
        phone: "560px",
      },
      fontFamily: {
        primaryFont: ["Nunito"],
        textFont: ["Inter"],
      },
    },
  },
  plugins: [],
};
