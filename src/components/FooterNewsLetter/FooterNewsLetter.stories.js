import FooterNewsLetter from "@/components/FooterNewsLetter/FooterNewsLetter";

export default {
  component: FooterNewsLetter,
  title: "E-commerce/Footer/NewsLetter ",
  argTypes: {
    label: { control: null },
    labelText: { control: null }
  },
  parameters: {
    docs: {
      description: {
        component: '_```import FooterNewsLetter from "melatech_ui"```_'
      }
    }
  }
};

// We create a “template” of how args map to rendering
const Template = (args, { argTypes }) => ({
  components: {
    FooterNewsLetter
  },
  props: Object.keys(argTypes),
  template: "<FooterNewsLetter/>"
});

// Each story then reuses that template
export const Default = Template.bind({});
