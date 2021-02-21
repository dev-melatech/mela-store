<template>
  <account-container :classes="classes">
    <template v-slot:form>
      <b-form>
        <!--firstname input-->
        <b-form-group
          id="firstName-group"
          label="First Name"
          label-for="firstName"
          :description="firstName.description"
          :class="firstName.error && 'error-field'"
        >
          <b-form-input
            id="firstName"
            v-model="firstName.value"
            type="text"
            :placeholder="firstName.placeholder"
          ></b-form-input>
        </b-form-group>
        <!--lastname input-->
        <b-form-group
          id="lastName-group"
          label="Last Name"
          label-for="lastName"
          :description="lastName.description"
          :class="lastName.error && 'error-field'"
        >
          <b-form-input
            id="lastName"
            v-model="lastName.value"
            type="text"
            :placeholder="lastName.placeholder"
          ></b-form-input>
        </b-form-group>
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
        <!--phone input-->
        <b-form-group
          id="phone-group"
          label="Phone"
          label-for="phone"
          :description="phone.description"
          :class="phone.error && 'error-field'"
        >
          <b-form-input
            id="phone"
            v-model="phone.value"
            type="tel"
            :placeholder="phone.placeholder"
          ></b-form-input>
        </b-form-group>
        <!--password input-->
        <b-form-group
          id="password-group"
          label="Password"
          label-for="password"
          :description="password.description"
          :class="password.error && 'error-field'"
        >
          <b-form-input
            id="password"
            v-model="password.value"
            :type="passwordType"
            :placeholder="password.placeholder"
          ></b-form-input>
          <!--toggle password-->
          <span
            v-if="!showPassword"
            @click="togglePassword"
            class="toggle-password"
            >show</span
          >
          <span v-else @click="togglePassword" class="toggle-password"
            >hide</span
          >
        </b-form-group>
      </b-form>
    </template>
    <template v-slot:footer>
      <default-button
        text="Register"
        type="button"
        @click="onSubmit"
        :show-spinner="showSpinner"
      />
      <span class="mt-2 text-center w-100 d-inline-block"
        >Already registered?
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
  name: "Register",
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
      showPassword: false,
      passwordType: "password",
      firstName: {
        value: "",
        placeholder: "Enter your first name",
        description: "",
        error: false
      },
      lastName: {
        value: "",
        placeholder: "Enter your last name",
        description: "",
        error: false
      },
      email: {
        value: "",
        placeholder: "Enter your email address",
        description: "",
        error: false
      },
      phone: {
        value: "",
        placeholder: "Enter your phone number",
        description: "",
        error: false
      },
      password: {
        value: "",
        placeholder: "Enter your password",
        description: "",
        error: false
      }
    };
  },
  methods: {
    showLoginForm() {
      this.$emit("show-login-form");
    },
    togglePassword() {
      if (this.passwordType === "password") {
        this.passwordType = "text";
        this.showPassword = true;
      } else {
        this.passwordType = "password";
        this.showPassword = false;
      }
    },
    onSubmit() {
      this.showSpinner = true;
      let err = [];
      // validate first name
      if (!this.firstName.value) {
        this.firstName.description = "Please enter your first name";
        this.firstName.error = true;
        err.push("firstName");
      } else {
        this.firstName.description = "";
        this.firstName.error = false;
      }
      // validate last name
      if (!this.lastName.value) {
        this.lastName.description = "Please enter your last name";
        this.lastName.error = true;
        err.push("lastName");
      } else {
        this.lastName.description = "";
        this.lastName.error = false;
      } // validate phone number
      if (!this.phone.value) {
        this.phone.description = "Please enter your phone number";
        this.phone.error = true;
        err.push("phone");
      } else {
        this.phone.description = "";
        this.phone.error = false;
      }
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
      // validate password
      if (!this.password.value) {
        this.password.description = "Please enter your password";
        this.password.error = true;
        err.push("password");
      } else if (this.password.value && this.password.value.length < 6) {
        this.password.description =
          "Your password should have at least 6 characters";
        this.password.error = true;
        err.push("password");
      } else {
        this.password.description = "";
        this.password.error = false;
      }

      if (err.length !== 0) {
        this.showSpinner = false;
      } else {
        this.$emit("register", {
          email: this.email.value,
          firstName: this.firstName.value,
          lastName: this.lastName.value,
          phone: this.phone.value,
          password: this.password.value
        });
      }
    },
    setFirstNameError(error) {
      if (error) {
        this.firstName.description = error;
        this.firstName.error = true;
      } else {
        this.firstName.description = "";
        this.firstName.error = false;
      }
    },
    setLastNameError(error) {
      if (error) {
        this.lastName.description = error;
        this.lastName.error = true;
      } else {
        this.lastName.description = "";
        this.lastName.error = false;
      }
    },
    setPhoneError(error) {
      if (error) {
        this.phone.description = error;
        this.phone.error = true;
      } else {
        this.phone.description = "";
        this.phone.error = false;
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
    },
    setPasswordError(error) {
      if (error) {
        this.password.description = error;
        this.password.error = true;
      } else {
        this.password.description = "";
        this.password.error = false;
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
