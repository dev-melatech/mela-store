import imageFile1 from "../../../static/images/lander/1.jpg";
import imageFile2 from "../../../static/images/lander/2.jpg";
import imageFile3 from "../../../static/images/lander/3.jpg";
import imageFile4 from "../../../static/images/lander/4.jpg";

import Lander from "@/components/Landers/Lander";

export default {
  component: Lander,
  title: "E-commerce/Landers/Lander",
  argTypes: {
    imageLink1: { control: "text" },
    imageLink2: { control: "text" },
    imageLink3: { control: "text" },
    imageLink4: { control: "text" },
    classes: { control: "text" }
  }
};

const Template = (args, { argTypes }) => ({
  components: { Lander },
  props: Object.keys(argTypes),
  template:
    '<Lander :image-link1="imageLink1" :image-link2="imageLink2" :image-link3="imageLink3" :image-link4="imageLink4" :classes="classes"/>'
});

export const Default = Template.bind({});
Default.args = {
  imageLink1: imageFile1,
  imageLink2: imageFile2,
  imageLink3: imageFile3,
  imageLink4: imageFile4,
  classes: ""
};
