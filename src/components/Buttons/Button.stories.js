import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);

// import { action } from "@storybook/addon-actions";
import TestButton from "@/components/Buttons/TestButton";

export default {
  component: TestButton,
  title: "Components/Button",
  argTypes: {
    label: { control: "text" },
    primary: { control: "boolean" }
  }
};

// We create a “template” of how args map to rendering
const Template = (args, { argTypes }) => ({
  components: { TestButton },
  props: Object.keys(argTypes),
  template: '<TestButton :primary="primary" :label="label" />'
});

// Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Primary"
};
