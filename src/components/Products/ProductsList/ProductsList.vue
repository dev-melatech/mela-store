<template>
  <ul class="melastore-products-list">
    <li
      v-for="product in products"
      class="mb-3 b-shadow-full"
      :key="product.slug"
    >
      <!--item image-->
      <img
        v-if="product.image_link"
        :src="product.image_link"
        :alt="product.slug"
        class="rounded"
      />
      <!--item content-->
      <div class="content float-left w-100">
        <!--item name-->
        <slot name="item" :item="product"></slot>
        <!--item price-->
        <span class="melastore-product-price d-block mt-2"
          >${{ product.price | formatNumber }}</span
        >
        <!--item stock-->
        <span class="melastore-product-stock d-block mt-1"
          >Available stock: {{ product.quantity }}</span
        >
        <!--product actions-->
        <product-actions
          :hide-cart-button="label === 'Cart'"
          :from-cart="label === 'Cart'"
          hide-favourite-button
          hide-preview-button
          :hide-cart-quantity-adjust="label === 'Cart' ? false : true"
          :product="product"
          @increase-cart-quantity="increaseCartQuantity"
          @decrease-cart-quantity="decreaseCartQuantity"
          @delete-product="deleteProduct"
          @move-to-cart="moveToCart"
          classes="from-slide-in-bar mt-4"
        />
      </div>
    </li>
  </ul>
</template>

<script>
import ProductActions from "../../../../src/components/Products/ProductActions/ProductActions";
export default {
  name: "ProductsList",
  components: { ProductActions },
  props: {
    products: {
      type: Array,
      default: () => [],
      required: true
    },
    label: {
      type: String,
      default: "",
      required: true
    }
  },
  methods: {
    deleteProduct(product) {
      this.$emit("delete-product", {
        product: product,
        origin: this.label
      });
    },
    increaseCartQuantity(product) {
      this.$emit("increase-cart-quantity", product);
    },
    decreaseCartQuantity(product) {
      this.$emit("decrease-cart-quantity", product);
    },
    moveToCart(product) {
      this.$emit("move-to-cart", product);
    }
  }
};
</script>

<style scoped>
.melastore-products-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.melastore-products-list li {
  min-height: 70px;
  background: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 5px;
  position: relative;
  border-radius: 8px;
}
.melastore-products-list li:nth-child(even) {
  /*background: #f8f7f7;*/
}
.melastore-products-list li:last-child {
  margin-bottom: 0 !important;
}
.melastore-products-list li img {
  width: 80px;
  margin: 0 10px;
}
.melastore-products-list .content {
  padding-left: 5px;
  padding-right: 10px;
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
