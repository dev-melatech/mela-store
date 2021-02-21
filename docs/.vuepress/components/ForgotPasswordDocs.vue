<template>
  <div>
    <div class="sample-component">
      <div style="background-color: white;padding: 20px">
        <forgot-password
          ref="melastoreForgotPassword"
          @send-password-reset-link="sendPasswordResetLink"
          @show-login-form="showLoginForm"
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
  name: "ForgotPasswordDocs",
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
          name: "send-password-reset-link",
          arguments: {
            name: "email",
            description: "user email"
          },
          description: "Send password reset email to user"
        },
        {
          name: "show-login-form",
          arguments: null,
          description: "Switches view to login form"
        }
      ]
    };
  },
  methods: {
    sendPasswordResetLink(email) {
      setTimeout(function() {
        alert(`Should send password reset email to \n\n ${email}`);
      }, 1000);
    },
    showLoginForm() {
      alert("Should show login form");
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
