import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);

import ProductActions from "@/components/Products/ProductActions/ProductActions";
import testData from "../../../../testData";

export default {
  component: ProductActions,
  title: "E-commerce/Product Actions",
  argTypes: {
    product: { control: "object" },
    hideCartButton: { control: "boolean" },
    hideFavouriteButton: { control: "boolean" },
    hidePreviewButton: { control: "boolean" },
    hideDeleteButton: { control: "boolean" },
    hideCartQuantityAdjust: { control: "boolean" },
    fromCart: { control: "boolean" },
    classes: { control: "text" }
  }
};

// We create a “template” of how args map to rendering
const Template = (args, { argTypes }) => ({
  components: { ProductActions },
  props: Object.keys(argTypes),
  template:
    "<b-container>\n" +
    "<div style='height: 500px;" +
    " background: #f3efef;" +
    " width: 500px;" +
    " margin: 0 auto;" +
    " position: relative'>\n" +
    "<ProductActions " +
    ':hide-cart-button="hideCartButton"\n' +
    ':hide-favourite-button="hideFavouriteButton"\n' +
    ':hide-preview-button="hidePreviewButton"\n' +
    ':hide-delete-button="hideDeleteButton"\n' +
    ':hide-cart-quantity-adjust="hideCartQuantityAdjust"\n' +
    ':from-cart="fromCart"\n' +
    ' :product="product" ' +
    ':classes="classes"/>' +
    "</div>" +
    "</b-container>"
});

// Each story then reuses that template
export const Default = Template.bind({});
Default.args = {
  product: testData.setProduct(),
  hideCartButton: false,
  hideFavouriteButton: false,
  hidePreviewButton: false,
  hideDeleteButton: false,
  hideCartQuantityAdjust: true,
  fromCart: false,
  classes: ""
};
