/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        'fromleft':'enterLeft 1s'
      },
      keyframes:{
        enterLeft:{
          '0%':{ transform:'scale(0.5)'},
          '100%':{ transform:'scale(1)'}
        }
      }
    },
  },
  plugins: [],
}