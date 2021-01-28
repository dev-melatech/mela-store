import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);

import Advert1 from "@/components/Adverts/Advert1";
// import Advert2 from "@/components/Adverts/Advert2";
import imageFile1 from "../../../static/images/adverts/1.jpg";
// import imageFile2 from "../../../static/images/adverts/2.jpg";

export default {
  component: Advert1,
  title: "E-commerce/Adverts"
};

// We create a “template” of how args map to rendering
const Template1 = (args, { argTypes }) => ({
  components: Advert1,
  props: Object.keys(argTypes),
  template: '<Advert1 :img="img1"/>'
});

// const Template2 = (args, { argTypes }) => ({
//   components: Advert2,
//   props: Object.keys(argTypes),
//   template: '<Advert2 :img1="img1" :img2="img2" :img3="img3"/>'
// });

// Each story then reuses that template
export const SingleView = Template1.bind({});
SingleView.args = {
  img1: imageFile1
};

// export const TrippleView = Template2.bind({});
// TrippleView.args = {
//   img1: imageFile2,
//   img2: imageFile2,
//   img3: imageFile2
// };
