/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts}"],
  theme: {
    extend: {
      colors: {
        'navy': '#4B89AC',
        'navy-blue': '#103f79',
        'primary-button': '#F4CE14',
        'hover-button': '#D8B30F',
        gray: {
          50: '#eaeaea',
          100: '#bebebf',
          200: '#9e9ea0',
          300: '#727275',
          400: '#56565a',
          500: '#2c2c31',
          600: '#28282d',
          700: '#1f1f23',
          800: '#18181b',
          900: '#121215',
        },
      },
      fontSize: {
        xxs: '0.5rem'
      }
    }
  },
  plugins: [],
}

