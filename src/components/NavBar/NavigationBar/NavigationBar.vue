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
      <ms-navbar-toggle @click="isOpen = !isOpen" />
      <!--navbar brand-->
      <b-navbar-brand href="#">Logo</b-navbar-brand>
      <!--navbar search md|lg-->
      <ms-navbar-search classes="d-none d-md-block" />
      <!--navbar links-->
      <b-navbar-nav class="ml-auto nav-links-list">
        <b-nav-item
          v-for="(link, index) in navLinksComputed"
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
        </b-nav-item>
      </b-navbar-nav>
    </b-container>
    <!--navbar search sm-->
    <b-container class="d-md-none">
      <ms-navbar-search classes="d-md-none mt-3" />
    </b-container>
    <!--side menu-->
    <ms-side-menu :is-open="isOpen" @close="toggleMenu(false)">
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
      :hide-footer="
        slideInTitle === 'Login'
          ? true
          : slideInTitle === 'Register'
          ? true
          : slideInTitle === 'Forgot Password'
      "
      display-name="A4anthony"
      :auth="auth"
      :links="navLinksComputed"
      :account-page="auth && slideInTitle === 'Account'"
    >
      <!---------------------------------------------------------------------------
                                      CART SLOTS
      ----------------------------------------------------------------------------->
      <template v-slot:cart>
        <ms-shopping-cart
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
        </ms-shopping-cart>
      </template>
      <template v-slot:cart-footer>
        <!--proceed to checkout button-->
        <button
          class="btn proceed-to-checkout-btn w-100"
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
        <ms-favourites
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
        </ms-favourites>
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
      <template v-slot:login v-if="!auth">
        <ms-login
          v-if="slideInTitle === 'Login' && !auth"
          ref="melastoreLogin"
          @login="login"
          @show-register-form="showRegisterForm"
          @show-forgot-password-form="showForgotPasswordForm"
        />
        <ms-forgot-password
          v-if="slideInTitle === 'Forgot Password' && !auth"
          ref="melastoreForgotPassword"
          @send-password-reset-link="sendPasswordResetLink"
          @show-login-form="showLoginForm"
        />
        <ms-register
          v-if="slideInTitle === 'Register' && !auth"
          @register="register"
          @show-login-form="showLoginForm"
        />
      </template>
      <!---------------------------------------------------------------------------
                                ACCOUNT SLOTS
      ----------------------------------------------------------------------------->
      <template v-slot:account v-if="auth">
        <div v-if="auth">
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
      <template v-slot:account-footer v-if="auth">
        <button class="btn logout-btn w-100" @click="logout">
          Logout
        </button>
      </template>
    </ms-slide-in-bar>
    <!--full screen overlay-->
    <div
      class="melatech-ui-full-screen"
      :class="isOpen || isSlideInOpen ? 'visible' : 'hidden'"
      @click="
        [
          isSlideInOpen && toggleSlideInBar({ title: slideInTitle }),
          isOpen && toggleMenu(false)
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
    },
    navLinksComputed() {
      let links = this.navLinks;
      if (this.auth) {
        links.push({
          title: "Account",
          icon: require(`!html-loader!../../../../static/svgs/user.svg`),
          path: "",
          content_classes: "account"
        });
      } else {
        links.push({
          title: "Login",
          icon: require(`!html-loader!../../../../static/svgs/user.svg`),
          path: "/account/login"
        });
      }

      return links;
    }
  },
  mounted() {
    localStorage.setItem("currentHref", window.location.href);
  },
  props: {},
  data() {
    return {
      isOpen: false,
      isSlideInOpen: false,
      slideInTitle: "",
      authTitle: "Login",
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
        }
      ],
      guestAuthLinks: [
        {
          title: "Register",
          path: "/account/register"
        },
        {
          title: "Forgot Password",
          path: "/account/forgot-password"
        }
      ]
    };
  },
  methods: {
    toggleMenu(isOpen) {
      this.isOpen = isOpen;
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
      this.$refs.melastoreSlideInBar.$refs.loader.toggleLoader();
      const that = this;
      setTimeout(function() {
        that.$refs.melastoreSlideInBar.$refs.loader.toggleLoader();
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
    logout() {
      setTimeout(function() {
        alert(`Should logout user`);
      }, 1000);
    },
    register(user) {
      setTimeout(function() {
        alert(`Should register user in \n\n ${JSON.stringify(user)}`);
      }, 1000);
    },
    sendPasswordResetLink(email) {
      setTimeout(function() {
        alert(`Should send password reset email to \n\n ${email}`);
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
