<template>
  <div class="mt-5 mb-5">
    <b-container>
      <div class="section-title text-center">
        <h3>
          {{ title }}
        </h3>
        <hr />
      </div>
      <b-row>
        <b-col lg="3" md="6" v-for="(product, index) in products" :key="index">
          <div class="featured-products-card mt-3 mb-3">
            <product-card :product="product" />
          </div>
        </b-col>
        <b-col cols="12 text-center">
          <button class="btn load-more--btn">
            View more
          </button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import ProductCard from "@/components/Products/ProductCard";
import ImageFile from "../../../static/images/featured/1.jpg";
export default {
  name: "Products",
  components: { ProductCard },
  props: {
    label: {
      type: String,
      default: "featured",
      required: true
    },
    products: {
      type: Array,
      default: () => [
        { id: 1, title: `Item 1`, price: 3000, image_link: ImageFile }
      ],
      required: true
    }
  },
  watch: {
    label: {
      handler(val) {
        this.setTitle(val);
      },
      deep: true
    }
  },
  data() {
    return {
      title: ""
    };
  },
  mounted() {
    this.setTitle(this.label);
  },
  methods: {
    setTitle(key) {
      if (key === "featured") {
        this.title = "Featured Products";
      }
      if (key === "new_arrivals") {
        this.title = "New Arrival";
      }
      if (key === "best_deals") {
        this.title = "Best Deals";
      }
    }
  }
};
</script>

<style scoped>
/*.featured-products-card ul {*/
/*  list-style: outside none none;*/
/*  margin: 0;*/
/*  padding: 0;*/
/*}*/
/*.featured-products-card ul li {*/
/*  display: inline-block;*/
/*}*/
/*.featured-products-card ul button {*/
/*  height: 30px;*/
/*  width: 30px;*/
/*  border: 1px solid #a7a7a7;*/
/*  display: block;*/
/*  text-align: center;*/
/*  line-height: 30px;*/
/*  border-radius: 50%;*/
/*  color: #333;*/
/*  padding: 0;*/
/*  font-size: 12px;*/
/*}*/
/*.featured-products-card ul li button:hover {*/
/*  border-color: #999;*/
/*  background: #999;*/
/*  color: #fff;*/
/*}*/
/*.featured-products-card ul li button {*/
/*  height: 30px;*/
/*  width: 30px;*/
/*  border: 1px solid #a7a7a7;*/
/*  display: block;*/
/*  text-align: center;*/
/*  line-height: 30px;*/
/*  border-radius: 50%;*/
/*  color: #333;*/
/*}*/
.load-more--btn {
  display: inline-block;
  padding: 5px 20px;
  border: 1px solid #333;
  font-weight: 700;
  text-transform: capitalize;
  color: #333;
}
.load-more--btn:hover {
  background-color: #333;
  color: white;
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
