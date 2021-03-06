<template>
  <div class="melastore-footer-quick-links" :class="classes">
    <h2>{{ label }}</h2>
    <ul>
      <li v-for="(link, index) in links" :key="index">
        <slot name="quick-link" :link="link">
          <a :href="link.href">
            {{ link.title }}
          </a>
        </slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FooterQuickLinks",
  props: {
    links: {
      type: Array,
      default: () => [],
      required: true
    },
    label: {
      type: String,
      default: "Quick links"
    },
    classes: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped>
.melastore-footer-quick-links ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.melastore-footer-quick-links ul li {
  line-height: 30px;
}
.melastore-footer-quick-links ul li a {
  color: var(--ms-footer-link-color);
}
.melastore-footer-quick-links ul li a:hover {
  color: var(--ms-footer-link-color-hover);
  text-decoration: none;
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
