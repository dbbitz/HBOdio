/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      backgroundImage: {
        'home-desktop': "url('../assets/images/backgroundGOT.png')",
        'home-mobile': "url('../assets/images/background-mobile-GOT.png')",
        'banner-main': "url('../assets/images/bannerCatalog.svg')",
        'banner-got': "url('../assets/images/banners/got.png')",
        'banner-roma': "url('../assets/images/banners/roma.png')",
        'banner-sixFeetUnder': "url('../assets/images/banners/sixFeetUnder.png')",
        'banner-sopranos': "url('../assets/images/banners/sopranos.png')",
        'banner-sucession': "url('../assets/images/banners/sucession.png')",
        'banner-trueDetective': "url('../assets/images/banners/trueDetective.png')",
        'banner-logo': "url('../assets/images/logoHbo.svg')",
      },
      backgroundColor: {
        body: {
          100: 'linear-gradient(119.82deg, #010101 4.23%, #050114 30.17%, #23072D 58.7%, #130214 92.02%) ',
          200: '#170F29BF',
        },
      },
      colors: {
        brand: {
          100: '#B535F6',
          200: '#8D7DF1',
          300: '#02021C',
        },
        input: '#110B1B',
        btn: {
          primary: {
            base: '#B535F6',
            hover: '#C056F6',
            loading: '#B535F6E6',
            disabled: '#B535F680',
            text: '#FFFFFF',
          },
          secondary: {
            base: '#362E41',
            hover: '#4C415B',
            loading: '#362E41E6',
            disabled: '#362E4180',
            text: '#FFFFFF',
          },
        },
        title: '#FFFFFF',
        paragraph: '#CFCCD2',
        icon: '#FFFFFF',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
