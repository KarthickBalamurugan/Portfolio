/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'pattern-grid-lg': `repeating-linear-gradient(
          45deg,
          rgba(255, 95, 31, 0.1) 0px,
          rgba(255, 95, 31, 0.1) 10px,
          rgba(255, 95, 31, 0.2) 10px,
          rgba(255, 95, 31, 0.2) 20px
        )`,
      },
    },
  },
  plugins: [],
} 