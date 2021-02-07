<template>
  <div>
    <div class="sample-component">
      <shopping-cart label="Cart" :products="products" />
      <div class="mt-4">
        <slot></slot>
      </div>
    </div>

    <props-table :props="data" />
  </div>
</template>

<script>
import config from "../../../src/config";
import PropsTable from "./PropsTable";

export default {
  name: "Demo",
  components: { PropsTable },
  props: {},
  data() {
    return {
      data: [
        {
          name: "label",
          type: "string",
          default: "'Cart'",
          description: "nnfnfndf"
        },
        {
          name: "products",
          type: "array",
          default: [],
          description: "djddjndndnd"
        }
      ]
    };
  },
  computed: {
    products() {
      return config.getProducts(5);
    }
  }
};
</script>

<style scoped>
.sample-component {
  border-radius: 10px;
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
