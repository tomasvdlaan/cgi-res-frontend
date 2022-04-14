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
    extend: {},
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("hocus", ["&:focus", "&:hover"]);
      addVariant("group-hocus", [":merge(.group):focus &", ":merge(.group):hover &"]);
      addVariant('peer-hocus', [':merge(.peer):focus ~ &', ':merge(.peer):hover ~ &']);
    }],
}

