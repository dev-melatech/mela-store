<template>
  <div class="mt-5 mb-5" :class="classes">
    <b-container>
      <b-row>
        <b-col lg="4" sm="12">
          <img :src="img1" class="w-100 mb-4" alt="" />
        </b-col>
        <b-col lg="4" sm="12">
          <img :src="img2" class="w-100 mb-4" alt="" />
        </b-col>
        <b-col lg="4" sm="12">
          <img :src="img3" class="w-100 mb-4" alt="" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Advert2",
  props: {
    img1: {
      type: String,
      default: "",
      required: true
    },
    img2: {
      type: String,
      default: "",
      required: true
    },
    img3: {
      type: String,
      default: "",
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
