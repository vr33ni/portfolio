/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './_layouts/**/*.html',
    './_includes/**/*.html',
    './*.html',
    './_posts/**/*.{html,md}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
