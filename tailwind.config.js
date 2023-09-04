const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Exo', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "logo": "rgb(185,245,255)",
        "container": "rgb(85, 84, 84)",
        "container-hover": "rgb(100, 100, 100)",
        "project-pane": "rgb(120, 120, 120)",
      },
      boxShadow: {
        login: "0 0 1px 2px rgb(170, 170, 170)",
      }
    },
  },
  plugins: [],
}

