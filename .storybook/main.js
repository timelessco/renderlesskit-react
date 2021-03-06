const path = require("path");

module.exports = {
  core: { builder: "webpack5" },
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "storybook-addon-preview",
    {
      name: "@storybook/addon-essentials",
      options: {
        measure: false,
      },
    },
    "@storybook/addon-a11y",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
};
