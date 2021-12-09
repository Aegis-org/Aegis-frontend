module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      montserrart: ["Montserrat", "sans-serif"],
    },
    letterSpacing: {
      widest: ".875rem",
    },

    extend: {
      colors: {
        "pry-clr": "#291A2D",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
