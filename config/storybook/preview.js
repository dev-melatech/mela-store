import "storybook-readme/register";
import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";
import { addDecorator, addParameters } from "@storybook/vue";
import { addReadme } from "storybook-readme/vue";
import { create } from "@storybook/theming";

const basicTheme = create({
  base: "light",
  brandTitle: "README addon",
  brandUrl: "https://github.com/tuchk4/storybook-readme",
  brandImage: null
});

export const parameters = {
  // layout: "centered",
  viewport: {
    viewports: MINIMAL_VIEWPORTS
  }
};

addParameters({
  options: {
    showPanel: true,
    panelPosition: "right",
    theme: basicTheme
    // theme: themes.dark,
  },
  readme: {
    // You can set the global code theme here.
    codeTheme: "atom-dark"
  },
  controls: { hideNoControlsWarning: true }
});

addDecorator(addReadme);
