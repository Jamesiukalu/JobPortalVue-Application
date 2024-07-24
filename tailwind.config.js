/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,tsx,jsx}'],
  theme: {
    extend: {
      fontFamily:{
        sans:['Poppins', 'san-serif']
      },
      gridTemplateColumns:{
        '70/30' : '70% 28%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

