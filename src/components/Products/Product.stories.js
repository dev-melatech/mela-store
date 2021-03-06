import testData from "../../../testData";

import Products from "@/components/Products/Products";
import { action } from "@storybook/addon-actions";

export default {
  component: Products,
  title: "E-commerce/Products/Product Cards",
  argTypes: {
    label: {
      control: {
        type: "select",
        options: ["featured", "new_arrivals", "best_deals"]
      }
    },
    classes: { control: "text" },
    sectionTitle: { control: "text" },
    currency: { control: "text" },
    products: { table: { expanded: true } }
  }
};

// We create a “template” of how args map to rendering
const Template = (args, { argTypes }) => ({
  components: { Products },
  props: Object.keys(argTypes),
  template:
    '<Products :currency="currency" ' +
    ':section-title="sectionTitle"' +
    ' :classes="classes" ' +
    ' :products="products"' +
    ' :label="label"' +
    '@move-to-cart="moveToCart"\n' +
    '@move-to-favourites="moveToFavourites"\n' +
    " >" +
    "</Products>",
  methods: {
    moveToCart: action("move-to-cart"),
    moveToFavourites: action("move-to-favourites")
  }
});

export const ProductsList = Template.bind({});
ProductsList.args = {
  label: "featured",
  currency: "₦",
  sectionTitle: "",
  products: testData.setFeaturedProducts(),
  classes: "mt-5 mb-5"
};
