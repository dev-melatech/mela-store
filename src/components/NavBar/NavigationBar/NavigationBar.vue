<template>
  <b-navbar
    toggleable="lg"
    class="melatech_ui_navbar"
    type="dark"
    sticky
    variant="info"
  >
    <b-container>
      <nav-bar-toggler />
      <b-navbar-brand href="#">Logo</b-navbar-brand>
      <nav-bar-search classes="d-none d-md-block" />
      <b-navbar-nav class="ml-auto nav-links-list">
        <b-nav-item v-for="(l, index) in navLinks" :key="index">
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
    <b-container class="d-md-none">
      <nav-bar-search classes="d-md-none mt-3" />
    </b-container>
  </b-navbar>
</template>

<script>
import NavBarToggler from "@/components/NavBar/NavigationBarToggler/NavBarToggler";
import NavBarSearch from "@/components/NavBar/NavigationBarSearch/NavBarSearch";
import InlineSvg from "@/components/InlineSVG/InlineSvg";
import CountCircle from "@/components/NavBar/Helpers/CountCircle";
export default {
  name: "NavigationBar",
  components: { CountCircle, InlineSvg, NavBarSearch, NavBarToggler },
  props: {
    navLinks: {
      type: Array,
      default: () => [
        {
          title: "Wishlist",
          link: "/wishlist",
          icon: "like",
          class: "wishlist"
        },
        {
          title: "Cart",
          link: "/cart",
          icon: "cart",
          class: "cart"
        }
      ]
    }
  },
  data() {
    return {};
  },
  methods: {
    toggleMenu() {}
  }
};
</script>

<style scoped>
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
