/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        orange:"#FF3811",
        smText: "#444",
        bigText:"#151515"
      }
    },
    
  },
  plugins: [
    require('daisyui'),
  ],
}

