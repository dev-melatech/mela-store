<template>
  <div class="melastore-footer-newsletter">
    <h2>{{ label }}</h2>
    <p v-if="labelText">{{ labelText }}</p>
    <b-form>
      <b-form-group
        id="email-group"
        label=""
        label-for="email"
        :description="email.description"
        :class="email.error && 'error-field'"
      >
        <b-input-group class="mb-3">
          <b-form-input
            :placeholder="email.placeholder"
            type="text"
            class="melastore-subscribe-input mr-2"
            v-model="email.value"
          ></b-form-input>
          <b-input-group-append>
            <b-button
              @click="subscribe"
              size="sm"
              class="melastore-subscribe-btn rounded "
            >
              <span v-if="showSpinner">
                <font-awesome-icon
                  class="fa-spin"
                  :icon="['fas', 'circle-notch']"
                />
              </span>
              <span v-else>
                <font-awesome-icon :icon="['fas', 'long-arrow-alt-right']" />
              </span>
            </b-button>
          </b-input-group-append>
        </b-input-group>
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
import helpers from "../../../helpers";

export default {
  name: "FooterNewsLetter",
  props: {
    label: {
      type: String,
      default: "Join Our NewsLetter"
    },
    labelText: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      email: {
        value: "",
        error: false,
        placeholder: "Enter your email address",
        description: ""
      },
      showSpinner: false
    };
  },
  methods: {
    subscribe() {
      let err = [];
      this.showSpinner = true;
      // validate email address
      if (!this.email.value) {
        this.email.description = "Please enter your email address";
        this.email.error = true;
        err.push("email");
      } else if (this.email.value && !helpers.validEmail(this.email.value)) {
        this.email.description = "Please enter a valid email address";
        this.email.error = true;
        err.push("email");
      } else {
        this.email.description = "";
        this.email.error = false;
      }

      if (err.length !== 0) {
        this.showSpinner = false;
      } else {
        const that = this;
        setTimeout(function() {
          that.showSpinner = false;
        }, 1500);
        this.$emit("subscribe", this.email.value);
      }
    },
    setEmailError(error) {
      if (error) {
        this.email.description = error;
        this.email.error = true;
      } else {
        this.email.description = "";
        this.email.error = false;
      }
    }
  }
};
</script>

<style scoped>
.melastore-subscribe-input {
  background: transparent;
  border: 1px solid #b7b7b7;
  height: 40px;
  width: 100%;
  padding: 0px 45px 0px 10px;
  border-radius: 0.25rem !important;
}
.melastore-subscribe-btn {
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
.melastore-subscribe-btn:hover {
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
