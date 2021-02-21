<template>
  <div>
    <div class="sample-component">
      <div style="background-color: white;padding: 20px">
        <login
          @login="login"
          @show-register-form="showRegisterForm"
          @show-forgot-password-form="showForgotPasswordForm"
        />
      </div>
    </div>
    <div class="mt-5">
      <slot></slot>
    </div>
    <div>
      <props-table :props="props" label="Props" classes="props-table" />
    </div>
    <div>
      <props-table :props="events" label="Events" classes="events-table" />
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginDocs",
  data() {
    return {
      props: [
        {
          name: "classes",
          type: "string",
          default: '""',
          description: "Additional classes"
        }
      ],
      events: [
        {
          name: "login",
          arguments: {
            name: "user",
            description: "user object"
          },
          description: "Logs in user"
        },
        {
          name: "show-forgot-password-form",
          arguments: null,
          description: "Switches view to forgot password form"
        },
        {
          name: "show-register-form",
          arguments: null,
          description: "Switches view to registration form"
        }
      ]
    };
  },
  methods: {
    showForgotPasswordForm() {
      alert("Should toggle view to forgot password form");
    },
    showRegisterForm() {
      alert("Should toggle view to registration form");
    },
    login(user) {
      setTimeout(function() {
        alert(`Should log in user in \n\n ${JSON.stringify(user)}`);
      }, 1000);
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
