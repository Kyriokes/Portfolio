/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cPlatinum: '#EAE6E5',
        cGreen: '#90A955',
        cTeal:"#1F7A8C",
        cBlack:"#1C2321",
      },
    },
  },
  plugins: [],
}

