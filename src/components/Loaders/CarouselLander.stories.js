import CarouselLander from "@/components/Loaders/CarouselLander";
// import { action } from "@storybook/addon-actions";
import NavigationBar from "@/components/NavBar/NavigationBar/NavigationBar";
export default {
  component: CarouselLander,
  title: "E-commerce/Landers/Carousel Lander",
  argTypes: {
    autoplay: { control: "boolean" },
    interval: { control: "number" },
    classes: { control: "text" }
  }
};

const Template = (args, { argTypes }) => ({
  components: { CarouselLander, NavigationBar },
  props: Object.keys(argTypes),
  template:
    "<div><navigation-bar></navigation-bar><carousel-lander :interval='interval' :autoplay='autoplay'/></div>",
  data() {
    return {};
  },
  methods: {}
});

export const Default = Template.bind({});
Default.args = {
  classes: "",
  autoplay: false,
  interval: 3
};
