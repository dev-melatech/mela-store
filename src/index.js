import Vue from "vue";

// Components
import Lander from "@/components/Landers/Lander";
import Advert from "@/components/Adverts/Advert";
import TestButton from "@/components/Buttons/TestButton";
import Products from "@/components/Products/Products";
import ProductCard from "@/components/Products/ProductCard";
import ProductActions from "@/components/ProductAction/ProductActions";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import HomePage from "@/components/Pages/HomePage/HomePage";

// Bootstrap
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);

// Fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
// solids
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
// regular
import { faMoneyBillAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faLongArrowAltUp } from "@fortawesome/free-solid-svg-icons";

library.add(faShoppingCart);
library.add(faEye);
library.add(faHeart);
library.add(faLongArrowAltUp);
library.add(faMoneyBillAlt);

Vue.component("font-awesome-icon", FontAwesomeIcon);

// Custom CSS
import "@/assets/css/default.css";
import "@/assets/css/color-scheme.css";

// Components
const MelaTechComponents = {
  Lander,
  TestButton,
  Products,
  ProductActions,
  ProductCard,
  ScrollToTop,
  Advert,
  HomePage
};

Object.keys(MelaTechComponents).forEach(name => {
  Vue.component(name, MelaTechComponents[name]);
});

export default MelaTechComponents;
