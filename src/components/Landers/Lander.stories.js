import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);

// import { withKnobs, boolean } from "@storybook/addon-knobs";
// import { action } from "@storybook/addon-actions";
import Lander1 from "@/components/Landers/Lander1";

export default {
  component: Lander1,
  title: "Components/Landers"
};

export const regular = () => ({
  components: { Lander1 },
  template: "<Lander1 />"
});
