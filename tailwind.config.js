/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkgreen': '#122222',
        'gold': '#a89d7a',
        'lightgreen': '#2a4139',
        'lightblue': '#1b4544',
        'red': '#a61a17',
      },
      fontFamily: {
        title: ["FourSignature"],
        regular: ["MyriadProRegular"]
      }
    },
  },
  plugins: [],
}

