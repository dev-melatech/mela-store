<template>
  <div
    class="count-circle text-center"
    :style="{ backgroundColor: backgroundColor }"
  >
    <span>{{ value }}</span>
  </div>
</template>

<script>
export default {
  name: "CountCircle",
  props: {
    backgroundColor: {
      type: String,
      default: "#333"
    },
    value: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style scoped>
.count-circle {
  position: relative;
  height: 23px;
  width: 23px;
  background: red;
  border-radius: 50%;
  line-height: 23px;
  top: -32px;
  left: 14px;
  margin-bottom: -20px;
  font-size: 0.8vw;
  color: white !important;
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
  .count-circle {
    font-size: 1.4vw;
  }
}

/* small mobile :576px. */

@media (min-width: 576px) and (max-width: 767px) {
  .count-circle {
    font-size: 2.8vw;
  }
}

/* extra small mobile 320px. */

@media (max-width: 575px) {
  .count-circle {
    font-size: 2.8vw;
  }
}

/* Large Mobile :480px. */

@media only screen and (min-width: 480px) and (max-width: 575px) {
  .count-circle {
    font-size: 2.8vw;
  }
}

@media only screen and (max-width: 575px) and (min-width: 480px) {
  .count-circle {
    font-size: 1.8vw;
  }
}
</style>
