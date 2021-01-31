import FooterContactUs from "@/components/FooterContactUs/FooterContactUs";
export default {
  component: FooterContactUs,
  title: "E-commerce/Footer/Contact",
  argTypes: {
    phones: { control: null },
    emails: { control: null },
    address: { control: null },
    label: { control: null },
    classes: { control: null }
  },
  parameters: {
    docs: {
      description: {
        component: '_```import FooterContactUs from "melatech_ui"```_'
      }
    }
  }
};

// We create a “template” of how args map to rendering
const Template = (args, { argTypes }) => ({
  components: { FooterContactUs },
  props: Object.keys(argTypes),
  template: "<FooterContactUs/>"
});

// Each story then reuses that template
export const Default = Template.bind({});
