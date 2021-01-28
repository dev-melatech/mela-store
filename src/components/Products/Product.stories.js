import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import "@/assets/css/default.css";
import "@/assets/css/color-scheme.css";

Vue.use(BootstrapVue);

import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faShoppingCart);
library.add(faEye);
library.add(faHeart);

Vue.component("font-awesome-icon", FontAwesomeIcon);

import testData from "../../../testData";

import Products from "@/components/Products/Products";

export default {
  component: Products,
  title: "E-commerce/Products",
  argTypes: {
    label: {
      control: {
        type: "select",
        options: ["featured", "new_arrivals", "best_deals"]
      }
    },
    products: { control: "array" }
  }
};

// We create a “template” of how args map to rendering
const Template = (args, { argTypes }) => ({
  components: { Products },
  props: Object.keys(argTypes),
  template: '<Products  :products="products" :label="label" />'
});

export const ProductsList = Template.bind({});
ProductsList.args = {
  label: "featured",
  products: testData.setFeaturedProducts()
};
