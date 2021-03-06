import NavBarSearch from "@/components/NavBar/NavigationBarSearch/NavbarSearch";
export default {
  component: NavBarSearch,
  title: "E-commerce/NavBar/NavBar Search",
  argTypes: {
    placeholder: { control: null },
    classes: { control: null }
  },
  parameters: {
    docs: {
      description: {
        component: '_```import NavBarSearch from "melatech_ui"```_'
      }
    }
  }
};

// We create a “template” of how args map to rendering
const Template = (args, { argTypes }) => ({
  components: { NavBarSearch },
  props: Object.keys(argTypes),
  template: "<NavBarSearch/>"
});

// Each story then reuses that template
export const Default = Template.bind({});
Default.args = {};
