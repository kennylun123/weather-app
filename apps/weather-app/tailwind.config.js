const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          default: '#1E213A',
          500: '#585676',
          800: '#100E1D',
        },
        'light-green': '#A9FF53',
        'light-yellow': '#FAFF00',
      },
    },
  },
  plugins: [],
};
