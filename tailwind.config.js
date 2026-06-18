/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.njk',
    './src/**/*.md',
    './src/**/*.html',
  ],
  theme: {
    // Match the previous basscss breakpoints exactly (min-width).
    screens: {
      sm: '640px',
      md: '832px',
      lg: '1024px',
    },
    extend: {
      keyframes: {
        'hero-bounce': {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-30px)' },
          '60%': { transform: 'translateY(-20px)' },
        },
      },
      animation: {
        'hero-bounce': 'hero-bounce 4s infinite',
      },
    },
  },
  plugins: [],
}
