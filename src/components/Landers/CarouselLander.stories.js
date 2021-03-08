import CarouselLander from "@/components/Landers/CarouselLander";
export default {
  component: CarouselLander,
  title: "E-commerce/Landers/Carousel Lander",
  argTypes: {
    autoplay: { control: "boolean" },
    interval: { control: "number" },
    classes: { control: "text" },
    landerImages: { table: { expanded: true } }
  }
};

const Template = (args, { argTypes }) => ({
  components: {},
  props: Object.keys(argTypes),
  template:
    "<div>" +
    "<ms-navigation-bar></ms-navigation-bar>" +
    "<ms-carousel-lander :landerImages='landerImages' :interval='interval' :autoplay='autoplay'/>" +
    "</div>",
  data() {
    return {};
  },
  methods: {}
});

export const Default = Template.bind({});
Default.args = {
  classes: "",
  autoplay: false,
  interval: 3,
  landerImages: [
    {
      image: require("../../../static/images/lander/new_fill_2.png"),
      link: "/next-shop-1",
      dotsColor: "blue",
      linkText: "Shop Now",
      content: {
        title: "Comfortable Sofa with Great Comfort",
        body:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour"
      }
    },
    {
      image: require("../../../static/images/lander/new_fill_2.jpg"),
      link: "/next-shop-1",
      dotsColor: "blue",
      linkText: "Shop Now",
      content: {
        title: "Comfortable Sofa with Great Comfort",
        body:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour"
      }
    },
    {
      image: require("../../../static/images/lander/new_fill_4.jpg"),
      link: "/next-shop-1",
      dotsColor: "blue",
      linkText: "Shop Now",
      content: {
        title: "Comfortable Sofa with Great Comfort",
        body:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour"
      }
    },
    {
      image: require("../../../static/images/lander/new_fill_1.png"),
      link: "/next-shop-1",
      dotsColor: "blue",
      linkText: "Shop Now",
      content: {
        title: "Comfortable Sofa with Great Comfort",
        body:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour"
      }
    },
    {
      image: require("../../../static/images/lander/fill_2.jpg"),
      link: "/next-shop-1",
      dotsColor: "blue",
      linkText: "Shop Now",
      content: {
        title: "Comfortable Sofa with Great Comfort",
        body:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour"
      }
    },
    {
      image: require("../../../static/images/lander/fill_4.jpg"),
      link: "/next-shop-2",
      dotsColor: "yellow",
      linkText: "View Store"
    },
    {
      image: require("../../../static/images/lander/fill_1.jpg"),
      link: "/next-shop-3",
      dotsColor: "red",
      linkText: "Checkout"
    },
    {
      image: require("../../../static/images/lander/fill_3.jpg"),
      link: "/next-shop-4",
      dotsColor: "red",
      linkText: "Shop Now"
    }
  ]
};
