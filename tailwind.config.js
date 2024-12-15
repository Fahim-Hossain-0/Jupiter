/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        dropShadow:{
          '99xl' : '0 25px 50px -30px rgb(0 0 0 / 0.25)'
        }
      },
    },
    plugins: [],
  }