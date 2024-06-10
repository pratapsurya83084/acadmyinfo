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
    },
  },
  plugins: [],
}

