<template>
  <div
    class="melastore-count-circle text-center"
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
.melastore-count-circle {
  position: relative;
  height: 20px;
  width: 20px;
  background: red;
  border-radius: 50%;
  line-height: 20px;
  top: -32px;
  left: 12px;
  margin-bottom: -20px;
  font-size: 0.75vw;
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
  .melastore-count-circle {
    font-size: 1.4vw;
  }
}

/* small mobile :576px. */

@media (min-width: 576px) and (max-width: 767px) {
  .melastore-count-circle {
    font-size: 1.8vw;
  }
}

/* extra small mobile 320px. */

@media (max-width: 575px) {
  .melastore-count-circle {
    font-size: 2.8vw;
  }
}

/* Large Mobile :480px. */

@media only screen and (min-width: 480px) and (max-width: 575px) {
  .melastore-count-circle {
    font-size: 2.8vw;
  }
}

@media only screen and (max-width: 575px) and (min-width: 480px) {
  .melastore-count-circle {
    font-size: 1.8vw;
  }
}
</style>
