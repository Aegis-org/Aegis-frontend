module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif']
    },
    extend: {
      backgroundColor: {
        hrcolor: "#C4C4C4",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
