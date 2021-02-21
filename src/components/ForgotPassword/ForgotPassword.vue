<template>
  <account-container>
    <template v-slot:form>
      <b-form>
        <!--email input-->
        <b-form-group
          id="email-group"
          label="Email"
          label-for="email"
          :description="email.description"
          :class="email.error && 'error-field'"
        >
          <b-form-input
            id="email"
            v-model="email.value"
            type="text"
            :placeholder="email.placeholder"
          ></b-form-input>
        </b-form-group>
      </b-form>
    </template>
    <template v-slot:footer>
      <default-button
        text="Send Password Reset Link"
        type="button"
        @click="onSubmit"
        :show-spinner="showSpinner"
      />
      <span class="mt-2 text-center w-100 d-inline-block"
        >I remember my password?
        <span @click="showLoginForm" class="show-register-form-btn">
          Login
        </span>
      </span>
    </template>
  </account-container>
</template>

<script>
import DefaultButton from "../../../src/components/Buttons/DefaultButton";
import helpers from "../../helpers";
import AccountContainer from "../../../src/components/Containers/AccountContainer";
export default {
  name: "ForgotPassword",
  components: { AccountContainer, DefaultButton },
  props: {
    classes: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      showSpinner: false,
      email: {
        value: "",
        placeholder: "Enter your email address",
        description: "",
        error: false
      }
    };
  },
  methods: {
    showLoginForm() {
      this.$emit("show-login-form");
    },
    onSubmit() {
      this.showSpinner = true;
      let err = [];
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
        this.$emit("send-password-reset-link", this.email.value);
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
