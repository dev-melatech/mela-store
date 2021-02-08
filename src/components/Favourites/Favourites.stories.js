import Favourites from "@/components/Favourites/Favourites";
import config from "@/config";
import { action } from "@storybook/addon-actions";

export default {
  component: Favourites,
  title: "E-commerce/Favourites",
  argTypes: {
    products: { table: { expanded: true } }
  }
};

const Template = (args, { argTypes }) => ({
  components: { Favourites },
  props: Object.keys(argTypes),
  template:
    "<b-container>" +
    "<favourites\n" +
    '  :classes="classes"\n' +
    '  :products="products"\n' +
    '  v-on:move-to-cart="moveItemToCart"\n' +
    '  v-on:delete-product="deleteProductFromFavourites"\n' +
    ">\n" +
    "</favourites>" +
    "</b-container>",
  data() {
    return {
      icon: ["fas", "trash-alt"]
    };
  },
  methods: {
    moveItemToCart: action("move-to-cart"),
    deleteProductFromFavourites: action("delete-product")
  }
});

export const Default = Template.bind({});
Default.args = {
  products: config.getProducts(5),
  classes: ""
};

export const EmptyFavourites = Template.bind({});
EmptyFavourites.args = {
  products: [],
  classes: ""
};
