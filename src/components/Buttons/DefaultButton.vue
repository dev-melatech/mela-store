<template>
  <button class="btn default-btn w-100" :type="type" @click="$emit('click')">
    <span class="mr-1" v-if="showSpinner">
      <font-awesome-icon class="fa-spin" :icon="['fas', 'circle-notch']" />
    </span>
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "DefaultButton",
  props: {
    text: {
      type: String,
      default: "",
      required: true
    },
    type: {
      type: String,
      default: "",
      required: true
    },
    showSpinner: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.default-btn {
  background-color: #333;
  color: #ffff !important;
  padding: 15px;
  font-weight: 700;
  border-radius: 30px;
}
.default-btn:hover {
  background-color: #666;
  color: #ffff !important;
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
