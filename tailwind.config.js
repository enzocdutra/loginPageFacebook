/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'facebook-blue': '#1877F2',
        'facebook-gray':'#F0F2F5',
      },
      spacing:{
        '580': '580px',
        '380': '380px',
      }
    },
  },
  plugins: [],
}