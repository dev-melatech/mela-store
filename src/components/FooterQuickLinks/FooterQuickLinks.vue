<template>
  <div class="footer-widget footer-menu" :class="classes">
    <h2>{{ label }}</h2>
    <ul>
      <li v-for="(link, index) in data" :key="index">
        <a href="account.html">
          {{ link.title }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FooterQuickLinks",
  props: {
    data: {
      type: Array,
      default: () => [
        {
          title: "Account",
          href: "/account"
        },
        {
          title: "About Us",
          href: "/about-us"
        },
        {
          title: "Contact Us",
          href: "/contact-us"
        }
      ]
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
.footer-widget ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.footer-widget ul li {
  line-height: 30px;
}
.footer-widget ul li a {
  color: #333;
}
.footer-widget ul li a:hover {
  color: #666;
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
