// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Include your HTML entry point
    "./src/**/*.{js,ts,jsx,tsx}", // Include all your source files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
