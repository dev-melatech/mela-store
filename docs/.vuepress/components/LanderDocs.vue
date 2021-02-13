<template>
  <div>
    <div class="sample-component">
      <Lander
        :image-link1="imageFile1"
        :image-link2="imageFile2"
        :image-link3="imageFile3"
        :image-link4="imageFile4"
      />
    </div>
    <div class="mt-5">
      <slot></slot>
    </div>
    <div>
      <props-table :props="props" label="Props" classes="props-table" />
    </div>
  </div>
</template>

<script>
export default {
  name: "LanderDocs",
  data() {
    return {
      imageFile1: require("../../../static/images/lander/1.jpg"),
      imageFile2: require("../../../static/images/lander/2.jpg"),
      imageFile3: require("../../../static/images/lander/3.jpg"),
      imageFile4: require("../../../static/images/lander/4.jpg"),
      props: [
        {
          name: "image-file1",
          type: "string",
          default: '""',
          description: "Link to image file"
        },
        {
          name: "image-file2",
          type: "string",
          default: '""',
          description: "Link to image file"
        },
        {
          name: "image-file3",
          type: "string",
          default: '""',
          description: "Link to image file"
        },
        {
          name: "image-file4",
          type: "string",
          default: '""',
          description: "Link to image file"
        }
      ]
    };
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
