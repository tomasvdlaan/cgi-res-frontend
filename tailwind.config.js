const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["src/**/*.{ts,js,tsx,jsx}"],
  theme: {
    colors: {
      'red': '#E01937',
      'gray': '#8E8E93',
      'light-gray': '#EFEFEF',
      'white': '#FFFFFF',
      'purple': '#5236AB',
      'light-purple': '#EAEAF5',
    },
    fontFamily: {
      'SofiaProBold': ['Sofia Pro Bold', 'sans-serif'],
      'SofiaProRegular': ['Sofia Pro Regular', 'sans-serif', ...defaultTheme.fontFamily.sans],
      'SofiaProLight': ['Sofia Pro Light', 'sans-serif'],
      'body': ['Sofia Pro Bold', 'sans-serif'],
    },
    extend: {

    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("hocus", ["&:focus", "&:hover"]);
      addVariant("group-hocus", [":merge(.group):focus &", ":merge(.group):hover &"]);
      addVariant('peer-hocus', [':merge(.peer):focus ~ &', ':merge(.peer):hover ~ &']);
    }],
}

