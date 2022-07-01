/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        orange: {
          100: "hsl(25, 100%, 94%)",
          500: "hsl(26, 100%, 55%)",
        },
        grayish_blue: {
          100: "hsl(223, 64%, 98%)",
          400: "hsl(220, 14%, 75%)",
          500: "hsl(219, 9%, 45%)",
          700: "hsl(220, 13%, 23%)",
          800: "hsl(220, 13%, 13%)",
        },
      },
      fontFamily: {
        kumbh: ["Kumbh Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
