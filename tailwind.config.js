module.exports = {
  purge: ['./src/**/*.{js,html}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    filter: { // defaults to {}
      'none': 'none',
      'grayscale': 'grayscale(1)',
      'invert': 'invert(1)',
      'sepia': 'sepia(1)',
      'blur-10': 'blur(10px)',
      'blur-20': 'blur(20px)',
      'blur-30': 'blur(30px)',
      'blur-40': 'blur(40px)',
      'blur-50': 'blur(50px)',
      'blur-60': 'blur(60px)',
      'blur-70': 'blur(70px)',
      'blur-80': 'blur(80px)',
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
      'blur-5': 'blur(5px)',
    },
    extend: {
      gridTemplateColumns: {
        '16-free': '16px minmax(max-content, 1fr)',
      },
    },
  },
  variants: {
    filter: ['responsive'], // defaults to ['responsive']
    backdropFilter: ['responsive'], // defaults to ['responsive']
    extend: {},
  },
  plugins: [
    require('tailwindcss-filters'),
    require('@tailwindcss/forms'),
  ],
};
