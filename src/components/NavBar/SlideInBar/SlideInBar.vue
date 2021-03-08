<template>
  <div
    id="melastoreSlideInBar"
    class="melastore-slide-in-bar"
    ref="melastoreSlideInBar"
    :class="[
      isOpen === true ? 'melastore-slide-in-bar-in' : '',
      isOpen === false ? 'melastore-slide-in-bar-out' : '',
      classes
    ]"
  >
    <!--slide in bar header-->
    <div class="melastore-slide-in-bar-header" ref="melastoreSlideInBarHeader">
      <button
        class="btn melastore-slide-in-bar-close-btn mr-3"
        @click="onToggleMenu"
      >
        <font-awesome-icon :icon="['fas', 'chevron-right']" />
      </button>
      <span v-for="(link, index) in links" :key="index">
        <slot
          v-if="title === link.title"
          :name="`${link.title.toLowerCase()}-header`"
        ></slot>
      </span>
    </div>

    <!--slide in bar content-->
    <div
      ref="melastoreSlideInBarContent"
      class="melastore-slide-in-bar-content"
      :class="contentClasses"
    >
      <div v-for="(link, index) in links" :key="index">
        <slot
          v-if="title === link.title"
          :name="link.title.toLowerCase()"
        ></slot>
      </div>
      <ms-loader ref="melastoreLoader" />
    </div>

    <!--slide in bar footer-->
    <div
      class="melastore-slide-in-bar-footer"
      ref="melastoreSlideInBarFooter"
      v-if="!hideFooter"
    >
      <div v-for="(link, index) in links" :key="index">
        <slot
          v-if="title === link.title"
          :name="`${link.title.toLowerCase()}-footer`"
        ></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SlideInBar",
  components: {},
  props: {
    links: {
      type: Array,
      default: () => [],
      required: true
    },
    isOpen: {
      type: Boolean,
      default: null
    },
    hideFooter: {
      type: Boolean,
      default: false
    },
    classes: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: "Wishlist"
    }
  },
  watch: {
    title: {
      handler() {
        const that = this;
        setTimeout(function() {
          that.$nextTick(() => {
            that.$refs.melastoreSlideInBarContent.scrollTop = 0;
          });
        }, 300);
      },
      deep: true
    }
  },
  computed: {
    contentClasses() {
      let classes;
      this.links.forEach(link => {
        if (this.title === link.title) {
          classes = link.content_classes;
        }
      });
      return classes;
    }
  },
  data() {
    return {
      contentStyle: {}
    };
  },
  created() {
    // window.addEventListener("resize", this.setContentHeight);
  },
  destroyed() {
    // window.removeEventListener("resize", this.setContentHeight);
  },
  mounted() {
    this.$refs.melastoreSlideInBar.classList.remove(
      "melastore-slide-in-bar-out"
    );
  },
  methods: {
    onToggleMenu() {
      this.$emit("toggle-slide-in", { title: this.title });
    }
  }
};
</script>

<style scoped>
.melastore-slide-in-bar {
  background: white;
  position: fixed;
  width: 80%;
  top: 0;
  right: -2000px;
  bottom: 0;
  z-index: 100000000;
  -webkit-box-shadow: -4px 0px 5px 0px rgb(69, 68, 69);
  -moz-box-shadow: -4px 0px 5px 0px rgba(69, 68, 69, 1);
  box-shadow: -4px 0px 5px 0px rgb(69, 68, 69);
}
.melastore-slide-in-bar-header {
  background: var(--default-color);
  color: #fff;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 14px;
  padding: 20px;
}
.melastore-slide-in-bar-content {
  height: 100vh;
  padding: 15px;
  overflow-y: scroll;
}

.melastore-slide-in-bar-footer {
  border-top: 2px solid var(--border-color);
  background: white;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 15px;
  z-index: 1000;
  margin-top: 15px;
  -webkit-box-shadow: 0px -5px 5px 0px rgb(230 227 230);
  -moz-box-shadow: 0px -5px 5px 0px rgba(230, 227, 230, 1);
  box-shadow: 0px -5px 5px 0px rgb(230 227 230);
}
.melastore-slide-in-bar-close-btn {
  border-radius: 50px;
  background: white;
  color: #666;
  padding: 3px 10px;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(235, 217, 235, 1);
  -moz-box-shadow: 0px 0px 5px 0px rgba(235, 217, 235, 1);
  box-shadow: 0px 0px 5px 0px rgba(235, 217, 235, 1);
}

