/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Configure your color palette here

        background:'#121212',
        red:'#B00020',
        green:'#365314',
        gray:'#282828',
        blue:'#1e3a8a',
        purple:'#624aa1',

      },
    },
  },
  plugins: [],
}