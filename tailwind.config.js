/** @type {import('tailwindcss').Config} */
export default {
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
          300: "#EEEEEE", //background color
          400: "#888888", // text color
          500: "#fffc0230", // bg color
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
