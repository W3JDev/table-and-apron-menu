/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ta-red': {
          50: '#fef2f2',
          100: '#fee2e2',
          800: '#991b1b',
          900: '#7f1d1d',
        },
      },
      fontFamily: {
        serif: ['Crimson Pro', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.2s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      screens: {
        'xs': '375px',
      },
      height: {
        'screen-safe': '100vh',
        'screen-dynamic': ['100vh', '100dvh'],
      },
    },
  },
  plugins: [],
}
