/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      purpleCustom: "#7560a8",
      purpleCustomSecond: "#503d87",
      textColor: "#2e1e5d",
      slate: "#f8fafc",
      linkColor: "#bb7b7f",
      secondBg: "#e6dcdc",
      thirdBg: "#f5ecec",
      blue: "#197adb",
      red: "#c53049",
      orange: "#db5b3e",
      turquoise: "#84d6ca",
      yellow: "#f4ac53",
      grayCustom: "#575a5d",
      green: "#62d54b",

      rose: colors.rose,
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sofia)", ...fontFamily.sans],
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
