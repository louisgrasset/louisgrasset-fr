module.exports = {
  content: ["./src/**/*.{js,tsx,html}"],
  safelist: [
    "pink",
    "red",
    "yellow",
    "indigo",
    "green",
    "gray",
    "blue",
    "purple",
  ]
    .map((color) => {
      let classes = [];
      for (let count = 0; count < 9; count++) {
        classes.push(`bg-${color}-${900 - 100 * count}`);
        classes.push(`focus:ring-${color}-500`);
      }
      return classes;
    })
    .reduce((entry, merge) => [...merge, ...entry]),
  darkMode: "class", // or 'media' or 'class'
  theme: {
    filter: {
      // defaults to {}
      none: "none",
      companies: "grayscale(1) contrast(0) brightness(100)",
      "grayscale-10": "grayscale(0.1)",
      "grayscale-20": "grayscale(0.2)",
      "grayscale-30": "grayscale(0.3)",
      "grayscale-40": "grayscale(0.4)",
      "grayscale-50": "grayscale(0.5)",
      "grayscale-60": "grayscale(0.6)",
      "grayscale-70": "grayscale(0.7)",
      "grayscale-80": "grayscale(0.8)",
      "grayscale-90": "grayscale(0.9)",
      "grayscale-100": "grayscale(1)",
      "brightness-100": "brightness(100)",
      invert: "invert(1)",
      sepia: "sepia(1)",
      "blur-10": "blur(10px)",
      "blur-20": "blur(20px)",
      "blur-30": "blur(30px)",
      "blur-40": "blur(40px)",
      "blur-50": "blur(50px)",
      "blur-60": "blur(60px)",
      "blur-70": "blur(70px)",
      "blur-80": "blur(80px)",
      "blur-90": "blur(90px)",
    },
    minWidth: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
    },
    backdropFilter: {
      // defaults to {}
      none: "none",
      blur: "blur(20px)",
      "blur-5": "blur(5px)",
    },
    extend: {
      height: {
        "portfolio-2xl": "32.3rem",
        "portfolio-xl": "26.3rem",
        "portfolio-lg": "23.3rem",
        "portfolio-md": "31.75rem",
        "portfolio-sm": "28.6rem",
        "portfolio-xs": "24.7rem",
      },
      maxHeight: {
        projectslist: "calc(100% - 2.3rem)",
      },
      gridTemplateRows: {
        "portfolio-xs": "6.8rem 1fr",
        portfolio: "7.5rem 1fr",
      },
    },
  },
  variants: {
    filter: ["responsive"], // defaults to ['responsive']
    backdropFilter: ["responsive"], // defaults to ['responsive']
    extend: {
      opacity: ["dark"],
      filter: ["dark"],
      scale: ["group-hover"],
    },
  },
  plugins: [require("tailwindcss-filters"), require("@tailwindcss/forms")],
};
