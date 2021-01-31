import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);

import HomePage from "@/components/Pages/HomePage/HomePage";
import imageFile1 from "../../../../static/images/lander/1.jpg";
import imageFile2 from "../../../../static/images/lander/2.jpg";
import imageFile3 from "../../../../static/images/lander/2.jpg";

import advertImageFile1 from "../../../../static/images/adverts/1.jpg";
import advertImageFile2 from "../../../../static/images/adverts/2.jpg";
import testData from "../../../../testData";

// import Lander from "@/components/Landers/Lander";

export default {
  component: HomePage,
  title: "E-commerce/Pages/Home Page",
  argTypes: {
    landerConfig: { control: "object" },
    productsData: { control: "object" },
    advertConfig: { control: "object" },
    classes: { control: "text" }
  }
};

const Template = (args, { argTypes }) => ({
  components: { HomePage },
  props: Object.keys(argTypes),
  template:
    '<HomePage :lander-config="landerConfig"  :products-data="productsData" :advert-config="advertConfig"/>'
});

// Each story then reuses that template
export const Regular = Template.bind({});
Regular.args = {
  landerConfig: {
    view: "default",
    images: [imageFile1, imageFile2, imageFile3],
    classes: ""
  },
  productsData: {
    featured: {
      products: testData.setFeaturedProducts(),
      classes: ""
    },
    new_arrivals: {
      products: testData.setFeaturedProducts(),
      classes: ""
    },
    best_deals: {
      products: testData.setFeaturedProducts(),
      classes: ""
    }
  },
  advertConfig: {
    advert1: {
      view: "single",
      images: [advertImageFile1]
    },
    advert2: {
      view: "triple",
      images: [advertImageFile2, advertImageFile2, advertImageFile2]
    }
  },
  classes: ""
};
