<template>
  <div
    class="melastore-page-loader"
    ref="melastorePageLoader"
    :class="[loading ? '' : 'fade', classes]"
  >
    <div :class="animationClass">
      <img :src="imgSrc" alt="loader" class="img-fluid" />
    </div>
  </div>
</template>

<script>
export default {
  name: "PageLoader",
  props: {
    loading: {
      type: Boolean,
      default: null,
      required: true
    },
    animationClass: {
      type: String,
      default: ""
    },
    imgSrc: {
      type: String,
      default: "",
      required: true
    },
    classes: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  watch: {
    loading() {
      const that = this;
      if (!this.loading) {
        setTimeout(function() {
          that.$refs.melastorePageLoader.classList.add("d-none");
        }, 150);
      }
    }
  },
  created() {},
  mounted() {
    if (!this.loading) {
      this.$refs.melastorePageLoader.classList.add("d-none");
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
