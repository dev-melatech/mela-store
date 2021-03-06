<template>
  <div
    class="melastore-side-menu"
    ref="melastoreSideMenu"
    :class="[
      isOpen === true ? 'melastore-side-menu-in' : '',
      isOpen === false ? 'melastore-side-menu-out' : ''
    ]"
  >
    <button class="btn melastore-toggle-side-menu" @click="onToggleMenu">
      <font-awesome-icon :icon="['fas', 'times']" />
    </button>
    <div>
      <div class="melastore-side-menu-header">
        <slot name="header"></slot>
      </div>
      <div
        ref="melastoreSideMenuContent"
        class="melastore-side-menu-header-content"
      >
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideMenu",
  components: {},
  props: {
    isOpen: {
      type: Boolean,
      default: null
    }
  },
  watch: {
    isOpen: {
      handler() {
        const that = this;
        setTimeout(function() {
          that.$nextTick(() => {
            that.$refs.melastoreSideMenuContent.scrollTop = 0;
          });
        }, 300);
      },
      deep: true
    }
  },
  mounted() {
    this.$refs.melastoreSideMenu.classList.remove("melastore-side-menu-out");
  },
  methods: {
    onToggleMenu() {
      this.$emit("close", !this.isOpen);
    }
  }
};
</script>

<style scoped>
.melastore-side-menu-header {
  padding: 20px;
  background-color: var(--ms-side-menu-header-background);
}
.melastore-side-menu-header-content {
  height: 100vh;
  overflow-y: scroll;
  padding: 20px 20px 150px 20px;
}
.melastore-toggle-side-menu {
  position: absolute;
  left: 100%;
  color: white;
  top: 20px;
  background: transparent;
  font-size: 30px;
}
.melastore-side-menu {
  background: white;
  position: fixed;
  width: 80%;
  height: 100vh;
  top: 0;
  left: -2000px;
  bottom: 0;
  z-index: 100000000;
  -webkit-box-shadow: 4px 0px 5px 0px rgb(69, 68, 69);
  -moz-box-shadow: 4px 0px 5px 0px rgb(69, 68, 69);
  box-shadow: 4px 0px 5px 0px rgb(69, 68, 69);
}

.melastore-side-menu-in {
  -webkit-animation: melastore-side-menu-right 0.5s forwards;
  animation: melastore-side-menu-right 0.5s forwards;
}

.melastore-side-menu-out {
  -webkit-animation: melastore-side-menu-left 0.5s forwards;
  animation: melastore-side-menu-left 0.5s forwards;
}

@keyframes melastore-side-menu-right {
  0% {
    z-index: 100000000;

    left: -2000px;
  }

  100% {
    left: 0%;
    width: 30%;
    z-index: 100000000;
  }
}

@-webkit-keyframes melastore-side-menu-right {
  0% {
    z-index: 100000000;

    left: -2000px;
  }

  100% {
    left: 0%;
    width: 30%;
    z-index: 100000000;
  }
}

@keyframes melastore-side-menu-left {
  0% {
    left: 0%;
    width: 30%;
    z-index: 100000000;
  }
  100% {
    left: -2000px;
    width: 30%;
    z-index: 100000000;
  }
}

@-webkit-keyframes melastore-side-menu-left {
  0% {
    left: 0%;
    width: 30%;
    z-index: 100000000;
  }
  100% {
    left: -2000px;
    width: 30%;
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
  @keyframes melastore-side-menu-right {
    0% {
      z-index: 10000;
      left: -2000px;
    }

    100% {
      left: 0%;
      width: 45%;
      z-index: 10000;
    }
  }
  @-webkit-keyframes melastore-side-menu-right {
    0% {
      z-index: 10000;
      left: -2000px;
    }

    100% {
      left: 0%;
      width: 45%;
      z-index: 10000;
    }
  }
  @keyframes melastore-side-menu-left {
    0% {
      left: 0%;
      width: 45%;
      z-index: 10000;
    }
    100% {
      left: -2000px;
      width: 45%;
      z-index: 10000;
    }
  }
  @-webkit-keyframes melastore-side-menu-left {
    0% {
      left: 0%;
      width: 45%;
      z-index: 10000;
    }
    100% {
      left: -2000px;
      width: 45%;
      z-index: 10000;
    }
  }
}

/* small mobile :576px. */

@media (min-width: 576px) and (max-width: 767px) {
  @keyframes melastore-side-menu-right {
    0% {
      z-index: 10000;
      left: -2000px;
    }

    100% {
      left: 0%;
      width: 60%;
      z-index: 10000;
    }
  }
  @-webkit-keyframes melastore-side-menu-right {
    0% {
      z-index: 10000;
      left: -2000px;
    }

    100% {
      left: 0%;
      width: 60%;
      z-index: 10000;
    }
  }
  @keyframes melastore-side-menu-left {
    0% {
      left: 0%;
      width: 60%;
      z-index: 10000;
    }
    100% {
      left: -2000px;
      width: 60%;
      z-index: 10000;
    }
  }
  @-webkit-keyframes melastore-side-menu-left {
    0% {
      left: 0%;
      width: 60%;
      z-index: 10000;
    }
    100% {
      left: -2000px;
      width: 60%;
      z-index: 10000;
    }
  }
}

/* extra small mobile 320px. */

@media (max-width: 575px) {
  @keyframes melastore-side-menu-right {
    0% {
      z-index: 100000000;
      left: -2000px;
    }

    100% {
      left: 0%;
      width: 80%;
      z-index: 100000000;
    }
  }

  @-webkit-keyframes melastore-side-menu-right {
    0% {
      z-index: 100000000;
      left: -2000px;
    }

    100% {
      left: 0%;
      width: 80%;
      z-index: 100000000;
    }
  }

  @keyframes melastore-side-menu-left {
    0% {
      left: 0%;
      width: 80%;
      z-index: 100000000;
    }
    100% {
      left: -2000px;
      width: 80%;
      z-index: 100000000;
    }
  }

  @-webkit-keyframes melastore-side-menu-left {
    0% {
      left: 0%;
      width: 80%;
      z-index: 100000000;
    }
    100% {
      left: -2000px;
      width: 80%;
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
