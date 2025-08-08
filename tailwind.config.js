module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  prefix: '',
  important: true,
  theme: {
    extend: {
      colors: {
        threethrees: '#333'
      },
      margin: {
        '0.5': '0.125rem'
      }
    }
  },
  variants: {},
  corePlugins: {},
  plugins: []
};
