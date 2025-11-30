/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vine: {
          DEFAULT: '#2D5A27',
          light: '#4A7C44',
          dark: '#1A3817',
        },
        grape: {
          DEFAULT: '#6A1B9A',
          light: '#9C4DCC',
          dark: '#38006B',
        },
        earth: {
          DEFAULT: '#D4AF37', // Gold/Earth
          light: '#F5F5DC', // Beige
          dark: '#8B6914',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
