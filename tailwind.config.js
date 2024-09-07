/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "35px",
        screens: {
          sm: "576px",
          md: "768px",
          lg: "1200px",
        },
      },
    },
  },
  plugins: [],
};