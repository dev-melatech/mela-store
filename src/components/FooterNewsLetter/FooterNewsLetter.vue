<template>
  <div class="melatech_ui_footer_widget">
    <h2>{{ label }}</h2>
    <p>{{ labelText }}</p>
    <b-input-group class="mb-3">
      <b-form-input
        placeholder="Enter Your email address"
        class="subscribe--input"
      ></b-form-input>
      <b-input-group-append>
        <b-button size="sm" class="subscribe--btn"
          ><font-awesome-icon :icon="['fas', 'long-arrow-alt-right']"
        /></b-button>
      </b-input-group-append>
    </b-input-group>
  </div>
</template>

<script>
export default {
  name: "FooterNewsLetter",
  props: {
    label: {
      type: String,
      default: "Join Our NewsLetter"
    },
    labelText: {
      type: String,
      default:
        "Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from"
    }
  }
};
</script>

<style scoped>
.subscribe--input {
  background: transparent;
  border: 1px solid #b7b7b7;
  height: 40px;
  width: 100%;
  padding: 0px 45px 0px 10px;
  border-radius: 0.25rem !important;
}
.subscribe--btn {
  position: absolute;
  right: -2px;
  background: #d7d7d7;
  height: 40px;
  width: 40px;
  border: none;
  bottom: 0;
  z-index: 10;
  color: #fff;
  border-radius: 0 0.25rem 0.25rem 0;
}
.subscribe--btn:hover {
  background: #999;
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
