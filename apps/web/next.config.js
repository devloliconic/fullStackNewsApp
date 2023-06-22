const { i18n } = require("./next-i18next.config");
const path = require("path");

module.exports = {
  i18n,

  output: "standalone",

  reactStrictMode: true,

  compiler: {
    styledComponents: true,
  },

  outputFileTracingRoot: path.join(__dirname, "../../"),
};
