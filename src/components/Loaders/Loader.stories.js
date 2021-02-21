import Loader from "@/components/Loaders/Loader";
import AuthContainer from "@/components/Containers/AuthContainer";
import { action } from "@storybook/addon-actions";

export default {
  component: Loader,
  title: "E-commerce/Loader",
  argTypes: {
    classes: { control: "text" }
  }
};

const Template = (args, { argTypes }) => ({
  components: { Loader, AuthContainer },
  props: Object.keys(argTypes),
  template:
    "<auth-container>" +
    "<div style='height: 600px'>" +
    "<loader/>" +
    "</div>" +
    "</auth-container>",
  data() {
    return {};
  },
  methods: {
    loginAction: action("login"),
    showRegisterFormAction: action("show-register-form"),
    showForgotPasswordFormAction: action("show-forgot-password-form")
  }
});

export const Default = Template.bind({});
Default.args = {
  classes: ""
};
