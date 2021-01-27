import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);

// import { withKnobs, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import TestButton from "@/components/Buttons/TestButton";

export default {
  component: TestButton,
  title: "Components/Button"
};

export const regular = () => ({
  components: { TestButton },
  template: "<TestButton :disabled='disabled' :text='text' @click='click'/>",
  props: {
    text: {
      default: String("Hello World")
    },
    methods: {
      click: action("onClick")
    }
  }
});
