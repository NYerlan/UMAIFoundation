/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/globals.css',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ef72a3',
        secondary: '#f387b2',
        dark: '#545454',
        black: '#000000',
        white: '#ffffff',
      },
    },
  },
  plugins: [],
}
