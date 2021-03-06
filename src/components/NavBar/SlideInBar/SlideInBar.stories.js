import SlideInBar from "@/components/NavBar/SlideInBar/SlideInBar";
import { boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

export default {
  component: SlideInBar,
  title: "E-commerce/NavBar/Slide In Bar"
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
