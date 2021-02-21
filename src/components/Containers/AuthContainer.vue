<template>
  <b-container>
    <b-row>
      <b-col lg="6" offset-lg="3" md="6" offset-md="3" cols="12">
        <div style="background: white; padding: 20px" class="mt-5 mb-5">
          <slot></slot>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "AuthContainer"
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
