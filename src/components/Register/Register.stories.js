import Register from "@/components/Register/Register";
import AuthContainer from "@/components/Containers/AuthContainer";
import { action } from "@storybook/addon-actions";

export default {
  component: Register,
  title: "E-commerce/Register Form",
  argTypes: {
    classes: { control: "text" }
  }
};

const Template = (args, { argTypes }) => ({
  components: { Register, AuthContainer },
  props: Object.keys(argTypes),
  template:
    "<auth-container>" +
    "<register ref='melastoreRegister' " +
    "@register='registerAction'\n" +
    "@show-login-form='showLoginFormAction'\n" +
    ":classes='classes'/>" +
    "</auth-container>",
  data() {
    return {};
  },
  methods: {
    registerAction: action("register"),
    showLoginFormAction: action("show-login-form")
  }
});

export const Default = Template.bind({});
Default.args = {
  classes: ""
};
