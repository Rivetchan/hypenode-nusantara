/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#0a1628',
        'dark-blue-light': '#0f2040',
        'dark-blue-lighter': '#1a3a6a',
        'cyan': '#4fc3f7',
        'cyan-dark': '#0288d1',
        'cyan-light': '#81d4fa',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
