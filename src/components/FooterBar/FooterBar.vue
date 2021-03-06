<template>
  <div id="melastore-footer" :class="classes">
    <footer>
      <div class="melastore-footer-top">
        <slot></slot>
      </div>
      <div class="melastore-footer-bottom text-center">
        <b-container>
          <b-row>
            <b-col cols="12">
              <p>©{{ new Date().getFullYear() }} {{ copyrightText }}</p>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "FooterBar",
  props: {
    copyrightText: {
      type: String,
      default: ""
    },
    classes: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped>
.melastore-footer-top {
  background-color: var(--ms-footer-background);
  padding: 40px 0 0 0;
}
.melastore-footer-bottom {
  padding: 20px 0 10px 0;
  background-color: var(--ms-footer-bottom-background);
  font-size: 12px;
  color: var(--ms-footer-text-color);
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
