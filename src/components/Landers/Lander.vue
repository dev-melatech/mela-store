<template>
  <div class="lander-1 mb-5 mt-5" :class="classes">
    <b-container>
      <b-row>
        <b-col lg="5" md="5">
          <div class="lander-section-1">
            <img :src="img1" class="w-100 h-100" alt="" />
          </div>
        </b-col>
        <b-col lg="7" md="7">
          <b-row>
            <b-col cols="12">
              <div class="lander-section-2">
                <img :src="img2" class="w-100 h-100" alt="" />
              </div>
            </b-col>
            <b-col cols="12">
              <div class="lander-section-3">
                <img :src="img3" class="w-100 h-100" alt="" />
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
.lander-1 {
  /*background: brown;*/
}
.lander-section-1 {
  /*background: red;*/
  height: 600px;
}
.lander-section-2 {
  /*background: green;*/
  height: 285px;
}
.lander-section-3 {
  /*background: blue;*/
  height: 285px;
  margin-top: 30px;
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
  .lander-section-1 {
    height: 390px;
    margin-bottom: 20px;
  }
  .lander-section-2 {
    height: 180px;
  }
  .lander-section-3 {
    height: 180px;
    margin-top: 30px;
  }
}

/* small mobile :576px. */

@media (min-width: 576px) and (max-width: 767px) {
}

/* extra small mobile 320px. */

@media (max-width: 575px) {
  .lander-section-1 {
    height: 500px;
    margin-bottom: 20px;
  }
  .lander-section-2 {
    height: 180px;
  }
  .lander-section-3 {
    height: 180px;
    margin-top: 20px;
  }
}

/* Large Mobile :480px. */

@media only screen and (min-width: 480px) and (max-width: 575px) {
}

@media only screen and (max-width: 575px) and (min-width: 480px) {
  .lander-section-1 {
    height: 600px;
    margin-bottom: 20px;
  }
  .lander-section-2 {
    height: 180px;
  }
  .lander-section-3 {
    height: 180px;
    margin-top: 20px;
  }
}
</style>
