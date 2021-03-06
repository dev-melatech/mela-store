import FooterNewsLetter from "@/components/FooterBar/FooterNewsLetter/FooterNewsLetter";
import FooterContainer from "@/components/Containers/FooterContainer";
import { action } from "@storybook/addon-actions";
export default {
  component: FooterNewsLetter,
  title: "E-commerce/Footer/NewsLetter ",
  argTypes: {
    label: { control: "text" },
    labelText: { control: "text" },
    classes: { control: "text" }
  }
};

// We create a “template” of how args map to rendering
const Template = (args, { argTypes }) => ({
  components: {
    FooterNewsLetter,
    FooterContainer
  },
  props: Object.keys(argTypes),
  template:
    "<FooterContainer>" +
    "<FooterNewsLetter " +
    ":label='label' " +
    ":label-text='labelText'" +
    " :classes='classes'" +
    " @subscribe='subscribe'" +
    "/>" +
    "</FooterContainer>",
  methods: {
    subscribe: action("subscribe")
  }
});

// Each story then reuses that template
export const Default = Template.bind({});
Default.args = {
  label: "Join Our NewsLetter",
  labelText:
    "Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from",
  classes: ""
};
