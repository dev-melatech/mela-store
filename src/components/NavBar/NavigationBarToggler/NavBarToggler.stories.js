import NavBarToggler from "@/components/NavBar/NavigationBarToggler/NavBarToggler";
import Usage from "@/components/NavBar/NavigationBarToggler/USAGE.md";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

export default {
  component: NavBarToggler,
  title: "E-commerce/NavBar/NavBar Toggler",
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
      content: "",
      sidebar: Usage,
      codeTheme: "atom-dark",
      includePropTables: [NavBarToggler]
    }
  },
  decorators: [withKnobs]
};

// We create a “template” of how args map to rendering
const Template = () => ({
  components: { NavBarToggler },
  props: {
    isOpen: {
      default: boolean("isOpen", false)
    }
  },
  template: '<NavBarToggler @click="onToggleMenu" />',
  methods: {
    onToggleMenu: action("toggle-menu")
  }
});

// Each story then reuses that template
export const Default = Template.bind({});
