<template>
  <div class="mt-5 mb-5" :class="classes">
    <b-container>
      <!--dingle view-->
      <b-row v-if="view === 'single'">
        <b-col cols="12">
          <img :src="singleViewImage" class="w-100" alt="" />
        </b-col>
      </b-row>
      <!--triple view-->
      <b-row v-if="view === 'triple'">
        <b-col
          lg="4"
          md="4"
          sm="12"
          v-for="(image, index) in tripleViewImages"
          :key="index"
        >
          <img :src="image" class="w-100 mb-4" alt="" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Advert",
  props: {
    singleViewImage: {
      type: String,
      default: "img/2.25959d72.jpg"
    },
    tripleViewImages: {
      type: Array,
      default: () => [
        "img/2.25959d72.jpg",
        "img/2.25959d72.jpg",
        "img/2.25959d72.jpg"
      ]
    },
    classes: {
      type: String,
      default: ""
    },
    view: {
      type: String,
      default: "single",
      required: true
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
