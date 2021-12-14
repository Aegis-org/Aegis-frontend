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
        "pry-accent": "#DBC6E0",
      },

      backgroundColor: {
        graydark: "#C4C4C4",
        graylight: "#E5E5E5",
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        "5x": "repeat(auto-fit, minmax(200px, 1fr))",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
