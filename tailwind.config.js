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
      boxShadow: {
        button: "0 20px 20px 0	rgba(255, 125, 26, 0.14)",
      },
      fontFamily: {
        kumbh: ["Kumbh Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
