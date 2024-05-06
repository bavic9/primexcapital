/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '979px',
      xl: '1440px'
    },


    extend: {
      colors: {
        blue: '#0041be', 
        // #00A7DD
        lightBlue: '#4987ff',
        borderColor: '#06A3DA',
      },
      fontFamily: {
        lato: "Lato",
        varela: 'Varela Round',
        prompt: "Prompt",
        josefin: "Josefin Sans",
      },
    },
  },
  
  plugins: [],
}

