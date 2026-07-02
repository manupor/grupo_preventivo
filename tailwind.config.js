/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          900: '#021C8B',
          800: '#03145E',
          700: '#1B52D7',
          600: '#3B6FE6',
          500: '#6A93ED',
          100: '#C0C7D3',
          50: '#E3E7ED',
        },
        gp: {
          resolution: '#021C8B',
          newcar: '#1B52D7',
          slate: '#767888',
          lavender: '#C0C7D3',
          chinese: '#13111F',
        },
        energy: {
          500: '#1B52D7',
          600: '#021C8B',
        },
        dark: {
          DEFAULT: '#13111F',
          900: '#13111F',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
