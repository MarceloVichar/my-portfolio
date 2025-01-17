import daisyui from 'daisyui'
import { dark, light } from 'daisyui/src/theming/themes'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
  ],

  theme: {
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
    },
  },

  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: [
      {
        dark: {
          ...dark,
          'primary': '#00FFFF',
          'base-300': '#2A323C',
          'accent': '#fff',
        },
        light: {
          ...light,
          primary: '#00FFFF',
          accent: '#000',
        },
      },
    ],
  },
}
