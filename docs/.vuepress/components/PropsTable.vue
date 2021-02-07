<template>
  <div class="props-table mt-5">
    <h3 id="props"><a href="#props" class="header-anchor">#</a> Props</h3>
    <div class="table-responsive mt-2">
      <b-table :items="props" class="w-100 table-responsive">
        <template #cell(name)="data">
          <span class="label text-center">{{ data.item.name }}</span>
        </template>
        <template #cell(type)="data">
          <span class="props text-center">{{ data.item.type }}</span>
        </template>
        <template #cell(default)="data">
          <span class="default text-center">{{ data.item.default }}</span>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "PropsTable",
  props: {
    props: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  data() {
    return {};
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
