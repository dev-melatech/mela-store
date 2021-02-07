import "storybook-readme/register";
import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";
import { addDecorator, addParameters } from "@storybook/vue";
import { addReadme } from "storybook-readme/vue";
import { create } from "@storybook/theming";
import { withKnobs } from "@storybook/addon-knobs";

// import { addons } from "@storybook/addons";
//
// addons.setConfig({
//   isFullscreen: true,
//   showNav: true,
//   showPanel: true,
//   panelPosition: "bottom",
//   sidebarAnimations: true,
//   enableShortcuts: true,
//   isToolshown: true,
//   theme: undefined,
//   selectedPanel: undefined,
//   initialActive: "sidebar",
//   showRoots: false
// });

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
    panelPosition: "bottom",
    theme: basicTheme
    // theme: themes.dark,
  },
  previewTabs: {
    "storybook/docs/panel": {
      hidden: true
    }
  },
  readme: {
    // You can set the global code theme here.
    // codeTheme: "atom-dark"
  },
  controls: { hideNoControlsWarning: true, disabled: true }
});

addDecorator(addReadme);
addDecorator(withKnobs);
