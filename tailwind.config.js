/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7C3AED',
          light: '#A78BFA',
          dark: '#5B21B6'
        },
        secondary: {
          DEFAULT: '#3B82F6',
          light: '#60A5FA',
          dark: '#1D4ED8'
        },
        accent: {
          DEFAULT: '#06B6D4',
          light: '#22D3EE',
          dark: '#0891B2'
        },
        dark: {
          DEFAULT: '#070B14',
          lighter: '#0F1420',
          card: '#0C1019'
        }
      },
      animation: {
        'blob': 'blob 8s infinite ease-in-out',
        'blob-slow': 'blob 12s infinite ease-in-out',
        'float': 'float 6s infinite ease-in-out',
      },
      keyframes: {
        blob: {
          '0%, 100%': {
            transform: 'translate(0, 0) scale(1) rotate(0deg)',
          },
          '25%': {
            transform: 'translate(15px, -20px) scale(1.05) rotate(5deg)',
          },
          '50%': {
            transform: 'translate(-10px, 15px) scale(0.95) rotate(-5deg)',
          },
          '75%': {
            transform: 'translate(20px, 5px) scale(1.02) rotate(3deg)',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
      },
    },
  },
  plugins: [],
}
