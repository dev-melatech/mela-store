<template>
  <div class="info mt-5 mb-5 text-center">
    <b-container>
      <b-row>
        <b-col lg="3" md="6" v-for="(info, index) in infos" :key="index">
          <div class="info-section mb-3" :class="'info-section-' + (index + 1)">
            <div class="info-icon-box">
              <font-awesome-icon :icon="['far', 'money-bill-alt']" />
            </div>
            <span class="info-title d-block mb-1">
              {{ info.title }}
            </span>
            <span class="info-sub-text d-inline-block">
              {{ info.subText }}
            </span>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Info",
  data() {
    return {
      infos: [
        {
          title: "Money Back Guarantee",
          subText:
            "There are many variations of passaes of Lorem Ipsum available, but the majority"
        },
        {
          title: "Money Back Guarantee",
          subText:
            "There are many variations of passaes of Lorem Ipsum available, but the majority"
        },
        {
          title: "Money Back Guarantee",
          subText:
            "There are many variations of passaes of Lorem Ipsum available, but the majority"
        },
        {
          title: "Money Back Guarantee",
          subText:
            "There are many variations of passaes of Lorem Ipsum available, but the majority"
        }
      ]
    };
  }
};
</script>

<style scoped>
.info {
  /*background: orange;*/
  /*height: 400px;*/
  /*width: 100%;*/
}
.info-icon-box {
  width: 70px;
  height: 70px;
  background: pink;
  border-radius: 50%;
  margin: 0 auto 10px auto;
}
.info-title {
  font-weight: 700;
}
.info-sub-text {
  font-weight: 600;
  font-size: 14px;
  color: #999;
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
  .info-section-3,
  .info-section-4 {
    margin-bottom: 0 !important;
  }
}

/* small mobile :576px. */

@media (min-width: 576px) and (max-width: 767px) {
}

/* extra small mobile 320px. */

@media (max-width: 575px) {
  .info-section-4 {
    margin-bottom: 0 !important;
  }
}

/* Large Mobile :480px. */

@media only screen and (min-width: 480px) and (max-width: 575px) {
}

@media only screen and (max-width: 575px) and (min-width: 480px) {
}
</style>
