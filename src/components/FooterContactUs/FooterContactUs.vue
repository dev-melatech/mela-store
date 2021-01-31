<template>
  <div class="melatech_ui_footer_widget" :class="classes">
    <h2>{{ label }}</h2>
    <ul>
      <li>
        <font-awesome-icon :icon="['fas', 'map-marker-alt']" />
        <span class="d-inline-block">
          {{ address }}
        </span>
      </li>
      <li>
        <font-awesome-icon :icon="['fas', 'phone']" />
        <a
          :href="`tel:${phone}`"
          class="d-block"
          v-for="(phone, index) in phones"
          :key="index"
          >{{ phone }}</a
        >
      </li>
      <li>
        <font-awesome-icon :icon="['far', 'envelope']" />
        <a
          :href="`mailto:${email}`"
          class="d-block"
          v-for="(email, index) in emails"
          :key="index"
          >{{ email }}</a
        >
      </li>
    </ul>
  </div></template
>

<script>
export default {
  name: "FooterContactUs",
  props: {
    label: {
      type: String,
      default: "Contact Us"
    },
    address: {
      type: String,
      default: "House No. 09 , Road No.25 Dhaka,Bangladesh"
    },
    phones: {
      type: Array,
      default: () => [
        "+1(888)234-56789",
        "+1(888)234-56789",
        "+1(888)234-56789"
      ]
    },
    emails: {
      type: Array,
      default: () => [
        "youremail@gmail.com",
        "youremail@gmail.com",
        "youremail@gmail.com"
      ]
    },
    classes: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped>
.melatech_ui_footer_widget ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.melatech_ui_footer_widget ul li {
  margin-bottom: 15px;
  padding-left: 35px;
  position: relative;
  color: #333;
}
.melatech_ui_footer_widget ul li svg {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  font-size: 18px;
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
