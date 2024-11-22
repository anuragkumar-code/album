/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        shake: 'shake 0.5s ease-in-out infinite',
      },
      keyframes: {
        shake: {
          '0%, 100%': {
            transform: 'translateX(0)',
          },
          '25%': {
            transform: 'translateX(-4px)',
          },
          '50%': {
            transform: 'translateX(4px)',
          },
          '75%': {
            transform: 'translateX(-4px)',
          },
        },
      },
    },
  },
  plugins: [],
};
