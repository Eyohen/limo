/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes : {
        fadeIn : {
          '0%' : { opacity: '0'},
          '100%': { opacity: '1'}
        }
      },
      animation: {
        fadeIn : 'fadeIn 4s cubic-bezier(0.470, 0.000, 0.745, 0.715) both'
      }
    },
  },
  plugins: [],
}