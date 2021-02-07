import CountCircle from "@/components/NavBar/Helpers/CountCircle";
export default {
  component: CountCircle,
  title: "E-commerce/NavBar/Helpers/Count Circle",
  argTypes: {
    value: { control: null },
    backgroundColor: { control: null }
  },
  parameters: {
    docs: {
      description: {
        component: '_```import CountCircle from "melatech_ui"```_'
      }
    }
  }
};

// We create a “template” of how args map to rendering
const Template = (args, { argTypes }) => ({
  components: { CountCircle },
  props: Object.keys(argTypes),
  template: "<div class='mt-5'><CountCircle/></div>"
});

// Each story then reuses that template
export const Default = Template.bind({});
Default.args = {};