.melastore-slide-in-bar-in {
  -webkit-animation: melastore-slide-in-bar-right 0.5s forwards;
  animation: melastore-slide-in-bar-right 0.5s forwards;
}

.melastore-slide-in-bar-out {
  -webkit-animation: melastore-slide-in-bar-left 0.5s forwards;
  animation: melastore-slide-in-bar-left 0.5s forwards;
}

@keyframes melastore-slide-in-bar-right {
  0% {
    z-index: 100000000;
    right: -2000px;
  }

  100% {
    right: 0;
    width: 40%;
    z-index: 100000000;
  }
}

@-webkit-keyframes melastore-slide-in-bar-right {
  0% {
    z-index: 100000000;
    right: -2000px;
  }

  100% {
    right: 0;
    width: 40%;
    z-index: 100000000;
  }
}

@keyframes melastore-slide-in-bar-left {
  0% {
    right: 0;
    width: 40%;
    z-index: 100000000;
  }
  100% {
    right: -2000px;
    width: 40%;
    z-index: 100000000;
  }
}

@-webkit-keyframes melastore-slide-in-bar-left {
  0% {
    right: 0;
    width: 40%;
    z-index: 100000000;
  }
  100% {
    right: -2000px;
    width: 40%;
    z-index: 100000000;
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
  @keyframes melastore-slide-in-bar-right {
    0% {
      z-index: 10000;
      right: -2000px;
    }

    100% {
      right: 0;
      width: 55%;
      z-index: 10000;
    }
  }
  @-webkit-keyframes melastore-slide-in-bar-right {
    0% {
      z-index: 10000;
      right: -2000px;
    }

    100% {
      right: 0;
      width: 55%;
      z-index: 10000;
    }
  }
  @keyframes melastore-slide-in-bar-left {
    0% {
      right: 0;
      width: 55%;
      z-index: 10000;
    }
    100% {
      right: -2000px;
      width: 55%;
      z-index: 10000;
    }
  }
  @-webkit-keyframes melastore-slide-in-bar-left {
    0% {
      right: 0;
      width: 55%;
      z-index: 10000;
    }
    100% {
      right: -2000px;
      width: 55%;
      z-index: 10000;
    }
  }
}

/* small mobile :576px. */

@media (min-width: 576px) and (max-width: 767px) {
  @keyframes melastore-slide-in-bar-right {
    0% {
      z-index: 10000;
      right: -2000px;
    }

    100% {
      right: 0;
      width: 60%;
      z-index: 10000;
    }
  }
  @-webkit-keyframes melastore-slide-in-bar-right {
    0% {
      z-index: 10000;
      right: -2000px;
    }

    100% {
      right: 0;
      width: 60%;
      z-index: 10000;
    }
  }
  @keyframes melastore-slide-in-bar-left {
    0% {
      right: 0;
      width: 60%;
      z-index: 10000;
    }
    100% {
      right: -2000px;
      width: 60%;
      z-index: 10000;
    }
  }
  @-webkit-keyframes melastore-slide-in-bar-left {
    0% {
      right: 0;
      width: 60%;
      z-index: 10000;
    }
    100% {
      right: -2000px;
      width: 60%;
      z-index: 10000;
    }
  }
}

/* extra small mobile 320px. */

@media (max-width: 575px) {
  @keyframes melastore-slide-in-bar-right {
    0% {
      z-index: 100000000;
      right: -2000px;
    }

    100% {
      right: 0;
      width: 100%;
      z-index: 100000000;
    }
  }

  @-webkit-keyframes melastore-slide-in-bar-right {
    0% {
      z-index: 100000000;
      right: -2000px;
    }

    100% {
      right: 0;
      width: 100%;
      z-index: 100000000;
    }
  }

  @keyframes melastore-slide-in-bar-left {
    0% {
      right: 0;
      width: 100%;
      z-index: 100000000;
    }
    100% {
      right: -2000px;
      width: 100%;
      z-index: 100000000;
    }
  }

  @-webkit-keyframes melastore-slide-in-bar-left {
    0% {
      right: 0;
      width: 100%;
      z-index: 100000000;
    }
    100% {
      right: -2000px;
      width: 100%;
      z-index: 100000000;
    }
  }
}

/* Large Mobile :480px. */

@media only screen and (min-width: 480px) and (max-width: 575px) {
}

@media only screen and (max-width: 575px) and (min-width: 480px) {
}
</style>
