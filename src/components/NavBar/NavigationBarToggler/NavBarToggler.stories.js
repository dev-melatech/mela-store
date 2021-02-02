import NavBarToggler from "@/components/NavBar/NavigationBarToggler/NavBarToggler";
import Usage from "@/components/NavBar/NavigationBarToggler/USAGE.md";
import { addons } from "@storybook/addons";

addons.setConfig({
  isFullscreen: true,
  showNav: true,
  showPanel: true,
  panelPosition: "bottom",
  sidebarAnimations: true,
  enableShortcuts: true,
  isToolshown: true,
  theme: undefined,
  selectedPanel: undefined,
  initialActive: "sidebar",
  showRoots: false
});

export default {
  component: NavBarToggler,
  title: "E-commerce/NavBar/NavBar Toggler",
  argTypes: {
    isOpen: { control: null },
    "toggle-menu": {
      table: {
        type: {
          summary: "See default json structure",
          detail:
            "[\n" +
            "    {\n" +
            '      social_key: "social_key",\n' +
            "      link:\n" +
            '        "https://social_link.com",\n' +
            "    }\n" +
            "]"
        }
      },
      description:
        "The following social keys are supported: " +
        "\n\n " +
        "'facebook', 'twitter', 'linkedin', 'google_plus', 'instagram'"
    }
  },
  parameters: {
    previewTabs: {
      "storybook/docs/panel": {
        hidden: true
      }
    },
    docs: {
      description: {
        component: '_```import NavBarToggler from "melatech_ui"```_'
      }
    },
    readme: {
      content: Usage,
      sidebar: Usage,
      codeTheme: "atom-dark",
      includePropTables: [NavBarToggler]
    }
  }
};

// We create a “template” of how args map to rendering
const Template = (args, { argTypes }) => ({
  components: { NavBarToggler },
  props: Object.keys(argTypes),
  template: '<NavBarToggler v-bind="$props" />'
});

// Each story then reuses that template
export const Default = Template.bind({});
Default.args = {
  "toggle-menu": "djngngf"
  // "toggle-jj": "djngngf"
  // "toggle-menu1": true
};
