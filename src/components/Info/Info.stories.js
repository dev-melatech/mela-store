import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import "@/assets/fonts/nunito/stylesheet.css";
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
  title: "E-commerce/Info",
  argTypes: {
    data: {
      table: {
        defaultValue: {
          summary: "See default json structure",
          detail:
            "[\n" +
            "    {\n" +
            '      title: "24/7 Customer Service",\n' +
            "      subText:\n" +
            '        "There are many variations of passages of Lorem Ipsum available, but the majority",\n' +
            "      icon: {\n" +
            '        class: "far",\n' +
            '        name: "money-bill-alt"\n' +
            "      }\n" +
            "    }\n" +
            "]"
        }
      },
      control: {
        type: null
      }
    },
    backgroundColor: { control: "color" },
    iconColor: { control: "color" }
  },
  parameters: {
    docs: {
      description: {
        component: '_```import Info from "melatech_ui"```_'
      }
    }
  }
};

// We create a “template” of how args map to rendering
const Template = (args, { argTypes }) => ({
  components: { Info },
  props: Object.keys(argTypes),
  template:
    '<Info  :data="data" :background-color="backgroundColor" :icon-color="iconColor" :classes="classes"/>'
});

export const Default = Template.bind({});

Default.args = {
  data: [
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
