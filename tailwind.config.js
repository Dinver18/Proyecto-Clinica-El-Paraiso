/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'impact': ['Impact', 'sans-serif'],
        'sans': ['Roboto', 'sans-serif'],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {

        },
      },
    ],
  },
  plugins: [daisyui],
}

