/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/**/*.{js,jsx,ts,tsx}', // Include your JS/TS/React files
      './public/index.html', // Include the HTML file
    ],
    theme: {
      extend: {
        colors: {
          primary: '#1D4ED8',
          secondary: '#9333EA',
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }
  