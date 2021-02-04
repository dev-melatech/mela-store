<template>
  <ul class="melatech-ui-product-actions-icons" :class="classes">
    <!--decrease cart quantity-->
    <li class="float-left" v-if="!hideCartQuantityAdjust">
      <button class="btn">
        <font-awesome-icon :icon="['fas', 'minus']" />
      </button>
      <span class="sr-only">Add to cart</span>
    </li>
    <!--cart quantity-->
    <li
      class="float-left cart-quantity text-center"
      v-if="!hideCartQuantityAdjust"
    >
      <span>1</span>
    </li>
    <!--increase cart quantity-->
    <li class="float-left" v-if="!hideCartQuantityAdjust">
      <button class="btn">
        <font-awesome-icon :icon="['fas', 'plus']" />
      </button>
      <span class="sr-only">Add to cart</span>
    </li>
    <!--cart button-->
    <li v-if="!hideCartButton">
      <button class="btn">
        <font-awesome-icon :icon="['fas', 'shopping-cart']" />
      </button>
      <span class="sr-only">Add to cart</span>
    </li>
    <!--fav button-->
    <li v-if="!hideFavouriteButton">
      <button class="btn">
        <font-awesome-icon :icon="['fas', 'heart']" />
      </button>
      <span class="sr-only">Add to Wishlist</span>
    </li>
    <!--preview button-->
    <li v-if="!hidePreviewButton">
      <button class="btn">
        <font-awesome-icon :icon="['fas', 'eye']" />
      </button>
      <span class="sr-only">Quick View</span>
    </li>
    <!--delete button-->
    <li v-if="!hideDeleteButton">
      <button class="btn">
        <font-awesome-icon :icon="['fas', 'trash-alt']" />
      </button>
      <span class="sr-only">Trash</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: "ProductActions",
  props: {
    product: {
      type: Object,
      default: () => ({
        id: 1,
        title: `Sample Item 1`,
        price: 3000,
        image_link: "/image-path",
        discount: 40,
        slug: "sample-item-1"
      }),
      required: true
    },
    hideCartButton: {
      type: Boolean,
      default: false
    },
    hideFavouriteButton: {
      type: Boolean,
      default: false
    },
    hidePreviewButton: {
      type: Boolean,
      default: false
    },
    hideDeleteButton: {
      type: Boolean,
      default: false
    },
    hideCartQuantityAdjust: {
      type: Boolean,
      default: true
    },
    classes: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped>
.melatech-ui-product-actions-icons {
  margin: 0;
  padding: 0;
  position: absolute;
  left: 0;
  bottom: 20px;
  width: 100%;
  text-align: center;
  z-index: 99;
}
.melatech-ui-product-actions-icons .cart-quantity {
  line-height: 30px;
  width: 50px;
}
.from-slide-in-bar.melatech-ui-product-actions-icons {
  position: relative;
  text-align: right;
  left: 0;
  bottom: 10px;
}
.from-slide-in-bar.melatech-ui-product-actions-icons li {
  /*border: 1px solid;*/
}
.from-slide-in-bar.melatech-ui-product-actions-icons li button {
  border: 1px solid;
}
.melatech-ui-product-actions-icons li {
  display: inline-block;
}

.melatech-ui-product-actions-icons li button {
  display: block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  line-height: 30px;
  background: #fff;
  color: #999999;
  position: relative;
  /*opacity: 0;*/
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  padding: 0;
  font-size: 12px;
  margin: 0 2px;
}
.melatech-ui-product-actions-icons li button:hover {
  background: #999;
  color: #fff;
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
