import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import "@/assets/css/default.css";
import "@/assets/css/color-scheme.css";

Vue.use(BootstrapVue);

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faMoneyBillAlt } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faShippingFast } from "@fortawesome/free-solid-svg-icons";

library.add(faMoneyBillAlt);
library.add(faLock);
library.add(faShippingFast);

Vue.component("font-awesome-icon", FontAwesomeIcon);

import Info from "@/components/Info/Info";

export default {
  component: Info,
  title: "E-commerce/Components/Info",
  argTypes: {
    infoData: { control: "array" },
    backgroundColor: { control: "color" },
    iconColor: { control: "color" }
  }
};

// We create a “template” of how args map to rendering
const Template = (args, { argTypes }) => ({
  components: { Info },
  props: Object.keys(argTypes),
  template:
    '<Info  :info-data="infoData" :background-color="backgroundColor" :icon-color="iconColor"/>'
});

export const Default = Template.bind({});

Default.args = {
  infoData: [
    {
      title: "Money Back Guarantee",
      subText:
        "There are many variations of passages of Lorem Ipsum available, but the majority",
      icon: {
        class: "far",
        name: "money-bill-alt"
      }
    },
    {
      title: "Free Shipping",
      subText:
        "There are many variations of passages of Lorem Ipsum available, but the majority",
      icon: {
        class: "fas",
        name: "shipping-fast"
      }
    },
    {
      title: "Secure Payment",
      subText:
        "There are many variations of passages of Lorem Ipsum available, but the majority",
      icon: {
        class: "fas",
        name: "lock"
      }
    },
    {
      title: "24/7 Customer Service",
      subText:
        "There are many variations of passages of Lorem Ipsum available, but the majority",
      icon: {
        class: "far",
        name: "money-bill-alt"
      }
    }
  ],
  backgroundColor: "#ece5e5",
  iconColor: "#333"
};
