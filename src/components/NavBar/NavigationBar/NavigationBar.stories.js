import NavigationBar from "@/components/NavBar/NavigationBar/NavigationBar";

export default {
  component: NavigationBar,
  title: "E-commerce/NavBar/Navigation Bar",

  parameters: {
    docs: {
      description: {
        component: '_```import NavigationBar from "melatech_ui"```_'
      }
    }
  }
};

// We create a “template” of how args map to rendering
const Template = (args, { argTypes }) => ({
  components: { NavigationBar },
  props: Object.keys(argTypes),
  template: "<NavigationBar/>"
});

// Each story then reuses that template
export const Default = Template.bind({});
Default.args = {};
