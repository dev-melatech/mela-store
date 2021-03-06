import testData from "../../../testData";
import ProductCard from "@/components/Products/ProductCard";
import { action } from "@storybook/addon-actions";
export default {
  component: ProductCard,
  title: "E-commerce/Products/Product Card",
  argTypes: {
    label: {
      control: {
        type: "select",
        options: ["featured", "new_arrivals", "best_deals"]
      }
    },
    classes: { control: "string" },
    products: { table: { expanded: true } }
  }
};

// We create a “template” of how args map to rendering
const Template = (args, { argTypes }) => ({
  components: { ProductCard },
  props: Object.keys(argTypes),
  template:
    "<b-container>" +
    "<b-row>" +
    "<b-col lg='2' offset-lg='5'>" +
    "<div class='mt-5'>" +
    '<ProductCard :product="product"\n' +
    '@move-to-cart="moveToCart"\n' +
    '@move-to-favourites="moveToFavourites"\n' +
    "/>" +
    "</div>" +
    "</b-col>" +
    "</b-row>" +
    "</b-container>",
  methods: {
    moveToCart: action("move-to-cart"),
    moveToFavourites: action("move-to-favourites")
  }
});

export const Default = Template.bind({});
Default.args = {
  label: "featured",
  product: testData.setFeaturedProducts()[0],
  classes: "mt-5 mb-5"
};
