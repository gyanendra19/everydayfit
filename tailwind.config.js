/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "text-primary": "#FB6F92",
        "box-primary": "#FFD7E1",
        "box-secondary": "#FFCFD2",
        "button-primary": "#E76F51",
        "header-primary": "#B14343"
      },
      content: {
        everydayfit: "url('./assets/EVERYDAYFIT.png')",
        boxPink: "url('./assets/box-pink.png')",
        boxRed: "url('./assets/box-red.png')",
        CalcNameBox: "url('./assets/calculatorNames.png')",
        resultsBox: "url('./assets/results.png')",
        mobileNameBox: "url('./assets/mobile-name.png')",
        mobileResultsBox: "url('./assets/mobile-results.png')",
        utilOne: "url('./assets/utils-one.png')",
        utilTwo: "url('./assets/utils-two.png')",
      },
      keyframes: {
        "alert": {
          '0%': {transform: "translateY(-100px)"},
          '5%': {transform: "translateY(0)"},
          '90%': {opacity: 1},
          '100%': {opacity: 0}
        }
      },
      animation: {
        "alert-animate": "alert 4s ease-out forwards"
      }
    },
    screens: {
      xs: "320px",
      sm: "768px",
      md: "1060px",
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

