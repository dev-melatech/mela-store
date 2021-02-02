// const path = require("path");

module.exports = {
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.md$/,
      use: [{ loader: "html-loader" }, { loader: "markdown-loader" }]
      // include: path.resolve(__dirname, "../")
    });
    return config;
  },
  stories: ["../../src/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-links",
    "@storybook/addon-controls",
    "@storybook/addon-actions",
    "storybook-readme/register"
  ]
};
