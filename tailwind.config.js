/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#E8715A',
          light: '#F0856E',
          dark: '#C95E48'
        },
        secondary: {
          DEFAULT: '#4A90A4',
          light: '#5EA3B6',
          dark: '#3A7A8C'
        },
        accent: {
          DEFAULT: '#4A90A4',
          light: '#5EA3B6',
          dark: '#3A7A8C'
        },
        coral: {
          DEFAULT: '#E8715A',
          light: '#F0856E',
          dark: '#C95E48'
        },
        dark: {
          DEFAULT: '#0B1324',
          lighter: '#121C2C',
          card: '#0E1628'
        },
        'brand-bg': '#0B1324',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      letterSpacing: {
        'tight-display': '-0.03em',
        'tighter-display': '-0.04em',
      },
      animation: {
        'blob': 'blob 8s infinite ease-in-out',
        'blob-slow': 'blob 12s infinite ease-in-out',
        'float': 'float 6s infinite ease-in-out',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1) rotate(0deg)' },
          '25%': { transform: 'translate(15px, -20px) scale(1.05) rotate(5deg)' },
          '50%': { transform: 'translate(-10px, 15px) scale(0.95) rotate(-5deg)' },
          '75%': { transform: 'translate(20px, 5px) scale(1.02) rotate(3deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
