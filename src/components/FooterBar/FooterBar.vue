<template>
  <div id="melatech_ui_footer" :class="classes">
    <footer>
      <div class="footer-top">
        <slot></slot>
      </div>
      <div class="footer-bottom text-center">
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
      default: "Your Website Name All Right Reserved"
    },
    classes: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped>
.footer-top {
  background-color: #f8f6f6;
  padding: 80px 0 0 0;
}
.footer-bottom {
  padding: 20px 0;
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
