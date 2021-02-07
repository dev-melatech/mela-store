import SlideInBar from "@/components/NavBar/SlideInBar/SlideInBar";
import Usage from "@/components/NavBar/NavigationBarToggler/USAGE.md";
import { boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

export default {
  component: SlideInBar,
  title: "E-commerce/NavBar/Slide In Bar",
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
      codeTheme: "atom-dark"
    }
  }
};

// We create a “template” of how args map to rendering
const Template = () => ({
  components: { SlideInBar },
  props: {
    isOpen: {
      default: boolean("isOpen", false)
    }
  },
  template:
    '<SlideInBar title="Favourites" classes="melatech-ui-slide-in-bar-in" @click="onToggleMenu" > ' +
    "<template v-slot:cart-total>" +
    "<p>Here might be a page title KKFKFKFK</p>" +
    "</template>" +
    "</SlideInBar>",
  methods: {
    onToggleMenu: action("toggle-menu")
  }
});

// Each story then reuses that template
export const Favourites = Template.bind({});
