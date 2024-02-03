/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '18': '4.5rem',
      },
      screens: {

      'laptop': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'tablet': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'mobile': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
},
  },
  plugins: [],
}
}
