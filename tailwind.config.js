/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        sm: "0px",
        md: "512px",
        lg: "804px",
        xl: "1140px"
      },
      colors:{
        primary: "#e99312",
        secondary: "#4081a2",
      },
      padding:{
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
        xxl: "5rem",
      },
      fontFamily: {
        poppins:["poppins", "sans-serif"]
      },
    },
  },
  plugins: [],
}

