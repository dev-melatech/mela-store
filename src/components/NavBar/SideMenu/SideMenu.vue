<template>
  <div
    class="melatech-ui-side-menu"
    ref="melatechUiSideMenu"
    :class="[
      isOpen === true ? 'melatech-ui-side-menu-in' : '',
      isOpen === false ? 'melatech-ui-side-menu-out' : ''
    ]"
  >
    <h1>
      jnjdnjndnjgjngf
    </h1>
    <nav-bar-toggler @click="onToggleMenu" :is-open="isOpen" />
  </div>
</template>

<script>
import NavBarToggler from "@/components/NavBar/NavigationBarToggler/NavBarToggler";
export default {
  name: "SideMenu",
  components: { NavBarToggler },
  props: {
    isOpen: {
      type: Boolean,
      default: null
    }
  },
  mounted() {
    this.$refs.melatechUiSideMenu.classList.remove("melatech-ui-side-menu-out");
    console.log(this.$refs.melatechUiSideMenu.classList);
  },
  methods: {
    onToggleMenu() {
      this.$emit("click", !this.isOpen);
    }
  }
};
</script>

<style scoped>
.melatech-ui-side-menu {
  background: red;
  position: fixed;
  width: 80%;
  height: 100vh;
  top: 0;
  left: -2000px;
  bottom: 0;
  z-index: 100000000;
}

.melatech-ui-side-menu-in {
  -webkit-animation: melatech-ui-side-menu-right 0.5s forwards;
  animation: melatech-ui-side-menu-right 0.5s forwards;
}

.melatech-ui-side-menu-out {
  -webkit-animation: melatech-ui-side-menu-left 0.5s forwards;
  animation: melatech-ui-side-menu-left 0.5s forwards;
}

@keyframes melatech-ui-side-menu-right {
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

@-webkit-keyframes melatech-ui-side-menu-right {
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

@keyframes melatech-ui-side-menu-left {
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

@-webkit-keyframes melatech-ui-side-menu-left {
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
  @keyframes melatech-ui-side-menu-right {
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
  @-webkit-keyframes melatech-ui-side-menu-right {
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
  @keyframes melatech-ui-side-menu-left {
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
  @-webkit-keyframes melatech-ui-side-menu-left {
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
  @keyframes melatech-ui-side-menu-right {
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
  @-webkit-keyframes melatech-ui-side-menu-right {
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
  @keyframes melatech-ui-side-menu-left {
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
  @-webkit-keyframes melatech-ui-side-menu-left {
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
  @keyframes melatech-ui-side-menu-right {
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

  @-webkit-keyframes melatech-ui-side-menu-right {
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

  @keyframes melatech-ui-side-menu-left {
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

  @-webkit-keyframes melatech-ui-side-menu-left {
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
