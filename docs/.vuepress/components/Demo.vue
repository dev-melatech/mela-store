<template>
  <div>
    <div class="sample-component">
      <shopping-cart
        label="Cart"
        :products="products"
        @increase-cart-quantity="increaseCartQuantity"
        @decrease-cart-quantity="decreaseCartQuantity"
        @delete-product="deleteProductFromCart"
      />
    </div>
    <div class="mt-5">
      <slot></slot>
    </div>
    <div>
      <props-table :props="data" label="Props" classes="props-table" />
    </div>
    <div>
      <props-table :props="slots" label="Slots" classes="slots-table" />
    </div>
    <div>
      <props-table :props="events" label="Events" classes="events-table" />
    </div>
    <div>
      <notes :notes="notes" />
    </div>
  </div>
</template>

<script>
import config from "../../../src/config";
import PropsTable from "./PropsTable";
import Notes from "./Notes";

export default {
  name: "Demo",
  components: { Notes, PropsTable },
  props: {},
  data() {
    return {
      notes: [
        'Object keys in <span class="notes-props">products</span> props array should satisfy default values.'
      ],
      data: [
        {
          name: "products",
          type: "array",
          default: [],
          description: "djddjndndnd"
        }
      ],
      slots: [
        {
          name: "product-link",
          scopes: {
            name: "item",
            description: "product object"
          },
          description: "The 'Product Link' content"
        }
      ],
      events: [
        {
          name: "delete-product",
          arguments: {
            name: "product",
            description: "selected product object"
          },
          description: "Deletes selected product from cart"
        },
        {
          name: "decrease-cart-quantity",
          arguments: {
            name: "product",
            description: "selected product object"
          },
          description: "Decreases cart quantity of selected item"
        },
        {
          name: "increase-cart-quantity",
          arguments: {
            name: "product",
            description: "selected product object"
          },
          description: "Increase cart quantity of selected item"
        }
      ]
    };
  },
  computed: {
    products() {
      return config.getProducts(5);
    }
  },
  methods: {
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
    }
  }
};
</script>

<style scoped>
.sample-component {
  /*border-radius: 10px;*/
  padding: 20px;
  /* border: 1px solid #e9e6e6; */
  margin-top: 20px;
  background: #f8f7f7;
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
