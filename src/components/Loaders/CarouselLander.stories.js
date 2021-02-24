import CarouselLander from "@/components/Loaders/CarouselLander";
// import { action } from "@storybook/addon-actions";

export default {
  component: CarouselLander,
  title: "E-commerce/Landers/Carousel Lander",
  argTypes: {
    classes: { control: "text" }
  }
};

const Template = (args, { argTypes }) => ({
  components: { CarouselLander },
  props: Object.keys(argTypes),
  template: "<carousel-lander></carousel-lander>",
  data() {
    return {};
  },
  methods: {}
});

export const Default = Template.bind({});
Default.args = {
  classes: ""
};
