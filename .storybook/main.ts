import type { StorybookConfig } from "@storybook/react-webpack5";
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config) => {
    const customConfig = { ...config };
    // use ts-loader to process typescript files
    customConfig.module.rules.push({
      test: /\.tsx?$/,
      use: "ts-loader",
      exclude: [/node_modules/]
    });
    // Configure webpack to allow using .js extension for typescript file imports.
    // You only need this if you're adding .js to relative imports in your project.
    // Refer: https://github.com/microsoft/TypeScript/issues/42813#issuecomment-942633095
    customConfig.resolve.extensionAlias = {
      ".js": [".tsx", ".ts", ".js"],
    };
    return customConfig;
  },
};
export default config;
