<template>
  <b-navbar
    toggleable="lg"
    class="melatech_ui_navbar melatech-ui-navbar"
    type="dark"
    sticky
    variant="info"
  >
    <b-container>
      <!--navbar toggler-->
      <nav-bar-toggler @click="toggleMenu" :is-open="isOpen" />
      <!--navbar brand-->
      <b-navbar-brand href="#">Logo</b-navbar-brand>
      <!--navbar search md|lg-->
      <nav-bar-search classes="d-none d-md-block" />
      <!--navbar links-->
      <b-navbar-nav class="ml-auto nav-links-list">
        <b-nav-item
          v-for="(l, index) in navLinks"
          :key="index"
          @click="toggleSlideInBar(l.title)"
        >
          <inline-svg
            :name="l.icon"
            width="20"
            height="20"
            dir="svgs"
            classes=""
          />
          <count-circle />
        </b-nav-item>
      </b-navbar-nav>
    </b-container>
    <!--navbar search sm-->
    <b-container class="d-md-none">
      <nav-bar-search classes="d-md-none mt-3" />
    </b-container>
    <!--side menu-->
    <side-menu :is-open="isOpen" @click="toggleMenu" />
    <!--slide in bar-->
    <slide-in-bar
      :products="products"
      ref="melatechUiSlideInBar"
      :title="slideInTitle"
      :is-open="isSlideInOpen"
      @click="toggleMenu"
    >
      <!--item link slot-->
      <template v-slot:product-link="{ item }">
        <a :href="item.link" class="melatech-ui-product-title">{{
          item.title
        }}</a>
      </template>
      <!--cart total slot-->
      <!--<template v-slot:cart-total>-->
      <!--  <h1>Here might be a page title</h1>-->
      <!--</template>-->
    </slide-in-bar>
    <!--full screen overlay-->
    <div
      class="melatech-ui-full-screen"
      :class="isOpen || isSlideInOpen ? 'visible' : 'hidden'"
      @click="[(isOpen = false), (isSlideInOpen = false)]"
    ></div>
  </b-navbar>
</template>

<script>
import NavBarToggler from "@/components/NavBar/NavigationBarToggler/NavBarToggler";
import NavBarSearch from "@/components/NavBar/NavigationBarSearch/NavBarSearch";
import InlineSvg from "@/components/InlineSVG/InlineSvg";
import CountCircle from "@/components/NavBar/Helpers/CountCircle";
import SideMenu from "@/components/NavBar/SideMenu/SideMenu";
import SlideInBar from "@/components/NavBar/SlideInBar/SlideInBar";
import config from "@/config";
export default {
  name: "NavigationBar",
  components: {
    SlideInBar,
    SideMenu,
    CountCircle,
    InlineSvg,
    NavBarSearch,
    NavBarToggler
  },
  computed: {
    products() {
      console.log(config.getProducts());
      return config.getProducts();
    }
  },
  props: {
    navLinks: {
      type: Array,
      default: () => [
        {
          title: "Favourites",
          icon: "like"
        },
        {
          title: "Cart",
          icon: "cart"
        }
      ]
    }
  },
  data() {
    return {
      isOpen: false,
      isSlideInOpen: false,
      slideInTitle: ""
    };
  },

  methods: {
    toggleMenu(isOpen) {
      this.isOpen = isOpen;
      this.isSlideInOpen = isOpen;
      console.log(isOpen);
    },
    toggleSlideInBar(title) {
      this.isSlideInOpen = !this.isSlideInOpen;
      this.slideInTitle = title;
      // this.$refs.melatechUiSlideInBar.setContent(title);
    }
  }
};
</script>

<style scoped>
.visible {
  visibility: visible;
  opacity: 1;
  transition: opacity 0.5s linear;
}

.hidden {
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s 0.5s, opacity 0.5s linear;
}

.melatech_ui_navbar {
  background: red;
  padding: 20px;
}
.nav-links-list {
  display: table !important;
}
.nav-links-list li {
  display: table-cell !important;
  position: relative;
}
.navbar-nav .nav-link {
  /*position: relative;*/
}
.navbar-nav .nav-item {
  position: relative;
  padding-right: 40px;
}
.navbar-nav .nav-item:last-child {
  padding-right: 0;
}

/* (1366x768) WXGA Display */

@media screen and (min-width: 1366px) and (max-width: 1919px) {
}

@media (min-width: 1198px) and (max-width: 1365.9px) {
}

/* Normal desktop :992px. */

@media (min-width: 992px) and (max-width: 1197px) {
}

/* Normal desktop :991px. */

@media (min-width: 768px) and (max-width: 991px) {
}

/* small mobile :576px. */

@media (min-width: 576px) and (max-width: 767px) {
}

/* extra small mobile 320px. */

@media (max-width: 575px) {
}

/* Large Mobile :480px. */

@media only screen and (min-width: 480px) and (max-width: 575px) {
}

@media only screen and (max-width: 575px) and (min-width: 480px) {
}
</style>
