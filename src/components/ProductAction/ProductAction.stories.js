import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);

import ProductActions from "@/components/ProductAction/ProductActions";
import testData from "../../../testData";

export default {
  component: ProductActions,
  title: "E-commerce/Product Actions",
  argTypes: {
    product: { control: "object" },
    classes: { control: "text" }
  }
};

// We create a “template” of how args map to rendering
const Template = (args, { argTypes }) => ({
  components: { ProductActions },
  props: Object.keys(argTypes),
  template: '<ProductActions  :product="product" :classes="classes"/>'
});

// Each story then reuses that template
export const Default = Template.bind({});
Default.args = {
  product: testData.setProduct(),
  classes: ""
};
