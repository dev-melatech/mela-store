<template>
  <div class="melastore-lander-default mt-5 mb-5" :class="classes">
    <b-container>
      <b-row>
        <b-col lg="5">
          <div class="category-wrap lander-section-1 mb-5 mb-lg-0">
            <img :src="imageLink1" class="w-100 h-auto" alt="" />
          </div>
        </b-col>
        <b-col lg="7">
          <div class="category-wrap lander-section-2 mb-5">
            <img :src="imageLink2" class="w-100 h-auto" alt="" />
          </div>
          <b-row>
            <b-col lg="7">
              <div class="category-wrap lander-section-3 mb-5 mb-lg-0">
                <img :src="imageLink3" class="w-100 h-auto" alt="" />
              </div>
            </b-col>
            <b-col lg="5">
              <div class="category-wrap lander-section-4 mb-5 mb-lg-0">
                <img :src="imageLink4" class="w-100 h-auto" alt="" />
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Lander",
  props: {
    imageLink1: {
      type: String,
      default: "",
      required: true
    },
    imageLink2: {
      type: String,
      default: "",
      required: true
    },
    imageLink3: {
      type: String,
      default: "",
      required: true
    },
    imageLink4: {
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
.melastore-lander-default {
}
.category-wrap {
  position: relative;
  overflow: hidden;
}

/* (1366x768) WXGA Display */

@media screen and (min-width: 1366px) and (max-width: 1919px) {
  .lander-section-2 {
    margin-bottom: 30px !important;
  }
}

@media (min-width: 1198px) and (max-width: 1365.9px) {
  .lander-section-2 {
    margin-bottom: 30px !important;
  }
}

/* Normal desktop :992px. */

@media (min-width: 992px) and (max-width: 1197px) {
  .lander-section-2 {
    margin-bottom: 30px !important;
  }
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
