/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media', // uses system preference
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
      }
    },
  },
  plugins: [],
}