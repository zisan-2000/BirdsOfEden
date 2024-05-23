/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      colors: {
        primary: "#0070f3",
      },
      keyframes: {
        rotate: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'spin-slow': 'rotate 5s linear infinite',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        md: "40px",
      },
    },
  },
  plugins: [],
};
