import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import "../../src/assets/css/default.css";
import "../../src/assets/css/color-scheme.css";
import "../../src/assets/fonts/nunito/stylesheet.css";
import "../../src/assets/css/markdown.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGooglePlusG } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

library.add(faFacebookF);
library.add(faTwitter);
library.add(faLinkedinIn);
library.add(faGooglePlusG);
library.add(faInstagram);
library.add(faMapMarkerAlt);
library.add(faPhone);
library.add(faEnvelope);
library.add(faLongArrowAltRight);
library.add(faTimes);
library.add(faArrowLeft);
library.add(faBars);
library.add(faTrashAlt);
library.add(faSearch);
library.add(faPlus);
library.add(faMinus);
library.add(faChevronRight);
library.add(faChevronLeft);
library.add(faShoppingCart);
library.add(faCircleNotch);
library.add(faCircle);

import ShoppingCart from "../../src/components/Shopping Cart/ShoppingCart";
import Advert from "../../src/components/Adverts/Advert";
import Lander from "../../src/components/Landers/Lander";
import PropsTable from "./components/PropsTable";
import Notes from "./components/Notes";
import Register from "../../src/components/Register/Register";
import Login from "../../src/components/Login/Login";
import ForgotPassword from "../../src/components/ForgotPassword/ForgotPassword";
import CarouselLander from "../../src/components/Loaders/CarouselLander";
const numeral = require("numeral");

import Vue from "vue";
// import ProductsList from "../../src/components/Products/ProductsList/ProductsList";
export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  Vue.filter("formatNumber", function(value) {
    return numeral(value).format("0,0"); // displaying other groupings/separators is possible, look at the docs
  });
  Vue.use(BootstrapVue);
  Vue.component("font-awesome-icon", FontAwesomeIcon);
  Vue.component("ShoppingCart", ShoppingCart);
  Vue.component("Advert", Advert);
  Vue.component("Lander", Lander);
  Vue.component("PropsTable", PropsTable);
  Vue.component("Notes", Notes);
  Vue.component("Register", Register);
  Vue.component("Login", Login);
  Vue.component("ForgotPassword", ForgotPassword);
  Vue.component("CarouselLander", CarouselLander);
  // Vue.component("products-list", ProductsList);
};
