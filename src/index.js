import Vue from "vue";

// Components
import Lander from "@/components/Landers/Lander";
import Advert from "@/components/Adverts/Advert";
import Products from "@/components/Products/Products";
import ProductCard from "@/components/Products/ProductCard";
import ProductActions from "@/components/Products/ProductActions/ProductActions";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import Info from "@/components/Info/Info";
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
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faShippingFast } from "@fortawesome/free-solid-svg-icons";
// regular
import { faMoneyBillAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faLongArrowAltUp } from "@fortawesome/free-solid-svg-icons";

library.add(faShoppingCart);
library.add(faEye);
library.add(faHeart);
library.add(faLongArrowAltUp);
library.add(faMoneyBillAlt);
library.add(faLock);
library.add(faShippingFast);

Vue.component("font-awesome-icon", FontAwesomeIcon);

// Custom CSS
import "@/assets/css/default.css";
import "@/assets/css/color-scheme.css";
import "@/assets/fonts/nunito/stylesheet.css";
// Components
const MelaTechUI = {
  Lander,
  Products,
  ProductActions,
  ProductCard,
  ScrollToTop,
  Advert,
  Info
};

Object.keys(MelaTechUI).forEach(name => {
  Vue.component(name, MelaTechUI[name]);
});

export default MelaTechUI;
