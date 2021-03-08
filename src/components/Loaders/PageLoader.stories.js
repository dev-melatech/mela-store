import PageLoader from "@/components/Loaders/PageLoader";
import AuthContainer from "@/components/Containers/AuthContainer";

export default {
  component: PageLoader,
  title: "E-commerce/Loader/Page Loader",
  argTypes: {
    loading: { control: "boolean" },
    imgSrc: { control: "text" },
    animationClass: { control: "text" },
    classes: { control: "text" }
  }
};

const Template = (args, { argTypes }) => ({
  components: {},
  props: Object.keys(argTypes),
  template:
    "<ms-page-loader :classes='classes' :img-src='imgSrc' :loading='loading' :animation-class='animationClass' />",
  data() {
    return {};
  },
  methods: {}
});

export const Default = Template.bind({});
Default.args = {
  classes: "",
  animationClass: "fader",
  imgSrc: require("../../../static/images/logo.png"),
  loading: true
};
