/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'custom-black': 'rgba(0, 0, 0, 0.1)',
       
        'custom-red': '#dc2626',  // Example custom red color
      },
      animation:{
        'pulse-slow': ' 5s ease  ',
        'animate':'animate__fadeInLeft 3s linear',
      },
      gradientColorStops: theme => ({
        'start': '#a993fe',
        'end': '#7e61e7',
      }),
      letterSpacing: {
        'sp': '-0.1px',
      },
    },
  },
  plugins: [],
}

