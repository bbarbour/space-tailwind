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
        'mobile-img': "url('./assets/home/background-home-mobile.jpg')",
        'tour-desktop': "url('./assets/destination/background-destination-desktop.jpg')",
        'tour-tablet': "url('./assets/destination/background-destination-tablet.jpg')",
        'tour-mobile': "url('./assets/destination/background-destination-mobile.jpg')",
        'crew-mobile': "url('./assets/crew/background-crew-mobile.jpg')",
        'crew-tablet': "url('./assets/crew/background-crew-tablet.jpg')",
        'crew-desktop': "url('./assets/crew/background-crew-desktop.jpg')",
        'tech-mobile': "url('./assets/technology/background-technology-mobile.jpg')",
        'tech-tablet': "url('./assets/technology/background-technology-tablet.jpg')",
        'tech-desktop': "url('./assets/technology/background-technology-desktop.jpg')"
        
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
