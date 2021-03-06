import Banner from "@/components/Banners/Banner";
import imageFile1 from "../../../static/images/adverts/1.jpg";
import imageFile2 from "../../../static/images/adverts/2.jpg";

export default {
  component: Banner,
  title: "E-commerce/Banners",
  argTypes: {
    banners: { control: "array" },
    classes: { control: "text" }
  }
};

// We create a “template” of how args map to rendering
const Template = (args, { argTypes }) => ({
  components: { Banner },
  props: Object.keys(argTypes),
  template: '<Banner :banners="banners"  :classes="classes"/>'
});

// Each story then reuses that template
export const Default = Template.bind({});
Default.args = {
  banners: [imageFile1],
  classes: ""
};

export const DoubleBanners = Template.bind({});
DoubleBanners.args = {
  banners: [imageFile2, imageFile2],
  classes: ""
};

export const TripleBanners = Template.bind({});
TripleBanners.args = {
  banners: [imageFile2, imageFile2, imageFile2],
  classes: ""
};
