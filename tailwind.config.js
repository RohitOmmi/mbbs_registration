/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: [
    flowbite.content(),
    "./index.html",
    "./node_modules/flowbite/**/*.js",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite.plugin(),
    require('flowbite/plugin')],
}