/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        peach: {
          100: '#FFE5D4',
          200: '#FFD1B8',
          300: '#FFBE9C',
          400: '#FFAA80',
          500: '#FF9664',
      },
    },
  },
  plugins: [],
}
}