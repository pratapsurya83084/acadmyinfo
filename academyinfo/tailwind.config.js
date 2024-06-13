/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-brown': '#27272a',
        "custom-gray":"#3f3f46"
      },
      screens: {
        'sm': '510px',  // 280px + 230px
        'md': '818px',  // 588px + 230px
        'lg': '1058px', // 828px + 230px
        'xl': '1366px', // 1136px + 230px
        '2xl': '1696px', // 1466px + 230px
      },
      maxWidth: {
        'custom-sm': '510px',
        'custom-md': '818px',
        'custom-lg': '1058px',
        'custom-xl': '1366px',
        'custom-2xl': '1696px',
      },
    },
  },
  plugins: [],
}

