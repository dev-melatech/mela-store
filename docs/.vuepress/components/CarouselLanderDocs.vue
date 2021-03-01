<template>
  <div>
    <div class="sample-component">
      <carousel-lander
        :landerImages="landerImages"
        :interval="interval"
        :autoplay="autoplay"
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
  name: "CarouselLanderDocs",
  data() {
    return {
      classes: "",
      autoplay: false,
      interval: 3,
      landerImages: [
        {
          image: require("../../../static/images/lander/new_fill_2.png"),
          link: "/next-shop-1",
          linkText: "Shop Now",
          content: {
            title: "Comfortable Sofa with Great Comfort",
            body:
              "There are many variations of passages of Lorem Ipsum available."
          }
        },
        {
          image: require("../../../static/images/lander/new_fill_2.jpg"),
          link: "/next-shop-1",
          linkText: "Shop Now",
          content: {
            title: "Comfortable Sofa with Great Comfort",
            body:
              "There are many variations of passages of Lorem Ipsum available."
          }
        },
        {
          image: require("../../../static/images/lander/new_fill_4.jpg"),
          link: "/next-shop-1",
          linkText: "Shop Now",
          content: {
            title: "Comfortable Sofa with Great Comfort",
            body:
              "There are many variations of passages of Lorem Ipsum available."
          }
        },
        {
          image: require("../../../static/images/lander/new_fill_1.png"),
          link: "/next-shop-1",
          linkText: "Shop Now",
          content: {
            title: "Comfortable Sofa with Great Comfort",
            body:
              "There are many variations of passages of Lorem Ipsum available."
          }
        },
        {
          image: require("../../../static/images/lander/fill_2.jpg"),
          link: "/next-shop-1",
          linkText: "Shop Now",
          content: {
            title: "Comfortable Sofa with Great Comfort",
            body:
              "There are many variations of passages of Lorem Ipsum available."
          }
        },
        {
          image: require("../../../static/images/lander/fill_4.jpg"),
          link: "/next-shop-2",
          linkText: "View Store"
        },
        {
          image: require("../../../static/images/lander/fill_1.jpg"),
          link: "/next-shop-3",
          linkText: "Checkout"
        },
        {
          image: require("../../../static/images/lander/fill_3.jpg"),
          link: "/next-shop-4",
          linkText: "Shop Now"
        }
      ],
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
