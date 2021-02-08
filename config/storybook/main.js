// const path = require("path");

module.exports = {
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.md$/,
      use: [{ loader: "html-loader" }, { loader: "markdown-loader" }]
    });
    return config;
  },
  stories: ["../../src/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-links",
    "@storybook/addon-actions"
  ]
};
