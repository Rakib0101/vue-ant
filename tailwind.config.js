/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  important: true,
  theme: {
    extend: {
      fontFamily: {
        ibm :["IBM Plex Sans"]
      },
      colors:{
        primary: "#58B32B"
      },
      container: {
        big: '1320px',
        large: '991px',
        center: true,
      },
    },
  },
  plugins: [],
  important: true,
};
