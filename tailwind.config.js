/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      inter: ["Inter"],
    },
    extend: {
      colors: {
        primary: "#48484A",
        secondary: "#00CCCC",
        button1: "#00CCCC",
        button2: "#7ED868",
        light: "#FAFAFA",
        mid: "#EBEBEB",
      },
      backgroundImage: {
        "lines-textures": "url('/assets/texture.png')",
      },
    },
  },
  plugins: [],
};
