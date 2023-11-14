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
          400: "#888", // text color
          500: "#fffc0230", // bg color
        },
      },
    },
  },
  plugins: [],
};
