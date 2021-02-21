<template>
  <b-navbar
    toggleable="lg"
    class="melatech-ui-navbar melastore-navbar"
    type="light"
    sticky
    variant="info"
  >
    <b-container>
      <!--navbar toggler-->
      <!--navbar brand-->
      <b-navbar-brand href="#">Logo</b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item href="#">Shop</b-nav-item>
      </b-navbar-nav>
      <!--navbar search md|lg-->
      <nav-bar-search classes="d-none d-md-block" />
      <!--navbar links-->
      <b-navbar-nav class="ml-auto nav-links-list">
        <b-nav-item
          v-for="(link, index) in navLinks"
          :key="index"
          @click="toggleSlideInBar(link)"
        >
          <inline-svg :svg-file="link.icon" width="20" height="20" classes="" />
          <count-circle v-if="link.title !== 'Login'" />
        </b-nav-item>
      </b-navbar-nav>
    </b-container>
    <!--navbar search sm-->
    <b-container class="d-md-none">
      <nav-bar-search classes="d-md-none mt-3" />
    </b-container>
    <!--slide in bar-->
    <slide-in-bar
      ref="melatechUiSlideInBar"
      :title="slideInTitle"
      :is-open="isSlideInOpen"
      @toggle-slide-in="toggleSlideInBar"
      :hide-footer="
        slideInTitle === 'Login'
          ? true
          : slideInTitle === 'Register'
          ? true
          : slideInTitle === 'Forgot Password'
      "
    >
      <!---------------------------------------------------------------------------
                                      CART SLOTS
      ----------------------------------------------------------------------------->
      <template v-slot:shopping-cart>
        <shopping-cart
          :products="products"
          label="Cart"
          @proceed-to-checkout="proceedToCheckout"
          @empty-cart="emptyCart"
          @increase-cart-quantity="increaseCartQuantity"
          @decrease-cart-quantity="decreaseCartQuantity"
          @delete-product="deleteProductFromCart"
          classes="hide-shadow toggle-bg"
        >
          <!--item link slot-->
          <template v-slot:product-link="{ item }">
            <a :href="item.link" class="melastore-product-title">{{
              item.title
            }}</a>
          </template>
        </shopping-cart>
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
          classes="hide-shadow toggle-bg"
        >
          <!--item link slot-->
          <template v-slot:product-link="{ item }">
            <a :href="item.link" class="melastore-product-title">{{
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
      <!---------------------------------------------------------------------------
                                      LOGIN SLOTS
      ----------------------------------------------------------------------------->
      <template v-slot:auth>
        <login
          v-if="slideInTitle === 'Login'"
          ref="melastoreLogin"
          @login="login"
          @show-register-form="showRegisterForm"
          @show-forgot-password-form="showForgotPasswordForm"
        />
        <forgot-password
          v-if="slideInTitle === 'Forgot Password'"
          ref="melastoreForgotPassword"
          @send-password-reset-link="sendPasswordResetLink"
          @show-login-form="showLoginForm"
        />
        <register
          v-if="slideInTitle === 'Register'"
          @register="register"
          @show-login-form="showLoginForm"
        />
        <loader ref="loader" />
      </template>
    </slide-in-bar>
    <!--full screen overlay-->
    <div
      class="melatech-ui-full-screen"
      :class="isOpen || isSlideInOpen ? 'visible' : 'hidden'"
      @click="toggleSlideInBar({ title: slideInTitle })"
    ></div>
  </b-navbar>
</template>

<script>
import NavBarSearch from "@/components/NavBar/NavigationBarSearch/NavBarSearch";
import InlineSvg from "@/components/InlineSVG/InlineSvg";
import CountCircle from "@/components/NavBar/Helpers/CountCircle";
import SlideInBar from "@/components/NavBar/SlideInBar/SlideInBar";
import config from "@/config";
import ShoppingCart from "@/components/Shopping Cart/ShoppingCart";
import Favourites from "@/components/Favourites/Favourites";
import "@/assets/css/navbar.css";
import Login from "@/components/Login/Login";
import ForgotPassword from "@/components/ForgotPassword/ForgotPassword";
import Loader from "@/components/Loaders/Loader";
import Register from "@/components/Register/Register";
export default {
  name: "NavigationBar",
  components: {
    Register,
    Loader,
    ForgotPassword,
    Login,
    Favourites,
    ShoppingCart,
    SlideInBar,
    CountCircle,
    InlineSvg,
    NavBarSearch
  },
  computed: {
    products() {
      console.log(config.getProducts());
      return config.getProducts();
    }
  },
  mounted() {
    console.log(window.location.href);
    localStorage.setItem("currentHref", window.location.href);
  },
  props: {
    navLinks: {
      type: Array,
      default: () => [
        {
          title: "Favourites",
          icon: require(`!html-loader!../../../../static/svgs/like.svg`),
          path: "/favourites"
        },
        {
          title: "Cart",
          icon: require(`!html-loader!../../../../static/svgs/cart.svg`),
          path: "/cart"
        },
        {
          title: "Login",
          icon: require(`!html-loader!../../../../static/svgs/user.svg`),
          path: "/account/login"
        }
      ]
    }
  },
  data() {
    return {
      isOpen: false,
      isSlideInOpen: false,
      slideInTitle: "",
      authTitle: "Login"
    };
  },

  methods: {
    toggleMenu(isOpen) {
      this.isOpen = isOpen;
    },
    toggleSlideInBar(link = null) {
      console.log(link);
      this.slideInTitle = link.title;
      this.isSlideInOpen = !this.isSlideInOpen;

      if (this.isSlideInOpen) {
        window.history.pushState("", "", `${link.path}`);
      } else {
        window.history.pushState("", "", localStorage.getItem("currentHref"));
      }
    },
    toggleLoader() {
      this.$refs.loader.toggleLoader();
      const that = this;
      setTimeout(function() {
        that.$refs.loader.toggleLoader();
      }, 1000);
    },
    showRegisterForm() {
      this.toggleLoader();
      this.slideInTitle = "Register";
      window.history.pushState("", "", `/account/register`);
    },
    showLoginForm() {
      this.toggleLoader();
      this.slideInTitle = "Login";
      window.history.pushState("", "", `/account/login`);
    },
    showForgotPasswordForm() {
      this.toggleLoader();
      this.slideInTitle = "Forgot Password";
      window.history.pushState("", "", `/account/forgot-password`);
    },
    login(user) {
      setTimeout(function() {
        alert(`Should log user in \n\n ${JSON.stringify(user)}`);
      }, 1000);
    },
    register(user) {
      setTimeout(function() {
        alert(`Should register user in \n\n ${JSON.stringify(user)}`);
      }, 1000);
    },
    sendPasswordResetLink(email) {
      setTimeout(function() {
        alert(
          `Should send password reset email to \n\n ${JSON.stringify(email)}`
        );
      }, 1000);
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
