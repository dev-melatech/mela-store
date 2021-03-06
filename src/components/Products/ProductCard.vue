<template>
  <div
    class="melastore-product-wrap rounded position-relative"
    :class="classes"
  >
    <!--product image-->
    <div class="position-relative melastore-product-img rounded">
      <img
        :src="product.image_link"
        :alt="product.title"
        class="w-100 rounded"
      />
    </div>
    <div class="melastore-product-details mt-2">
      <b-row>
        <b-col cols="12">
          <!--product title-->
          <slot name="product-title" :item="product">
            <span>{{ product.title }}</span>
          </slot>
          <!--product price-->
          <span class="melastore-product-price d-block"
            >{{ currency }}{{ product.price | formatNumber }}</span
          >
        </b-col>
      </b-row>
    </div>
    <!--product discount-->
    <div class="melastore-product-discount" v-if="product.discount">
      <span>%{{ product.discount }}</span>
    </div>
    <!--product actions-->
    <product-actions
      :product="product"
      hide-delete-button
      hide-preview-button
      classes="mt-3"
      @move-to-cart="$emit('move-to-cart', product)"
      @move-to-favourites="$emit('move-to-favourites', product)"
    />
  </div>
</template>

<script>
import ProductActions from "@/components/Products/ProductActions/ProductActions";
export default {
  name: "ProductCard",
  components: { ProductActions },
  props: {
    currency: {
      type: String,
      default: "$"
    },
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
.melastore-product-wrap {
  padding: 15px;
  background-color: white;
  border: 1px solid var(--border-color);
  position: relative;
}
.melastore-product-img {
  overflow: hidden;
  position: relative;
}
.melastore-product-wrap:hover .melastore-product-img img {
  transform: scale(1.1);
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
}
.melastore-product-img img {
  transition: all 0.3s;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transform: scale(1);
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  zoom: 1;
  width: 100%;
}

.melastore-product-img:before {
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

.melastore-product-wrap:hover .product-img:before {
  -webkit-transform: scale3d(1.9, 1.4, 1) rotate3d(0, 0, 1, 180deg)
    translate3d(0, -100%, 0);
  transform: scale3d(1.9, 1.4, 1) rotate3d(0, 0, 1, 180deg)
    translate3d(0, -100%, 0);
}
.melastore-product-discount {
  position: absolute;
  top: 35px;
  left: 0px;
  padding: 8px 10px;
  background-color: red;
  color: white;
  font-size: 15px;
  font-weight: 700;
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
