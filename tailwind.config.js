/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,tsx,jsx}",
    "./src/sections/**/*.{js,ts,tsx,jsx}",
    "./src/pages/*.{js,ts,tsx,jsx}"
  ],
  theme: {
    extend: {
      height: {
        'screen/2': '50vh',
      }
    },
  },
  plugins: [],
}
