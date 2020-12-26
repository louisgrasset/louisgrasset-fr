module.exports = {
  purge: ['./src/**/*.{js,html}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    filter: { // defaults to {}
      'none': 'none',
      'grayscale': 'grayscale(1)',
      'invert': 'invert(1)',
      'sepia': 'sepia(1)',
      'blur': 'blur(5px)',
      'blur-30': 'blur(30px)',
      'blur-50': 'blur(50px)',
      'blur-70': 'blur(70px)',
      'blur-90': 'blur(90px)',
    },
    minWidth: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
    },
    backdropFilter: { // defaults to {}
      'none': 'none',
      'blur': 'blur(20px)',
    },
    extend: {},
  },
  variants: {
    filter: ['responsive'], // defaults to ['responsive']
    backdropFilter: ['responsive'], // defaults to ['responsive']
    extend: {},
  },
  plugins: [
    require('tailwindcss-filters'),
  ],
};
