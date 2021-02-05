<template>
  <div>
    <products-list
      v-if="products.length !== 0"
      :label="label"
      :products="products"
      @increase-cart-quantity="increaseCartQuantity"
      @decrease-cart-quantity="decreaseCartQuantity"
      @delete-product="deleteProduct"
    >
      <template v-slot:item="{ item }">
        <div>
          <slot name="product-link" :item="item"></slot>
        </div>
      </template>
    </products-list>
    <div v-else class="text-center mt-5">
      <span>
        Oops! Your cart is currently empty
      </span>
    </div>
  </div>
</template>

<script>
import ProductsList from "@/components/Products/ProductsList/ProductsList";
export default {
  name: "ShoppingCart",
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
    increaseCartQuantity(product) {
      this.$emit("increase-cart-quantity", product);
    },
    decreaseCartQuantity(product) {
      this.$emit("decrease-cart-quantity", product);
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
