<template>
  <div :class="classes" class="melastore-product-cards">
    <b-container>
      <div class="melastore-section-title text-center">
        <h3>
          {{ sectionTitle || title }}
        </h3>
        <hr />
      </div>
      <b-row>
        <b-col
          lg="2"
          md="6"
          cols="6"
          v-for="(product, index) in products"
          :key="index"
          style="padding: 5px"
        >
          <div
            class="melastore-featured-products-card rounded"
            style="margin-bottom: 3px"
          >
            <product-card
              :product="product"
              :currency="currency"
              @move-to-cart="$emit('move-to-cart', product)"
              @move-to-favourites="$emit('move-to-favourites', product)"
            >
              <template v-slot:product-title="{ item }">
                <slot name="product-title" :item="item">
                  <span class="melastore-product--title">
                    {{ item.title }}
                  </span>
                </slot>
              </template>
            </product-card>
          </div>
        </b-col>
        <b-col cols="12" class="text-center mt-4">
          <slot name="load-more-redirect">
            <button class="btn melastore-load-more-btn">
              View more
            </button>
          </slot>
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
    sectionTitle: {
      type: String,
      default: ""
    },
    classes: {
      type: String,
      default: ""
    },
    currency: {
      type: String,
      default: "$"
    },
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
        this.title = "New Arrivals";
      }
      if (key === "best_deals") {
        this.title = "Best Deals";
      }
    }
  }
};
</script>

<style scoped>
.melastore-load-more-btn {
  display: inline-block;
  padding: 8px 20px;
  border: 2px solid #333;
  font-weight: 700;
  text-transform: capitalize;
  color: #333;
}
.melastore-load-more-btn:hover {
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
