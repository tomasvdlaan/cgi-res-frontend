module.exports = {
  content: ["src/**/*.{ts,js,tsx,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("hocus", ["&:focus", "&:hover"]);
      addVariant("group-hocus", [":merge(.group):focus &", ":merge(.group):hover &"]);
      addVariant('peer-hocus', [':merge(.peer):focus ~ &', ':merge(.peer):hover ~ &']);
    }],
}

