import Vue from "vue";
import Lander1 from "@/components/Landers/Lander1";
import TestButton from "@/components/Buttons/TestButton";
import Products from "@/components/Products/Products";
import ProductCard from "@/components/Products/ProductCard";
import ProductActions from "@/components/Products/ProductActions";

// bootstrap
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import "@/assets/css/default.css";
import "@/assets/css/color-scheme.css";

Vue.use(BootstrapVue);

// fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faShoppingCart);
library.add(faEye);
library.add(faHeart);

Vue.component("font-awesome-icon", FontAwesomeIcon);


// components
const Components = {
  Lander1,
  TestButton,
  Products,
  ProductActions,
  ProductCard
};
Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
