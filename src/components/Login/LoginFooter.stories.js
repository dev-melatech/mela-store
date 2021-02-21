import LoginFooter from "@/components/Login/LoginFooter";
import AuthContainer from "@/components/Containers/AuthContainer";
export default {
  component: LoginFooter,
  title: "E-commerce/Login/Login Footer",
  argTypes: {
    products: { table: { expanded: true } }
  }
};

const Template = (args, { argTypes }) => ({
  components: { LoginFooter, AuthContainer },
  props: Object.keys(argTypes),
  template:
    "<auth-container>" + "<login-footer></login-footer>" + "</auth-container>",
  data() {
    return {};
  },
  methods: {}
});

export const Default = Template.bind({});
Default.args = {
  classes: ""
};
