/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      roboto: ["Roboto", "san-serif"],
      lilita: ["Lilita One", "san-serif"],
      lato: ["Lato", "san-serif"]
    }
  },
  plugins: [],
  darkMode: 'class',
  darkMode: 'media',
}