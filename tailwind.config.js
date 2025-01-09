
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Add the paths to your files
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Default font
        curly: ['Pacifico', 'cursive'], // Custom curly font
      },
    },
  },
  plugins: [],
};