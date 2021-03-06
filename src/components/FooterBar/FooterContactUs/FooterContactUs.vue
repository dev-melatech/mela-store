<template>
  <div class="melastore-footer-contact-us" :class="classes">
    <h2>{{ label }}</h2>
    <ul>
      <li v-if="addresses.length !== 0">
        <font-awesome-icon :icon="['fas', 'map-marker-alt']" />
        <span
          class="d-inline-block"
          v-for="(address, index) in addresses"
          :key="index"
        >
          {{ address }}
          <hr v-if="index !== addresses.length - 1" />
        </span>
      </li>
      <li v-if="phones.length !== 0">
        <font-awesome-icon :icon="['fas', 'phone']" />
        <a
          :href="`tel:${phone}`"
          class="d-block"
          v-for="(phone, index) in phones"
          :key="index"
          >{{ phone }}
          <hr v-if="index !== addresses.length - 1" />
        </a>
      </li>
      <li v-if="emails.length !== 0">
        <font-awesome-icon :icon="['far', 'envelope']" />
        <a
          :href="`mailto:${email}`"
          class="d-block"
          v-for="(email, index) in emails"
          :key="index"
          >{{ email }}
          <hr v-if="index !== addresses.length - 1" />
        </a>
      </li>
    </ul></div
></template>

<script>
export default {
  name: "FooterContactUs",
  props: {
    label: {
      type: String,
      default: "Contact Us"
    },
    addresses: {
      type: Array,
      default: () => []
    },
    phones: {
      type: Array,
      default: () => []
    },
    emails: {
      type: Array,
      default: () => []
    },
    classes: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped>
.melastore-footer-contact-us hr {
  margin: 6px 0;
  height: 1px;
  border: none;
  background-color: var(--ms-border-color);
  width: 100px;
}
.melastore-footer-contact-us ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.melastore-footer-contact-us ul li {
  margin-bottom: 15px;
  padding-left: 35px;
  position: relative;
  font-size: 14px;
  color: var(--ms-footer-contact-us-icons-color);
}

.melastore-footer-contact-us ul li {
  color: var(--ms-footer-text-color);
}

.melastore-footer-contact-us ul li svg {
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
