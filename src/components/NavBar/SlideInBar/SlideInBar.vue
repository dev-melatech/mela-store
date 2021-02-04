<template>
  <div
    class="melatech-ui-slide-in-bar"
    ref="melatechUiSideMenu"
    :class="[
      isOpen === true ? 'melatech-ui-slide-in-bar-in' : '',
      isOpen === false ? 'melatech-ui-slide-in-bar-out' : '',
      classes
    ]"
  >
    <div class="header b-radius" ref="melatechUiSideMenuHeader">
      <button class="btn close-slide-in-bar--btn mr-3" @click="onToggleMenu">
        <font-awesome-icon :icon="['fas', 'chevron-right']" />
      </button>
      {{ title }}
    </div>
    <div
      class="content mt-3"
      :class="[
        title === 'Cart' ? 'cart' : '',
        title === 'Favourites' ? 'favourites' : ''
      ]"
    >
      <products-list :label="title" :products="products">
        <template v-slot:item="{ item }">
          <div>
            <slot name="product-link" :item="item"></slot>
          </div>
        </template>
      </products-list>
    </div>
    <!--slide in bar footer-->
    <div class="footer" ref="melatechUiSideMenuFooter">
      <!--proceed to checkout button-->
      <button
        v-if="title === 'Cart'"
        class="btn proceed-to-checkout--btn w-100"
      >
        Proceed to checkout (${{ cartTotal }})
      </button>
      <!--empty favourites button-->
      <button v-if="title === 'Favourites'" class="btn empty-cart--btn w-100">
        <font-awesome-icon :icon="['fas', 'trash-alt']" />
        Empty Favourites
      </button>
      <!--empty cart button-->
      <button v-else class="btn empty-cart--btn w-100 mt-3">
        <font-awesome-icon :icon="['fas', 'trash-alt']" />
        Empty Cart
      </button>
    </div>
  </div>
</template>

<script>
import ProductsList from "@/components/Products/ProductsList/ProductsList";

export default {
  name: "SlideInBar",
  components: { ProductsList },
  props: {
    products: {
      type: Array,
      default: () => [],
      required: true
    },
    isOpen: {
      type: Boolean,
      default: null
    },
    classes: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: "Wishlist"
    }
  },
  computed: {
    img() {
      return require("../../../../static/images/featured/1.jpg");
    },
    cartTotal() {
      console.log("nnnfdnfd");
      return 4555;
    }
  },
  data() {
    return {
      contentStyle: {}
    };
  },
  created() {
    // window.addEventListener("resize", this.setContentHeight);
  },
  destroyed() {
    // window.removeEventListener("resize", this.setContentHeight);
  },
  mounted() {
    this.$refs.melatechUiSideMenu.classList.remove(
      "melatech-ui-slide-in-bar-out"
    );
  },
  methods: {
    onToggleMenu() {
      this.$emit("click", !this.isOpen);
    }
  }
};
</script>

<style scoped>
.melatech-ui-slide-in-bar {
  background: white;
  position: fixed;
  width: 80%;
  /*height: 100vh;*/
  top: 0;
  right: -2000px;
  bottom: 0;
  z-index: 100000000;
  padding: 15px;
  border-left: 1px solid var(--border-color);
  -webkit-box-shadow: -4px 0px 5px 0px rgb(69, 68, 69);
  -moz-box-shadow: -4px 0px 5px 0px rgba(69, 68, 69, 1);
  box-shadow: -4px 0px 5px 0px rgb(69, 68, 69);
}
.melatech-ui-slide-in-bar .header {
  background: var(--default-color);
  color: #fff;
  padding: 10px 15px;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 14px;
}
.melatech-ui-slide-in-bar .content {
  /*height: 100vh;*/
  /*height: calc(100vh - 150px);*/
  /*background: green;*/
  height: 100%;
  overflow-y: scroll;
}
.melatech-ui-slide-in-bar .content.cart {
  padding-bottom: 230px;
}
.melatech-ui-slide-in-bar .content.favourites {
  padding-bottom: 160px;
}
.melatech-ui-slide-in-bar .footer {
  /*top: calc(100vh - 170px);*/
  /*height: 150px;*/
  border-top: 2px solid var(--border-color);
  background: white;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 15px;
  z-index: 1000;
  margin-top: 15px;
  -webkit-box-shadow: 0px -5px 5px 0px rgb(230 227 230);
  -moz-box-shadow: 0px -5px 5px 0px rgba(230, 227, 230, 1);
  box-shadow: 0px -5px 5px 0px rgb(230 227 230);
}
.close-slide-in-bar--btn {
  border-radius: 50px;
  background: white;

  padding: 3px 10px;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(235, 217, 235, 1);
  -moz-box-shadow: 0px 0px 5px 0px rgba(235, 217, 235, 1);
  box-shadow: 0px 0px 5px 0px rgba(235, 217, 235, 1);
}
.proceed-to-checkout--btn {
  padding: 15px;
}
.empty-cart--btn {
  padding: 10px;
}
.proceed-to-checkout--btn {
  background: #2353ab;
  font-weight: 700;
  color: white;
  text-transform: uppercase;
}
.proceed-to-checkout--btn:hover {
  background: #3060b7;
}
.empty-cart--btn {
  color: #666;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 12px;
}
.empty-cart--btn:hover {
  color: #999;
  font-weight: 700;
}

