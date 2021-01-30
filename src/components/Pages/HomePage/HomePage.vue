<template>
  <div :class="classes">
    <lander
      :img1="landerConfig.images[0]"
      :img2="landerConfig.images[1]"
      :img3="landerConfig.images[2]"
    />
    <products label="featured" :products="productsData.featured.products" />
    <Advert
      :images="advertConfig.advert1.images"
      :view="advertConfig.advert1.view"
    />
    <products
      label="new_arrivals"
      :products="productsData.new_arrivals.products"
    />
    <Advert
      :images="advertConfig.advert2.images"
      :view="advertConfig.advert2.view"
    />
    <products label="best_deals" :products="productsData.best_deals.products" />
  </div>
</template>

<script>
import Lander from "@/components/Landers/Lander";
import Products from "@/components/Products/Products";
import Advert from "@/components/Adverts/Advert";

export default {
  name: "HomePage",
  components: {
    Lander,
    Products,
    Advert
  },
  props: {
    landerConfig: {
      type: Object,
      default: () => ({
        view: "default",
        images: ["/image-path-1", "/image-path-2", "/image-path-3"],
        classes: ""
      }),
      required: true
    },
    productsData: {
      type: Object,
      default: () => ({
        featured: {
          products: [],
          classes: ""
        },
        new_arrivals: {
          products: [],
          classes: ""
        },
        best_deals: {
          products: [],
          classes: ""
        }
      }),
      required: true
    },
    advertConfig: {
      type: Object,
      default: () => ({
        advert1: {
          view: "single",
          images: ["/image-path"]
        },
        advert2: {
          view: "triple",
          images: ["/image-path", "/image-path", "/image-path"]
        }
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
