/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-brown': '#1c1917',
        "custom-gray":"#262626",
        "custom-black":"#262626",
        "gray":"#57534e"
      },
      // screens: {
      //   'sm': '510px',  // 280px + 230px
      //   'md': '818px',  // 588px + 230px
      //   'lg': '1058px', // 828px + 230px
      //   'xl': '1366px', // 1136px + 230px
      //   '2xl': '1696px', // 1466px + 230px
      // },
      // maxWidth: {
      //   'custom-sm': '510px',
      //   'custom-md': '818px',
      //   'custom-lg': '1058px',
      //   'custom-xl': '1366px',
      //   'custom-2xl': '1696px',
      // },
    },
  },
  plugins: [],
}

