import Vue from "vue";

// Components
import Register from "@/components/Register/Register";
import ForgotPassword from "@/components/ForgotPassword/ForgotPassword";
import Login from "@/components/Login/Login";
import Favourites from "@/components/Favourites/Favourites";
import ShoppingCart from "@/components/Shopping Cart/ShoppingCart";
import InlineSvg from "@/components/InlineSVG/InlineSvg";
import NavBarSearch from "@/components/NavBar/NavigationBarSearch/NavbarSearch";
import Info from "@/components/Info/Info";
import CarouselLander from "@/components/Landers/CarouselLander";
import ProductActions from "@/components/Products/ProductActions/ProductActions";
import ProductCard from "@/components/Products/ProductCard";
import Products from "@/components/Products/Products";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import Banner from "@/components/Banners/Banner";
import FooterContactUs from "@/components/FooterBar/FooterContactUs/FooterContactUs";
import FooterNewsLetter from "@/components/FooterBar/FooterNewsLetter/FooterNewsLetter";
import FooterSocials from "@/components/FooterBar/FooterSocials/FooterSocials";
import FooterBar from "@/components/FooterBar/FooterBar";
import FooterQuickLinks from "@/components/FooterBar/FooterQuickLinks/FooterQuickLinks";

// Navigation Bar
import NavbarToggle from "@/components/NavBar/NavigationBarToggle/NavbarToggle";
import SideMenu from "@/components/NavBar/SideMenu/SideMenu";
import NavbarSearch from "@/components/NavBar/NavigationBarSearch/NavbarSearch";
import CountCircle from "@/components/NavBar/Helpers/CountCircle";
import SlideInBar from "@/components/NavBar/SlideInBar/SlideInBar";
import Loader from "@/components/Loaders/Loader";
import LoggedInTick from "@/components/NavBar/Helpers/LoggedInTick";

// Bootstrap
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);

// Fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faGooglePlusG,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

import {
  faEye,
  faHeart,
  faMapMarkerAlt,
  faShoppingCart,
  faPhone,
  faTimes,
  faBars,
  faPlus,
  faMinus,
  faChevronRight,
  faCircleNotch,
  faCircle,
  faChevronLeft,
  faLongArrowAltRight,
  faArrowLeft,
  faSearch,
  faTrashAlt,
  faLongArrowAltUp
} from "@fortawesome/free-solid-svg-icons";

import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

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
library.add(faLongArrowAltUp);

Vue.component("font-awesome-icon", FontAwesomeIcon);

// Custom CSS
import "@/assets/css/default.css";
import "@/assets/css/color-scheme.css";
import "@/assets/css/responsive.css";
import "@/assets/fonts/nunito/stylesheet.css";

// Components
const MelaStore = {
  Register,
  Loader,
  ForgotPassword,
  Login,
  Favourites,
  ShoppingCart,
  SlideInBar,
  CountCircle,
  InlineSvg,
  NavBarSearch,
  Info,
  CarouselLander,
  ProductActions,
  ProductCard,
  Products,
  ScrollToTop,
  Banner,
  FooterQuickLinks,
  FooterBar,
  FooterSocials,
  FooterNewsLetter,
  FooterContactUs,
  NavbarToggle,
  NavbarSearch,
  SideMenu,
  LoggedInTick
};

Object.keys(MelaStore).forEach(name => {
  Vue.component(`Ms${name}`, MelaStore[name]);
});

const numeral = require("numeral");
Vue.filter("formatNumber", function(value) {
  return numeral(value).format("0,0"); // displaying other groupings/separators is possible, look at the docs
});

export default MelaStore;
