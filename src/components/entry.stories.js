import Vue from "vue";
import "@/assets/css/default.css";
import "@/assets/css/color-scheme.css";
import "@/assets/css/responsive.css";
import "@/assets/fonts/nunito/stylesheet.css";
import "@/assets/css/markdown.css";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);

import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGooglePlusG } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faEye,
  faHeart,
  faMapMarkerAlt,
  faShoppingCart
} from "@fortawesome/free-solid-svg-icons";
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
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

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
library.add(faCircleNotch);
library.add(faCircle);
library.add(faShoppingCart);
library.add(faEye);
library.add(faHeart);

Vue.component("font-awesome-icon", FontAwesomeIcon);

const numeral = require("numeral");
Vue.filter("formatNumber", function(value) {
  return numeral(value).format("0,0"); // displaying other groupings/separators is possible, look at the docs
});

import FooterContactUs from "@/components/FooterBar/FooterContactUs/FooterContactUs";
import FooterNewsLetter from "@/components/FooterBar/FooterNewsLetter/FooterNewsLetter";
import FooterSocials from "@/components/FooterBar/FooterSocials/FooterSocials";
import FooterBar from "@/components/FooterBar/FooterBar";
import FooterQuickLinks from "@/components/FooterBar/FooterQuickLinks/FooterQuickLinks";
import InlineSvg from "@/components/InlineSVG/InlineSvg";
import Login from "@/components/Login/Login";
import Register from "@/components/Register/Register";
import ForgotPassword from "@/components/ForgotPassword/ForgotPassword";
import ShoppingCart from "@/components/Shopping Cart/ShoppingCart";
import Favourites from "@/components/Favourites/Favourites";
import CarouselLander from "@/components/Landers/CarouselLander";

// Navigation Bar
import NavigationBar from "@/components/NavBar/NavigationBar/NavigationBar";
import NavbarToggle from "@/components/NavBar/NavigationBarToggle/NavbarToggle";
import SideMenu from "@/components/NavBar/SideMenu/SideMenu";
import NavbarSearch from "@/components/NavBar/NavigationBarSearch/NavbarSearch";
import CountCircle from "@/components/NavBar/Helpers/CountCircle";
import SlideInBar from "@/components/NavBar/SlideInBar/SlideInBar";
import Loader from "@/components/Loaders/Loader";
import LoggedInTick from "@/components/NavBar/Helpers/LoggedInTick";
const MelaStore = {
  FooterQuickLinks,
  FooterBar,
  FooterSocials,
  FooterNewsLetter,
  FooterContactUs,
  InlineSvg,
  CountCircle,
  SlideInBar,
  Login,
  Register,
  ForgotPassword,
  ShoppingCart,
  Favourites,
  NavigationBar,
  NavbarSearch,
  NavbarToggle,
  SideMenu,
  Loader,
  LoggedInTick,
  CarouselLander
};

Object.keys(MelaStore).forEach(name => {
  Vue.component(`Ms${name}`, MelaStore[name]);
});
