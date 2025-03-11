/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      colors: {
        'orange-verylight': '#f5c77e',
        'orange-light': '#e88504',
        'orange-strong': '#dc6601',
        'gray-light': '#191919',
        'gray-strong': '#101010'
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
    },
    fontFamily: {
      Noto: "Noto Sans, sans-serif",
      Josefin: "Josefin Sans, sans-serif",
      Sans: "sans-serif",
    },
    container: {
      center: true,
    }
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
    plugin(({ addBase, theme }) => {
      addBase({
        '.scrollbar': {
          scrollbarColor: '#dc6601 #ddd',
          scrollbarWidth: 'thin',
        },
        '.scrollbar::-webkit-scrollbar': {
          width: '5px',
        },
        '.scrollbar::-webkit-scrollbar-thumb': {
          backgroundColor: '#dc6601',
        },
        '.scrollbar::-webkit-scrollbar-track': {
          backgroundColor: '#ddd',
        },
      });
    }),
  ],
}

