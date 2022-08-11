/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: { min: "320px", max: "768px" },
        // => @media (min-width: 640px) { ... }

        md: { min: "769px" },
        // => @media (min-width: 768px) { ... }

        lg: "1440px",
        // => @media (min-width: 1024px) { ... }

        xl: "1920px",
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
};
