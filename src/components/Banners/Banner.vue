<template>
  <div class="mt-5 mb-5 melastore-banners" :class="classes">
    <b-container>
      <!--dingle view-->
      <b-row v-if="banners.length === 1">
        <b-col cols="12" class="melastore-banners-col">
          <img :src="banners[0]" class="w-100 rounded" alt="banner" />
        </b-col>
      </b-row>
      <!--double view-->
      <b-row v-if="banners.length === 2">
        <b-col
          lg="6"
          md="6"
          sm="12"
          v-for="(image, index) in banners"
          :key="index"
          class="melastore-banners-col"
        >
          <img
            :src="image"
            class="w-100  rounded"
            :class="index !== 1 && 'mb-4'"
            alt="banner"
          />
        </b-col>
      </b-row>
      <!--triple view-->
      <b-row v-if="banners.length === 3">
        <b-col
          lg="4"
          md="4"
          sm="12"
          v-for="(image, index) in banners"
          :key="index"
          class="melastore-banners-col"
        >
          <img
            :src="image"
            class="w-100 rounded"
            :class="index !== 2 && 'mb-4'"
            alt="banner"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Banner",
  props: {
    banners: {
      type: Array,
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
.melastore-banners img {
  /*-webkit-box-shadow: 0px 0px 17px 1px rgba(163, 163, 163, 1);*/
  /*-moz-box-shadow: 0px 0px 17px 1px rgba(163, 163, 163, 1);*/
  /*box-shadow: 0px 0px 17px 1px rgba(163, 163, 163, 1);*/
}
.melastore-banners .melastore-banners-col:last-child {
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
