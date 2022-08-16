/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        'pop': ['Poppins'],
      },
      width: {
        '90': ['90%'],
        '50': ['50%'],

      },
      backgroundImage: {
        'bg1': ['url(B003.jpg)'],
        'bg2': ['url(B.jpg)'],
        'bg3': ['url(C.jpg)'],
      }
    },
  },
  plugins: [],
}
