import daisyui from "daisyui"
import {dark} from 'daisyui/src/theming/themes'

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './components/**/*.{vue,js}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
    ],

    plugins: [
        daisyui
    ],
    daisyui: {
        themes: [
            {
                dark: {
                    ...dark,
                primary: '#00FFFF',
                }
            }
        ]
    }
}

