<template>
  <div class="melastore-footer-socials" :class="classes">
    <h2>{{ label }}</h2>
    <p v-if="labelText">
      {{ labelText }}
    </p>
    <ul class="melastore-footer-social-icons d-flex">
      <li v-for="(link, index) in links" :key="index">
        <a :href="link.link" target="_blank" rel="noopener">
          <font-awesome-icon :icon="[link.icon.class, link.icon.name]" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FooterSocials",
  props: {
    links: {
      type: Array,
      default: () => [],
      required: true
    },
    label: {
      type: String,
      default: "Follow Us"
    },
    labelText: {
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
.melastore-footer-social-icons {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.melastore-footer-social-icons li {
  margin-right: 5px;
}
.melastore-footer-social-icons li a {
  height: 30px;
  width: 30px;
  line-height: 30px;
  border-radius: 50%;
  text-align: center;
  display: block;
  background: var(--ms-footer-social-icons-background);
  color: var(--ms-footer-social-icons-color);
  font-size: 12px;
}
.melastore-footer-social-icons li a:hover {
  opacity: 0.85;
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
