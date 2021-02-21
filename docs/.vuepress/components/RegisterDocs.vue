<template>
  <div>
    <div class="sample-component">
      <div style="background-color: white;padding: 20px">
        <register
          ref="melastoreRegister"
          @register="register"
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
  name: "RegisterDocs",
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
          name: "register",
          arguments: {
            name: "user",
            description: "user object"
          },
          description: "Registers new user"
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
    register(user) {
      setTimeout(function() {
        alert(`Should register user in \n\n ${JSON.stringify(user)}`);
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
