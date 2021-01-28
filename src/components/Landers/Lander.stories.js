import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);

import imageFile1 from "../../../static/images/lander/1.jpg";
import imageFile2 from "../../../static/images/lander/2.jpg";
import imageFile3 from "../../../static/images/lander/2.jpg";

import Lander1 from "@/components/Landers/Lander1";

export default {
  component: Lander1,
  title: "E-commerce/Landers",
  argTypes: {
    img1: { control: "text" },
    img2: { control: "text" },
    img3: { control: "text" },
    classes: { control: "text" }
  }
};

const Template = (args, { argTypes }) => ({
  components: { Lander1 },
  props: Object.keys(argTypes),
  template:
    '<Lander1 :img1="img1" :img2="img2" :img3="img3" :classes="classes"/>'
});

// Each story then reuses that template
export const Regular = Template.bind({});
Regular.args = {
  img1: imageFile1,
  img2: imageFile2,
  img3: imageFile3,
  classes: ""
};
