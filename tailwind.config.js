/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [{
      mytheme: {

        "primary": "#3498db",

        "secondary": "#e74c3c",

        "accent": "#27ae60",

        "neutral": "#333333",

        "base-100": "#f5f5f5",

        "info": "#4a7ae3",

        "success": "#25c19f",

        "warning": "#ee9817",

        "error": "#e9205c",
      },
    },]
  },
}

