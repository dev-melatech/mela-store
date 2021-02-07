<template>
  <b-navbar
    toggleable="lg"
    class="melatech-ui-navbar"
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
    <side-menu :is-open="isOpen" @click="toggleSlideInBar" />
    <!--slide in bar-->
    <slide-in-bar
      ref="melatechUiSlideInBar"
      :title="slideInTitle"
      :is-open="isSlideInOpen"
      @click="toggleSlideInBar"
    >
      <!---------------------------------------------------------------------------
                                      CART SLOTS
      ----------------------------------------------------------------------------->
      <template v-slot:shopping-cart>
        <shopping-cart-doc
          :products="[]"
          label="Cart"
          @proceed-to-checkout="proceedToCheckout"
          @empty-cart="emptyCart"
          @increase-cart-quantity="increaseCartQuantity"
          @decrease-cart-quantity="decreaseCartQuantity"
          @delete-product="deleteProductFromCart"
        >
          <!--item link slot-->
          <template v-slot:product-link="{ item }">
            <a :href="item.link" class="melatech-ui-product-title">{{
              item.title
            }}</a>
          </template>
        </shopping-cart-doc>
      </template>
      <template v-slot:shopping-cart-footer>
        <!--proceed to checkout button-->
        <button
          class="btn proceed-to-checkout--btn w-100"
          @click="proceedToCheckout"
        >
          Proceed to checkout ($4,000)
        </button>
        <!--empty cart button-->
        <button class="btn empty-cart--btn w-100 mt-3" @click="emptyCart">
          <font-awesome-icon :icon="['fas', 'trash-alt']" />
          Empty Cart
        </button>
      </template>
      <!---------------------------------------------------------------------------
                                    FAVOURITES SLOTS
      ----------------------------------------------------------------------------->
      <template v-slot:favourites>
        <favourites
          :products="products"
          label="Favourites"
          @delete-product="deleteProductFromFavourites"
          @move-to-cart="moveToCart"
        >
          <!--item link slot-->
          <template v-slot:product-link="{ item }">
            <a :href="item.link" class="melatech-ui-product-title">{{
              item.title
            }}</a>
          </template>
        </favourites>
      </template>
      <template v-slot:favourites-footer>
        <!--empty favourites button-->
        <button class="btn empty-cart--btn w-100" @click="emptyFavourites">
          <font-awesome-icon :icon="['fas', 'trash-alt']" />
          Empty Favourites
        </button>
      </template>
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
import ShoppingCart from "@/components/Shopping Cart/ShoppingCart";
import Favourites from "@/components/Favourites/Favourites";
import "@/assets/css/navbar.css";
export default {
  name: "NavigationBar",
  components: {
    Favourites,
    ShoppingCart,
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
    },
    toggleSlideInBar(title) {
      this.isSlideInOpen = !this.isSlideInOpen;
      this.slideInTitle = title;
    },
    proceedToCheckout() {
      alert("Should proceed to check out");
    },
    emptyCart() {
      alert("Should empty cart");
    },
    emptyFavourites() {
      alert("Should empty favourites");
    },
    deleteProductFromCart(product) {
      alert(`Delete item from cart. \n\n ${JSON.stringify(product)}`);
    },
    increaseCartQuantity(product) {
      alert(`Increase cart quantity. \n\n ${JSON.stringify(product)}`);
    },
    decreaseCartQuantity(product) {
      alert(`Decrease cart quantity. \n\n ${JSON.stringify(product)}`);
    },
    deleteProductFromFavourites(product) {
      alert(`Delete item from favourites. \n\n ${JSON.stringify(product)}`);
    },
    moveToCart(product) {
      alert(`Move item to cart. \n\n ${JSON.stringify(product)}`);
    }
  }
};
</script>
