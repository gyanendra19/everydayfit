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
        "box-primary": "#FFB3C6",
        "box-secondary": "#FFCFD2",
        "button-primary": "#E76F51",
        "header-primary": "#D08282"
      },
      content: {
        everydayfit: "url('./assets/EVERYDAYFIT.png')",
        boxPink: "url('./assets/box-pink.png')",
        boxRed: "url('./assets/box-red.png')"
      }
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    }
  },
  plugins: [],
}

