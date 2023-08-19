// tailwind.config.js
const nativewind = require('nativewind/tailwind');
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // gray: '#C9C9C9',
        gray: '#A5A5A5',
        lightgray: '#E6E6E6',
        black: '#212427',
        orange: '#FF8D28',
        white: '#FFFFFF',
      },
    },
  },
  plugins: [],
  presets: [nativewind],
};
