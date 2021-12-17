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
    fontWeight: {
      hairline: 100,
      "extra-light": 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      "extra-bold": 800,
      black: 900,
    },
    width: {
      128: "32rem",
      wide: "60%",
      wid: "50%",
      high: "80px",
      least: "5%",
      leas: "3%",
    },
    height: {
      high: "40px",
    },
    display: {
      none: "none",
    },

    extend: {
      colors: {
        nude: "transparent",
        "pry-clr": "#291A2D",
        "pry-accent": "#DBC6E0",
        "sec-clr": "#AB97AF",
        "fade-bg": "#E5E5E5",
        "gray-color": "#C4C4C4",
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
