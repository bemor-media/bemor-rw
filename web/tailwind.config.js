module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./web/src/**/*.js', './web/src/**/*.css', './web/src/**/*.html'],
  theme: {
    extend: {
      colors: {
        red: '#E63946',
        pale: '#F1FAEE',
        nile: '#A8DADC',
        night: '#457B9D',
        slate: '#1D3557',
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
