<template>
  <ul class="product-actions-icons" :class="classes">
    <li>
      <button class="btn">
        <font-awesome-icon :icon="['fas', 'shopping-cart']" />
      </button>
      <span class="sr-only">Add to cart</span>
    </li>
    <li>
      <button class="btn">
        <font-awesome-icon :icon="['fas', 'heart']" />
      </button>
      <span class="sr-only">Add to Wishlist</span>
    </li>
    <li>
      <button class="btn">
        <font-awesome-icon :icon="['fas', 'eye']" />
      </button>
      <span class="sr-only">Quick View</span>
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
    classes: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped>
.product-actions-icons {
  margin: 0;
  padding: 0;
  position: absolute;
  left: 0;
  bottom: 20px;
  width: 100%;
  text-align: center;
  z-index: 99;
}
.product-actions-icons li {
  display: inline-block;
}

.product-actions-icons li button {
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
.product-actions-icons li button:hover {
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
