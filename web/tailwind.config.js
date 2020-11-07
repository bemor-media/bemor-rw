module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./web/src/**/*.js', './web/src/**/*.css', './web/src/**/*.html'],
  theme: {
    fontFamily: {
      sans: [
        '"Work Sans"',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
      ],
      serif: [
        '"Source Serif Pro"',
        'Georgia',
        'Cambria',
        '"Times New Roman"',
        'Times',
        'serif',
      ],
    },
    minHeight: {
      0: '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      full: '100%',
      'screen-1/4': '25vh',
      'screen-1/2': '50vh',
      'screen-3/4': '75vh',
      screen: '100vh',
    },
    extend: {
      colors: {
        red: '#E63946',
        pale: '#F1FAEE',
        nile: '#A8DADC',
        night: '#457B9D',
        slate: '#1D3557',
        dark: '#282828',
      },
      margin: {
        '-wrap': '-5.62vw',
        wrap: '5.62vw',
      },
      padding: {
        wrap: '5.62vw',
        'wrap-1/2': '2.81vw',
      },
    },
  },
  variants: {},
  plugins: [],
}
