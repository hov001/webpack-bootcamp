const path = require("path");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "src/index.js"),
    analytics: path.resolve(__dirname, "src/analytics.js"),
  },
  output: {
    filename: "[id].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
};
