/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 5s linear infinite', // Add slow spin animation
      },
    },
    screens: {
      'xs': {'max' : '640px'},
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      lightBg: "#E2E8F0",
      lightBgPrimary: "#F8FAFC",
      lightBgSecondary: "#0F172A",
    }
  },
  plugins: [],
}
