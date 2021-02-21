<template>
  <div
    data-test="segment-loader"
    class="preloader-wrap"
    ref="loader"
    :class="[loader ? '' : 'fade', classes]"
  >
    <div class="spinner">
      <font-awesome-icon class="fa-spin" :icon="['fas', 'circle-notch']" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Loader",
  data() {
    return {
      loader: false
    };
  },
  watch: {
    loader() {
      const that = this;
      if (!this.loader) {
        setTimeout(function() {
          that.$refs.loader.classList.add("d-none");
        }, 150);
      }
    }
  },
  props: {
    classes: {
      type: String,
      default: ""
    }
  },
  created() {},
  mounted() {
    if (!this.loader) {
      this.$refs.loader.classList.add("d-none");
    }
  },
  methods: {
    toggleLoader() {
      this.loader = !this.loader;
    }
  }
};
</script>

<style scoped>
.preloader-wrap {
  position: absolute;
}
.preloader-wrap {
  /*border: 1px solid var(--border-color);*/
  /*z-index: 99999;*/
  z-index: 10;
  height: 100%;
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  background: #fff;
  top: 0;
  left: 0;
}
.shop.preloader-wrap {
  height: 70vh !important;
  border: 1px solid var(--border-color) !important;
  z-index: 11;
  top: -10px;
}
.spinner {
  width: 40px;
  height: 40px;
  margin: 100px auto;
  border-radius: 100%;
  /*-webkit-animation: sk-scaleout 1s infinite ease-in-out;*/
  /*animation: sk-scaleout 1s infinite ease-in-out;*/
}
@-webkit-keyframes sk-scaleout {
  0% {
    -webkit-transform: scale(0);
  }
  100% {
    -webkit-transform: scale(1);
    opacity: 0;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  }
}
@keyframes sk-scaleout {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 0;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  }
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
