/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero": "url('/assets/laptop.jpg')"
      },
      fontFamily: {
        lato: ["lato", "sans-serif"], 
      }
    },
  },
  plugins: [],
}
