import Vue from "vue";

// Components
import Register from "@/components/Register/Register";
import Loader from "@/components/Loaders/Loader";
import ForgotPassword from "@/components/ForgotPassword/ForgotPassword";
import Login from "@/components/Login/Login";
import Favourites from "@/components/Favourites/Favourites";
import ShoppingCart from "@/components/Shopping Cart/ShoppingCart";
import SlideInBar from "@/components/NavBar/SlideInBar/SlideInBar";
import CountCircle from "@/components/NavBar/Helpers/CountCircle";
import InlineSvg from "@/components/InlineSVG/InlineSvg";
import NavBarSearch from "@/components/NavBar/NavigationBarSearch/NavBarSearch";
import Info from "@/components/Info/Info";
import CarouselLander from "@/components/Loaders/CarouselLander";

// Bootstrap
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);

// Fontawesome
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

Vue.component("font-awesome-icon", FontAwesomeIcon);

// Custom CSS
import "@/assets/css/default.css";
import "@/assets/css/color-scheme.css";
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
  CarouselLander
};

Object.keys(MelaStore).forEach(name => {
  Vue.component(`Ms${name}`, MelaStore[name]);
});

export default MelaStore;
