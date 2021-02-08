import Vue from "vue";
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

Vue.component("font-awesome-icon", FontAwesomeIcon);

const numeral = require("numeral");
Vue.filter("formatNumber", function(value) {
  return numeral(value).format("0,0"); // displaying other groupings/separators is possible, look at the docs
});

// import { configureReadme } from "storybook-readme";
// // import { configureReadme, addFooter, addHeader } from "storybook-readme";
//
// configureReadme({
//   // codeTheme: 'far',
//   header: `
// ### \`storybook-readme\` addon example
// <img src="https://storybook.js.org//images/logos/logo-storybook.svg"/>
// ---
// `,
//   footer: `
// ---
// - Sources of this storybook (with React components) [tuchk4/storybook-readme/packages/example-react](https://github.com/tuchk4/storybook-readme/tree/master/packages/example-react)
// - Sources of the same Vue storybook [tuchk4/storybook-readme/packages/example-vue](https://github.com/tuchk4/storybook-readme/tree/master/packages/example-vue)
// - Issues and suggestions [storybook-readme/issues](https://github.com/tuchk4/storybook-readme/issues). You are welcome to suggest to awesome feature or report an annoying bug.
// - <img src="https://upload.wikimedia.org/wikipedia/ru/thumb/9/9f/Twitter_bird_logo_2012.svg/1200px-Twitter_bird_logo_2012.svg.png" alt="twitter" style="width:16px;"/> [tuchk4](https://twitter.com/tuchk)
// `
// });
