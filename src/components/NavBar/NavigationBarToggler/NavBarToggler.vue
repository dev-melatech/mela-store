<template>
  <b-button @click="onToggleMenu" class="melatech-ui-navbar-toggle-navbar">
    <font-awesome-icon v-if="isOpen" :icon="['fas', 'times']" />
    <font-awesome-icon v-else :icon="['fas', 'bars']" />
  </b-button>
</template>

<script>
export default {
  name: "NavBarToggler",
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  emits: ["click", ""],
  methods: {
    onToggleMenu() {
      this.$emit("click", !this.isOpen);
    }
  }
};
</script>

<style scoped>
.melatech-ui-navbar-toggle-navbar {
  background: none !important;
  border: none !important;
  color: #333 !important;
  width: 40px;
}
.melatech-ui-navbar-toggle-navbar:hover {
  color: #666 !important;
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
