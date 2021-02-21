<template>
  <b-navbar-nav class="ml-auto navbar-search-ul" :class="classes">
    <b-nav-form>
      <b-input-group class="w-100">
        <b-form-input
          size="md"
          :placeholder="placeholder"
          class="navbar-search--input mr-2"
          :value="query"
          @input="getQuery"
          autocomplete="off"
        ></b-form-input>
        <b-input-group-append>
          <button type="button" class="btn navbar-search--btn">
            <font-awesome-icon :icon="['fas', 'search']" />
          </button>
        </b-input-group-append>
      </b-input-group>
    </b-nav-form>
  </b-navbar-nav>
</template>

<script>
export default {
  name: "NavBarSearch",
  props: {
    placeholder: {
      type: String,
      default: "Search products, brands and categories"
    },
    classes: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      query: ""
    };
  },
  methods: {
    getQuery(e) {
      this.query = e;
      console.log(this.query);
    }
  }
};
</script>

<style scoped>
.navbar-search-ul {
  display: table;
  width: 50%;
  margin: 0;
  position: relative;
}
.navbar-search-ul li {
  float: none;
  display: block;
  text-align: center;
  width: 100%;
}
.navbar-search--input {
  background: white;
  border-radius: 20px !important;
  padding: 20px !important;
}
.navbar-search--input:focus {
  border-color: #ced4da;
}
.navbar-search--btn {
  background: none;
  color: #333;
  /*font-size: 12px;*/
  border: none;
  /*width: 40px;*/
  border-radius: 0.25rem !important;
}
.navbar-search-btn-append {
  position: absolute;
  right: 0;
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
  .navbar-search-ul {
    width: 100%;
  }
}

/* extra small mobile 320px. */

@media (max-width: 575px) {
  .navbar-search-ul {
    width: 100%;
  }
}

/* Large Mobile :480px. */

@media only screen and (min-width: 480px) and (max-width: 575px) {
  .navbar-search-ul {
    width: 100%;
  }
}

@media only screen and (max-width: 575px) and (min-width: 480px) {
  .navbar-search-ul {
    width: 100%;
  }
}
</style>
