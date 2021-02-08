import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";
import { addParameters } from "@storybook/vue";
// import { addReadme } from "storybook-readme/vue";
// import { create } from "@storybook/theming";
// import { withKnobs } from "@storybook/addon-knobs";

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

export const parameters = {
  // layout: "centered",
  viewport: {
    viewports: MINIMAL_VIEWPORTS
  }
};

addParameters({
  options: {
    showPanel: true,
    panelPosition: "right"
  },
  readme: {
    // You can set the global code theme here.
    // codeTheme: "atom-dark"
  },
  controls: { hideNoControlsWarning: true }
});

// addDecorator(addReadme);
// addDecorator(withKnobs);
