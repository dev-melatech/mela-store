import ForgotPassword from "@/components/ForgotPassword/ForgotPassword";
import AuthContainer from "@/components/Containers/AuthContainer";
import { action } from "@storybook/addon-actions";

export default {
  component: ForgotPassword,
  title: "E-commerce/Forgot Password Form",
  argTypes: {
    classes: { control: "text" }
  }
};

const Template = (args, { argTypes }) => ({
  components: { ForgotPassword, AuthContainer },
  props: Object.keys(argTypes),
  template:
    "<auth-container>" +
    "<forgot-password ref='melastoreForgotPassword' " +
    "@send-password-reset-link='sendPasswordResetLinkAction'\n" +
    "@show-login-form='showLoginFormAction'\n" +
    ":classes='classes'/>" +
    "</auth-container>",
  data() {
    return {};
  },
  methods: {
    sendPasswordResetLinkAction: action("send-password-reset-link"),
    showLoginFormAction: action("show-login-form")
  }
});

export const Default = Template.bind({});
Default.args = {
  classes: ""
};
