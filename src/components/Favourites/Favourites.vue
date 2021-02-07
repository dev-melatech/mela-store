<template>
  <products-list
    :label="label"
    :products="products"
    @move-to-cart="moveToCart"
    @delete-product="deleteProduct"
  >
    <template v-slot:item="{ item }">
      <div>
        <slot name="product-link" :item="item"></slot>
      </div>
    </template>
  </products-list>
</template>

<script>
import ProductsList from "@/components/Products/ProductsList/ProductsList";
export default {
  name: "Favourites",
  components: { ProductsList },
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
      this.$emit("delete-product", product);
    },
    moveToCart(product) {
      this.$emit("move-to-cart", product);
    }
  }
};
</script>

<style scoped>
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
