import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);

import imageFile1 from "../../../static/images/lander/1.jpg";
import imageFile2 from "../../../static/images/lander/2.jpg";
import imageFile3 from "../../../static/images/lander/2.jpg";

import Lander from "@/components/Landers/Lander";

export default {
  component: Lander,
  title: "E-commerce/Landers",
  argTypes: {
    img1: { control: "text" },
    img2: { control: "text" },
    img3: { control: "text" },
    classes: { control: "text" }
  }
};

const Template = (args, { argTypes }) => ({
  components: { Lander },
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
