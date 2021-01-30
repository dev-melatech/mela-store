<template>
  <div class="product-wrap" :class="classes">
    <div class="position-relative product-img">
      <img :src="product.image_link" alt="" class="w-100" />
      <product-actions />
    </div>
    <div class="product-details mt-2">
      <b-row>
        <b-col cols="12">
          {{ product.title }}
          <span class="product-price d-block">${{ product.price }}</span>
        </b-col>
      </b-row>
    </div>
    <div class="product-discount" v-if="product.discount">
      <span>%{{ product.discount }}</span>
    </div>
  </div>
</template>

<script>
import ProductActions from "@/components/ProductAction/ProductActions";
export default {
  name: "ProductCard",
  components: { ProductActions },
  props: {
    product: {
      type: Object,
      default: () => {},
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
.product-img {
  overflow: hidden;
  position: relative;
}
.product-img:hover img {
  transform: scale(1.1);
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
}
.product-img img {
  transition: all 0.3s;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transform: scale(1);
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  zoom: 1;
  width: 100%;
}

.product-img:before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.6);
  z-index: 9;
  content: "";
  -webkit-transition: -webkit-transform 0.6s;
  transition: -webkit-transform 0.6s;
  transition: transform 0.6s;
  transition: transform 0.6s, -webkit-transform 0.6s;
  -webkit-transform: scale3d(1.9, 1.4, 1) rotate3d(0, 0, 1, 180deg)
    translate3d(0, 100%, 0);
  transform: scale3d(1.9, 1.4, 1) rotate3d(0, 0, 1, 180deg)
    translate3d(0, 100%, 0);
}

.product-wrap:hover .product-img:before {
  -webkit-transform: scale3d(1.9, 1.4, 1) rotate3d(0, 0, 1, 180deg)
    translate3d(0, -100%, 0);
  transform: scale3d(1.9, 1.4, 1) rotate3d(0, 0, 1, 180deg)
    translate3d(0, -100%, 0);
}
.product-discount {
  position: absolute;
  top: 35px;
  left: 15px;
  padding: 5px 10px;
  background-color: red;
  color: white;
  font-size: 13px;
  text-align: center;
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
