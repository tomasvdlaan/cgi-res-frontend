// const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["src/**/*.{ts,js,tsx,jsx}"],
  theme: {
    extend: {
    //   colors: {
    //     red: "#E01937",
    //     gray: "#898989",
    //     "light-gray": "#D8D8D9",
    //     "white-gray": "#EFEFEF",
    //     white: "#FFFFFF",
    //     purple: "#5236AB",
    //     "light-purple": "#EAEAF5",
    //   },
    //   fontFamily: {
    //     SofiaProBold: ["Sofia Pro Bold", "sans-serif"],
    //     SofiaProRegular: ["Sofia Pro Regular", "sans-serif"],
    //     SofiaProLight: ["Sofia Pro Light", "sans-serif"],
    //     body: ["Sofia Pro Bold", "sans-serif"],
    //   },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("hocus", ["&:focus", "&:hover"]);
      addVariant("group-hocus", [
        ":merge(.group):focus &",
        ":merge(.group):hover &",
      ]);
      addVariant("peer-hocus", [
        ":merge(.peer):focus ~ &",
        ":merge(.peer):hover ~ &",
      ]);
    },
  ],
};
