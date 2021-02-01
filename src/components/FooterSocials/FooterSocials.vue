<template>
  <div class="footer-widget footer-logo" :class="classes">
    <h2>{{ label }}</h2>
    <p>
      {{ labelText }}
    </p>
    <ul class="social-icon d-flex">
      <li v-for="(link, index) in data" :key="index">
        <a
          :href="link.link"
          target="_blank"
          rel="noopener"
          :style="{
            backgroundColor: backgroundColor,
            color: iconColor
          }"
        >
          <font-awesome-icon
            v-if="link.social_key === 'facebook'"
            :icon="['fab', 'facebook-f']"
          />
          <font-awesome-icon
            v-if="link.social_key === 'twitter'"
            :icon="['fab', 'twitter']"
          />
          <font-awesome-icon
            v-if="link.social_key === 'linkedin'"
            :icon="['fab', 'linkedin-in']"
          />
          <font-awesome-icon
            v-if="link.social_key === 'google_plus'"
            :icon="['fab', 'google-plus-g']"
          />
          <font-awesome-icon
            v-if="link.social_key === 'instagram'"
            :icon="['fab', 'instagram']"
          />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FooterSocials",
  props: {
    data: {
      type: Array,
      default: () => [
        {
          social_key: "facebook",
          link: "https://social.com"
        },
        {
          social_key: "twitter",
          link: "https://social.com"
        },
        {
          social_key: "linkedin",
          link: "https://social.com"
        },
        {
          social_key: "google_plus",
          link: "https://social.com"
        },
        {
          social_key: "instagram",
          link: "https://social.com"
        }
      ]
    },
    backgroundColor: {
      type: String,
      default: "#333"
    },
    iconColor: {
      type: String,
      default: "#fff"
    },
    label: {
      type: String,
      default: "Follow Us"
    },
    labelText: {
      type: String,
      default:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from"
    },
    classes: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped>
.social-icon {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.social-icon li {
  margin-right: 5px;
}
.social-icon li a {
  height: 30px;
  width: 30px;
  line-height: 30px;
  border-radius: 50%;
  text-align: center;
  display: block;
  background: #333;
  color: #fff;
  font-size: 12px;
}
.social-icon li a:hover {
  /*background: #333;*/
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
