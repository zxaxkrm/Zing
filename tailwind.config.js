/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
        fontFamily:{
            headings: ['var(--font-playfair)'],
            wordings: ['var(--font-roboto)']
        }
    }
  }
}