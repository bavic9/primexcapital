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
        blue: '#00A7DD',
        lightBlue: '#c4e7f3',
        borderColor: '#06A3DA',
      },
      fontFamily: {
        lato: "Lato",
        varela: 'Varela Round',
        prompt: "Prompt",
      },
    },
  },
  
  plugins: [],
}

