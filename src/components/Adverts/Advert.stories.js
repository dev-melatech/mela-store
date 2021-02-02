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
    singleViewImage: { control: null },
    tripleViewImages: { control: null },
    classes: { control: null }
  },
  parameters: {
    docs: {
      description: {
        component: '_```import Advert from "melatech_ui"```_'
      }
    }
  }
};

// We create a “template” of how args map to rendering
const Template = (args, { argTypes }) => ({
  components: { Advert },
  props: Object.keys(argTypes),
  template:
    '<Advert :single-view-image="singleViewImage" :triple-view-images="tripleViewImages" :view="view" :classes="classes"/>'
});

// Each story then reuses that template
export const Default = Template.bind({});
Default.args = {
  view: "single",
  singleViewImage: imageFile1,
  tripleViewImages: [imageFile2, imageFile2, imageFile2],
  classes: ""
};
