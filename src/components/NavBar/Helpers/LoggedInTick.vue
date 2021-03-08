<template>
  <div
    class="melastore-logged-in-tick text-center"
    :style="{ backgroundColor: tickColor }"
  ></div>
</template>

<script>
export default {
  name: "LoggedInTick",
  props: {
    tickColor: {
      type: String,
      default: "rgb(0 197 61)"
    }
  }
};
</script>

<style scoped>
.melastore-logged-in-tick {
  position: relative;
  height: 10px;
  width: 10px;
  background: green;
  border-radius: 50%;
  line-height: 20px;
  top: -8px;
  left: 12px;
  font-size: 0.75vw;
  color: white !important;
  margin-bottom: -10px;
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
