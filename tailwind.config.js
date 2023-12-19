/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif'],
        'play': ['Play', 'sans-serif'],
        'raleway': ['Raleway', 'sans-serif']
      },
      screens: {
        'max-md': { 'max': '767px' },
      }
    },
    plugins: [
      
    ],
  }
}