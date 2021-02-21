import Login from "@/components/Login/Login";
import AuthContainer from "@/components/Containers/AuthContainer";
import { action } from "@storybook/addon-actions";

export default {
  component: Login,
  title: "E-commerce/Login Form",
  argTypes: {
    classes: { control: "text" }
  }
};

const Template = (args, { argTypes }) => ({
  components: { Login, AuthContainer },
  props: Object.keys(argTypes),
  template:
    "<auth-container>" +
    "<login ref='melastoreLogin' " +
    "@login='loginAction'\n" +
    "@show-register-form='showRegisterFormAction'\n" +
    "@show-forgot-password-form='showForgotPasswordFormAction'\n" +
    ":classes='classes'/>" +
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
