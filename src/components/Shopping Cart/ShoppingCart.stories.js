import SlideInBar from "@/components/NavBar/SlideInBar/SlideInBar";
import ShoppingCart from "@/components/Shopping Cart/ShoppingCart";
import Usage from "@/components/Shopping Cart/USAGE.md";
import { text, object } from "@storybook/addon-knobs";
import config from "@/config";

export default {
  component: SlideInBar,
  title: "E-commerce/Shopping Cart",
  parameters: {
    readme: {
      content: "",
      sidebar: Usage,
      codeTheme: "atom-dark"
    }
  }
};

// We create a “template” of how args map to rendering
export const Default = () => ({
  components: { SlideInBar, ShoppingCart },
  props: {
    products: {
      default: object("products", config.getProducts())
    },
    label: {
      default: text("label", "Cart")
    }
  },
  template:
    '<SlideInBar title="Cart" classes="melatech-ui-slide-in-bar-in" >      ' +
    "<template v-slot:shopping-cart>\n" +
    "        <shopping-cart-doc\n" +
    '          :products="products"\n' +
    '          :label="label"\n' +
    '          @proceed-to-checkout="proceedToCheckout"\n' +
    '          @empty-cart="emptyCart"\n' +
    '          @increase-cart-quantity="increaseCartQuantity"\n' +
    '          @decrease-cart-quantity="decreaseCartQuantity"\n' +
    '          @delete-product="deleteProductFromCart"\n' +
    "        >\n" +
    "          <!--item link slot-->\n" +
    '          <template v-slot:product-link="{ item }">\n' +
    '            <a :href="item.link" class="melatech-ui-product-title">{{\n' +
    "              item.title\n" +
    "            }}</a>\n" +
    "          </template>\n" +
    "        </shopping-cart-doc>\n" +
    "</template>" +
    "<template v-slot:shopping-cart-footer>" +
    "  <!--proceed to checkout button-->" +
    "<button\n" +
    'class="btn proceed-to-checkout--btn w-100"\n' +
    '@click="proceedToCheckout"\n' +
    ">\n" +
    "Proceed to checkout ($4,000)" +
    "</button>" +
    "<!--empty cart button-->\n" +
    "<button\n" +
    'class="btn empty-cart--btn w-100 mt-3"\n' +
    '@click="emptyCart"\n' +
    ">\n" +
    "<font-awesome-icon\n" +
    ':icon="icon"\n' +
    "/>\n" +
    "Empty Cart\n" +
    "</button>" +
    "</template>" +
    "</SlideInBar>",
  data() {
    return {
      icon: ["fas", "trash-alt"]
    };
  },
  methods: {
    emptyCart() {
      alert("Should empty cart");
    },
    deleteProductFromCart(product) {
      alert(`Delete item from cart. \n\n ${JSON.stringify(product)}`);
    },
    increaseCartQuantity(product) {
      alert(`Increase cart quantity. \n\n ${JSON.stringify(product)}`);
    },
    decreaseCartQuantity(product) {
      alert(`Decrease cart quantity. \n\n ${JSON.stringify(product)}`);
    },
    proceedToCheckout() {
      alert("Should proceed to check out");
    }
  }
});

export const EmptyShoppingCart = () => ({
  components: { SlideInBar, ShoppingCart },
  props: {
    products: {
      default: object("products", [])
    }
  },
  template:
    '<SlideInBar title="Cart" classes="melatech-ui-slide-in-bar-in" >      ' +
    "<template v-slot:shopping-cart>\n" +
    "        <shopping-cart-doc\n" +
    '          :products="products"\n' +
    '          label="Cart"\n' +
    '          @proceed-to-checkout="proceedToCheckout"\n' +
    '          @empty-cart="emptyCart"\n' +
    '          @increase-cart-quantity="increaseCartQuantity"\n' +
    '          @decrease-cart-quantity="decreaseCartQuantity"\n' +
    '          @delete-product="deleteProductFromCart"\n' +
    "        >\n" +
    "          <!--item link slot-->\n" +
    '          <template v-slot:product-link="{ item }">\n' +
    '            <a :href="item.link" class="melatech-ui-product-title">{{\n' +
    "              item.title\n" +
    "            }}</a>\n" +
    "          </template>\n" +
    "        </shopping-cart-doc>\n" +
    "</template>" +
    "<template " +
    " v-slot:shopping-cart-footer>" +
    "  <!--proceed to checkout button-->" +
    "<button\n" +
    'v-if="products.length!==0"\n' +
    'class="btn proceed-to-checkout--btn w-100"\n' +
    '@click="proceedToCheckout"\n' +
    ">\n" +
    "Proceed to checkout ($4,000)" +
    "</button>" +
    "<button\n" +
    "v-else\n" +
    'class="btn proceed-to-checkout--btn w-100"\n' +
    '@click="proceedToCheckout"\n' +
    ">\n" +
    "Continue Shopping" +
    "</button>" +
    "<!--empty cart button-->\n" +
    "<button\n" +
    'v-if="products.length!==0"\n' +
    'class="btn empty-cart--btn w-100 mt-3"\n' +
    '@click="emptyCart"\n' +
    ">\n" +
    "<font-awesome-icon\n" +
    ':icon="icon"\n' +
    "/>\n" +
    "Empty Cart\n" +
    "</button>" +
    "</template>" +
    "</SlideInBar>",
  data() {
    return {
      icon: ["fas", "trash-alt"]
    };
  },
  methods: {
    emptyCart() {
      alert("Should empty cart");
    },
    deleteProductFromCart(product) {
      alert(`Delete item from cart. \n\n ${JSON.stringify(product)}`);
    },
    increaseCartQuantity(product) {
      alert(`Increase cart quantity. \n\n ${JSON.stringify(product)}`);
    },
    decreaseCartQuantity(product) {
      alert(`Decrease cart quantity. \n\n ${JSON.stringify(product)}`);
    },
    proceedToCheckout() {
      alert("Should proceed to check out");
    }
  }
});
