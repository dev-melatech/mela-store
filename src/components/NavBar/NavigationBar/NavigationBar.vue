<template>
  <b-navbar
    toggleable="lg"
    class="melastore-navbar"
    type="light"
    sticky
    variant="info"
  >
    <b-container>
      <!--navbar toggle-->
      <ms-navbar-toggle @click="isSideMenuOpen = !isSideMenuOpen" />
      <!--navbar brand-->
      <b-navbar-brand href="#">Logo</b-navbar-brand>
      <!--navbar search md|lg-->
      <ms-navbar-search classes="d-none d-md-block" />
      <!--navbar links-->
      <b-navbar-nav class="ml-auto nav-links-list">
        <b-nav-item
          v-for="(link, index) in navLinks"
          :key="index"
          @click="toggleSlideInBar(link)"
        >
          <ms-inline-svg
            :svg-file="link.icon"
            width="20"
            height="20"
            classes=""
          />
          <ms-count-circle
            v-if="link.title !== 'Login' && link.title !== 'Account'"
          />
          <ms-logged-in-tick v-if="link.title === 'Account' && auth" />
        </b-nav-item>
      </b-navbar-nav>
    </b-container>
    <!--navbar search sm-->
    <b-container class="d-md-none">
      <ms-navbar-search classes="d-md-none mt-3" />
    </b-container>
    <!--side menu-->
    <ms-side-menu :is-open="isSideMenuOpen" @close="toggleMenu(false)">
      <template v-slot:header>
        <h1 class="text-white">
          Header
        </h1>
      </template>
      <template v-slot:content>
        <ul>
          <li v-for="link in 10" :key="link">
            <a :href="`/link-${link}`">Link {{ link }}</a>
          </li>
        </ul>
      </template>
    </ms-side-menu>
    <!--slide in bar-->
    <ms-slide-in-bar
      ref="melastoreSlideInBar"
      :title="slideInTitle"
      :is-open="isSlideInOpen"
      @toggle-slide-in="toggleSlideInBar"
      :links="navLinks"
    >
      <!---------------------------------------------------------------------------
                                      CART SLOTS
      ----------------------------------------------------------------------------->
      <template v-slot:cart-header>
        <span>Your Shopping Cart</span>
      </template>
      <template v-slot:cart>
        <ms-shopping-cart
          :products="products"
          label="Cart"
          @empty-cart="emptyCart"
          @increase-cart-quantity="increaseCartQuantity"
          @decrease-cart-quantity="decreaseCartQuantity"
          @delete-product="deleteProductFromCart"
          classes="melastore-hide-shadow melastore-toggle-bg"
        >
          <!--item link slot-->
          <template v-slot:product-link="{ item }">
            <a :href="item.link" class="melastore-product-title">{{
              item.title
            }}</a>
          </template>
        </ms-shopping-cart>
      </template>
      <template v-slot:cart-footer>
        <!--proceed to checkout button-->
        <button class="btn melastore-proceed-to-checkout-btn w-100">
          Proceed to checkout ($4,000)
        </button>
        <!--empty cart button-->
        <button
          class="btn melastore-empty-cart-btn w-100 mt-3"
          @click="emptyCart"
        >
          <font-awesome-icon :icon="['fas', 'trash-alt']" />
          Empty Cart
        </button>
      </template>
      <!---------------------------------------------------------------------------
                                    FAVOURITES SLOTS
      ----------------------------------------------------------------------------->
      <template v-slot:favourites-header>
        <span>Favourites</span>
      </template>
      <template v-slot:favourites>
        <ms-favourites
          :products="products"
          label="Favourites"
          @delete-product="deleteProductFromFavourites"
          @move-to-cart="moveToCart"
          classes="melastore-hide-shadow melastore-toggle-bg"
        >
          <!--item link slot-->
          <template v-slot:product-link="{ item }">
            <a :href="item.link" class="melastore-product-title">{{
              item.title
            }}</a>
          </template>
        </ms-favourites>
      </template>
      <template v-slot:favourites-footer>
        <!--empty favourites button-->
        <button
          class="btn melastore-empty-cart-btn w-100"
          @click="emptyFavourites"
        >
          <font-awesome-icon :icon="['fas', 'trash-alt']" />
          Empty Favourites
        </button>
      </template>
      <!---------------------------------------------------------------------------
                                ACCOUNT SLOTS
      ----------------------------------------------------------------------------->
      <template v-slot:account-header>
        <span class="text-capitalize">Welcome A4anthony</span>
      </template>
      <template v-slot:account>
        <div>
          <ul>
            <li v-for="link in 5" :key="link">
              <a :href="`/link-${link}`">Link {{ link }}</a>
            </li>
          </ul>
        </div>
        <div>
          <img
            :src="require('../../../../static/images/adverts/2.jpg')"
            class="rounded w-100 mt-2"
            alt="banner"
          />
        </div>
      </template>
      <template v-slot:account-footer>
        <a
          v-if="!auth"
          href="/"
          class="btn melastore-login-btn w-100 mb-3"
          @click="logout"
        >
          Login
        </a>
        <a
          v-if="!auth"
          href="/"
          class="btn melastore-register-btn w-100"
          @click="logout"
        >
          Register
        </a>
        <button
          v-if="auth"
          class="btn melastore-logout-btn w-100"
          @click="logout"
        >
          Logout
        </button>
      </template>
    </ms-slide-in-bar>
    <!--full screen overlay-->
    <div
      class="melastore-full-screen"
      :class="isSideMenuOpen || isSlideInOpen ? 'visible' : 'hidden'"
      @click="
        [
          isSlideInOpen && toggleSlideInBar({ title: slideInTitle }),
          isSideMenuOpen && toggleMenu(false)
        ]
      "
    ></div>
  </b-navbar>
</template>

<script>
import "@/assets/css/navbar.css";
import config from "@/config";
export default {
  name: "NavigationBar",
  components: {},
  computed: {
    products() {
      return config.getProducts();
    }
  },
  mounted() {
    localStorage.setItem("currentHref", window.location.href);
  },
  props: {},
  data() {
    return {
      isSideMenuOpen: false,
      isSlideInOpen: null,
      slideInTitle: "",
      auth: false,
      navLinks: [
        {
          title: "Favourites",
          icon: require(`!html-loader!../../../../static/svgs/like.svg`),
          path: "/favourites",
          content_classes: "favourites"
        },
        {
          title: "Cart",
          icon: require(`!html-loader!../../../../static/svgs/cart.svg`),
          path: "/cart",
          content_classes: "cart"
        },
        {
          title: "Account",
          icon: require(`!html-loader!../../../../static/svgs/user.svg`),
          path: "",
          content_classes: "account"
        }
      ]
    };
  },
  methods: {
    toggleMenu(isSideMenuOpen) {
      this.isSideMenuOpen = isSideMenuOpen;
    },
    toggleSlideInBar(link = null) {
      this.isSlideInOpen = !this.isSlideInOpen;
      this.slideInTitle = link.title;
      if (this.isSlideInOpen) {
        window.history.pushState("", "", `${link.path}`);
      } else {
        window.history.pushState("", "", localStorage.getItem("currentHref"));
      }
    },
    toggleLoader() {
      this.$refs.melastoreSlideInBar.$refs.melastoreLoader.toggleLoader();
      const that = this;
      setTimeout(function() {
        that.$refs.melastoreSlideInBar.$refs.melastoreLoader.toggleLoader();
      }, 1000);
    },
    logout() {
      setTimeout(function() {
        alert(`Should logout user`);
      }, 1000);
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
