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

          "primary": "#001b68",

          "secondary": "#FFD700",

          "accent": "#FFF9DB",

          "neutral": "#D3D3D3",

          "base-100": "#ffffff",

          "info": "#00274D",

          "success": "#ffc122",

          "warning": "#ffffff",

          "error": "#ff0000",


        },
      },
    ],
  },
  plugins: [daisyui],
}

