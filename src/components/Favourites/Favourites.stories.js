import SlideInBar from "@/components/NavBar/SlideInBar/SlideInBar";
import Favourites from "@/components/Favourites/Favourites";
import Usage from "@/components/Favourites/Usage.md";
import { text, object } from "@storybook/addon-knobs";
import config from "@/config";

export default {
  component: SlideInBar,
  title: "E-commerce/Favourites",
  parameters: {
    readme: {
      content: "",
      sidebar: Usage,
      codeTheme: "atom-dark"
    }
  }
};

export const Default = () => ({
  components: { SlideInBar, Favourites },
  props: {
    products: {
      default: object("products", config.getProducts())
    },
    label: {
      default: text("label", "Favourites")
    }
  },
  template:
    '<SlideInBar :title="label" classes="melatech-ui-slide-in-bar-in">      ' +
    "<template v-slot:favourites>\n" +
    "        <favourites\n" +
    '          :products="products"\n' +
    '          :label="label"\n' +
    '          @move-to-cart="moveToCart"\n' +
    '          @delete-product="deleteProductFromCart"\n' +
    "        >\n" +
    "          <!--item link slot-->\n" +
    '          <template v-slot:product-link="{ item }">\n' +
    '            <a :href="item.link" class="melatech-ui-product-title">{{\n' +
    "              item.title\n" +
    "            }}</a>\n" +
    "          </template>\n" +
    "        </fav>\n" +
    "</template>" +
    "<template v-slot:favourites-footer>" +
    "     <!--empty cart button-->\n" +
    "     <button\n" +
    '     class="btn empty-cart--btn w-100"\n' +
    '     @click="emptyCart"\n' +
    "     >\n" +
    "         <font-awesome-icon\n" +
    '           :icon="icon"\n' +
    "         />\n" +
    "         Empty Cart\n" +
    "      </button>" +
    "</template>" +
    "</SlideInBar>",
  data() {
    return {
      icon: ["fas", "trash-alt"]
    };
  },
  methods: {
    moveToCart(product) {
      alert(`Move item to cart. \n\n ${JSON.stringify(product)}`);
    },
    deleteProductFromCart(product) {
      alert(`Delete item from favourites. \n\n ${JSON.stringify(product)}`);
    }
  }
});

export const EmptyFavourites = () => ({
  components: { SlideInBar, Favourites },
  props: {
    products: {
      default: object("products", [])
    },
    label: {
      default: text("label", "Favourites")
    }
  },
  template:
    '<SlideInBar :title="label" classes="melatech-ui-slide-in-bar-in">      ' +
    "<template v-slot:favourites>\n" +
    "        <favourites\n" +
    '          :products="products"\n' +
    '          :label="label"\n' +
    '          @move-to-cart="moveToCart"\n' +
    '          @delete-product="deleteProductFromCart"\n' +
    "        >\n" +
    "          <!--item link slot-->\n" +
    '          <template v-slot:product-link="{ item }">\n' +
    '            <a :href="item.link" class="melatech-ui-product-title">{{\n' +
    "              item.title\n" +
    "            }}</a>\n" +
    "          </template>\n" +
    "        </fav>\n" +
    "</template>" +
    "<template v-slot:favourites-footer>" +
    "     <!--proceed to checkout button-->" +
    "     <button\n" +
    '       v-if="products.length === 0"\n' +
    '       class="btn proceed-to-checkout--btn w-100"\n' +
    '       @click="proceedToCheckout"\n' +
    "     >\n" +
    "             Continue Shopping" +
    "     </button>" +
    "</template>" +
    "</SlideInBar>",
  data() {
    return {
      icon: ["fas", "trash-alt"]
    };
  },
  methods: {
    moveToCart(product) {
      alert(`Move item to cart. \n\n ${JSON.stringify(product)}`);
    },
    deleteProductFromCart(product) {
      alert(`Delete item from favourites. \n\n ${JSON.stringify(product)}`);
    }
  }
});
