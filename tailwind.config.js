/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'desktop-img': "url('./assets/home/background-home-desktop.jpg')",
        'tablet-img': "url('./assets/home/background-home-tablet.jpg')",
        'mobile-img': "url('./assets/home/background-home-mobile.jpg')"
      },
      fontFamily: {
        'bellefair' : ['Bellefair'],
        'barlow-condensed' : ['Barlow Condensed', 'sans-serif'],
        'barlow': ['Barlow']
      },
      colors : {
        darkGray : '#0B0D17',
        spaceGray : '#D0D6F9'

      }
    }
   
  },
  plugins: [],
}
