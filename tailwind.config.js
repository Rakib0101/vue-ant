/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  theme: {
    extend: {
      fontFamily: {
        ibm :["IBM Plex Sans"]
      },
      colors:{
        primary: "#58B32B"
      }
    },
  },
  plugins: [],
  important: true,
};
