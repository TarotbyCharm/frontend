/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#E5D9F9",
          200: "#CBB5F3",
          300: "#A388DC",
          400: "#7B61BA",
          500: "#4B338C",
          600: "#392578",
          700: "#291964",
          800: "#1C1051",
          900: "#120943",
        },
        secondary: {
          100: "#F3F3F3",
          200: "#E7E7E7",
          300: "#B8B8B8",
          400: "#727272",
          500: "#141414",
          600: "#110E0E",
          700: "#0E0A0A",
          800: "#0B0607",
          900: "#090305",
        },
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