.melatech-ui-slide-in-bar-in {
  -webkit-animation: melatech-ui-slide-in-bar-right 0.5s forwards;
  animation: melatech-ui-slide-in-bar-right 0.5s forwards;
}

.melatech-ui-slide-in-bar-out {
  -webkit-animation: melatech-ui-slide-in-bar-left 0.5s forwards;
  animation: melatech-ui-slide-in-bar-left 0.5s forwards;
}

@keyframes melatech-ui-slide-in-bar-right {
  0% {
    z-index: 100000000;
    right: -2000px;
  }

  100% {
    right: 0;
    width: 40%;
    z-index: 100000000;
  }
}

@-webkit-keyframes melatech-ui-slide-in-bar-right {
  0% {
    z-index: 100000000;
    right: -2000px;
  }

  100% {
    right: 0;
    width: 40%;
    z-index: 100000000;
  }
}

@keyframes melatech-ui-slide-in-bar-left {
  0% {
    right: 0;
    width: 40%;
    z-index: 100000000;
  }
  100% {
    right: -2000px;
    width: 40%;
    z-index: 100000000;
  }
}

@-webkit-keyframes melatech-ui-slide-in-bar-left {
  0% {
    right: 0;
    width: 40%;
    z-index: 100000000;
  }
  100% {
    right: -2000px;
    width: 40%;
    z-index: 100000000;
  }
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
  @keyframes melatech-ui-slide-in-bar-right {
    0% {
      z-index: 10000;
      right: -2000px;
    }

    100% {
      right: 0;
      width: 55%;
      z-index: 10000;
    }
  }
  @-webkit-keyframes melatech-ui-slide-in-bar-right {
    0% {
      z-index: 10000;
      right: -2000px;
    }

    100% {
      right: 0;
      width: 55%;
      z-index: 10000;
    }
  }
  @keyframes melatech-ui-slide-in-bar-left {
    0% {
      right: 0;
      width: 55%;
      z-index: 10000;
    }
    100% {
      right: -2000px;
      width: 55%;
      z-index: 10000;
    }
  }
  @-webkit-keyframes melatech-ui-slide-in-bar-left {
    0% {
      right: 0;
      width: 55%;
      z-index: 10000;
    }
    100% {
      right: -2000px;
      width: 55%;
      z-index: 10000;
    }
  }
}

/* small mobile :576px. */

@media (min-width: 576px) and (max-width: 767px) {
  @keyframes melatech-ui-slide-in-bar-right {
    0% {
      z-index: 10000;
      right: -2000px;
    }

    100% {
      right: 0;
      width: 60%;
      z-index: 10000;
    }
  }
  @-webkit-keyframes melatech-ui-slide-in-bar-right {
    0% {
      z-index: 10000;
      right: -2000px;
    }

    100% {
      right: 0;
      width: 60%;
      z-index: 10000;
    }
  }
  @keyframes melatech-ui-slide-in-bar-left {
    0% {
      right: 0;
      width: 60%;
      z-index: 10000;
    }
    100% {
      right: -2000px;
      width: 60%;
      z-index: 10000;
    }
  }
  @-webkit-keyframes melatech-ui-slide-in-bar-left {
    0% {
      right: 0;
      width: 60%;
      z-index: 10000;
    }
    100% {
      right: -2000px;
      width: 60%;
      z-index: 10000;
    }
  }
}

/* extra small mobile 320px. */

@media (max-width: 575px) {
  @keyframes melatech-ui-slide-in-bar-right {
    0% {
      z-index: 100000000;
      right: -2000px;
    }

    100% {
      right: 0;
      width: 100%;
      z-index: 100000000;
    }
  }

  @-webkit-keyframes melatech-ui-slide-in-bar-right {
    0% {
      z-index: 100000000;
      right: -2000px;
    }

    100% {
      right: 0;
      width: 100%;
      z-index: 100000000;
    }
  }

  @keyframes melatech-ui-slide-in-bar-left {
    0% {
      right: 0;
      width: 100%;
      z-index: 100000000;
    }
    100% {
      right: -2000px;
      width: 100%;
      z-index: 100000000;
    }
  }

  @-webkit-keyframes melatech-ui-slide-in-bar-left {
    0% {
      right: 0;
      width: 100%;
      z-index: 100000000;
    }
    100% {
      right: -2000px;
      width: 100%;
      z-index: 100000000;
    }
  }
}

/* Large Mobile :480px. */

@media only screen and (min-width: 480px) and (max-width: 575px) {
}

@media only screen and (max-width: 575px) and (min-width: 480px) {
}
</style>
