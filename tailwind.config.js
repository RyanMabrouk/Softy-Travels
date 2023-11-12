/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      MyFont: ['"Helvetica Neue"', "sans-serif"],
    },
    colors: {
      primary: "#d1f366",
      secondry: "#ec502c",
      background1: "#141627",
      background2: "#1c1f37",
      background3: "#2d3049",
      grey1: "#626577",
      grey2: "#d0d4e7",
      grey3: "#5f647e",
    },
  },
  plugins: [require("flowbite/plugin")],
};
