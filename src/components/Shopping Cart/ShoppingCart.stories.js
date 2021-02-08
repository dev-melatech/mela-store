import ShoppingCart from "@/components/Shopping Cart/ShoppingCart";
import config from "@/config";
import { action } from "@storybook/addon-actions";

export default {
  component: ShoppingCart,
  title: "E-commerce/Shopping Cart",
  argTypes: {
    products: { table: { expanded: true } }
  }
};

const Template = (args, { argTypes }) => ({
  components: { ShoppingCart },
  props: Object.keys(argTypes),
  template:
    "<b-container>\n" +
    "        <shopping-cart\n" +
    '          :products="products"\n' +
    '          :classes="classes"\n' +
    '          @increase-cart-quantity="increaseCartQuantity"\n' +
    '          @decrease-cart-quantity="decreaseCartQuantity"\n' +
    '          @delete-product="deleteProductFromCart"\n' +
    "        >\n" +
    "        </shopping-cart>\n" +
    "</b-container>",
  data() {
    return {
      icon: ["fas", "trash-alt"]
    };
  },
  methods: {
    deleteProductFromCart: action("delete-product"),
    increaseCartQuantity: action("increase-cart-quantity"),
    decreaseCartQuantity: action("decrease-cart-quantity")
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
