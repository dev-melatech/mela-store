import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);

import Advert from "@/components/Adverts/Advert";
import imageFile1 from "../../../static/images/adverts/1.jpg";
import imageFile2 from "../../../static/images/adverts/2.jpg";

export default {
  component: Advert,
  title: "E-commerce/Adverts",
  argTypes: {
    view: {
      control: {
        type: "select",
        options: ["single", "triple"]
      }
    },
    images: { control: "array" }
  }
};

// We create a “template” of how args map to rendering
const Template = (args, { argTypes }) => ({
  components: { Advert },
  props: Object.keys(argTypes),
  template: '<Advert :images="images" :view="view"/>'
});

// Each story then reuses that template
export const SingleView = Template.bind({});
SingleView.args = {
  view: "single",
  images: [imageFile1]
};

export const TripleView = Template.bind({});
TripleView.args = {
  view: "triple",
  images: [imageFile2, imageFile2, imageFile2]
};
