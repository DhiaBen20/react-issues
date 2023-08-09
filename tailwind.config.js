/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['index.html', 'src/**/*.{ts,js,tsx,jsx}'],
  theme: {
    extend: {
        fontFamily: {
            sans: ['Inter', ...defaultTheme.fontFamily.sans]
        }
    },
  },
  plugins: [],
}

