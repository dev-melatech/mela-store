import NavBarToggle from "@/components/NavBar/NavigationBarToggle/NavbarToggle";
import { boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

export default {
  component: NavBarToggle,
  title: "E-commerce/NavBar/NavBar Toggler"
};

// We create a “template” of how args map to rendering
const Template = () => ({
  components: { NavBarToggle },
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
