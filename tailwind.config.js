/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "color-primary": "#16191e",
        "color-secondary": "#ff0000",
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        md: "50px",
      }
    }
  },
  plugins: [],
}