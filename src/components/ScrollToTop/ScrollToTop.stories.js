import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);

import { library } from "@fortawesome/fontawesome-svg-core";
import { faLongArrowAltUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faLongArrowAltUp);

Vue.component("font-awesome-icon", FontAwesomeIcon);

import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";

export default {
  component: ScrollToTop,
  title: "E-commerce/Scroll To Top",
  argTypes: {}
};

// We create a “template” of how args map to rendering
const Template = (args, { argTypes }) => ({
  components: { ScrollToTop },
  props: Object.keys(argTypes),
  template:
    "<div style='padding:30px;height: 1500px;background-color: peachpuff;text-align: center'>Scroll Down<ScrollToTop/></div>"
});

// Each story then reuses that template
export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  controls: { hideNoControlsWarning: true, disabled: true }
};
