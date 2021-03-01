# CarouselLander

```js
import CarouselLander from "mela-store";
```

### Example:


<CarouselLanderDocs>
```vue
<template>
    <carousel-lander
        :landerImages="landerImages"
        :interval="interval"
        :autoplay="autoplay"
    />
</template>

<script>
export default {
  name: "CarouselLander",
  data() {
    return {
      classes: "",
      autoplay: false,
      interval: 3,
      landerImages: [
        {
          image: require("image-path"),
          link: "/next-shop-1",
          linkText: "Shop Now",
          content: {
            title: "Comfortable Sofa with Great Comfort",
            body:
              "There are many variations of passages of Lorem Ipsum available."
          }
        },
        {
          image: require("image-path"),
          link: "/next-shop-1",
          linkText: "Shop Now",
          content: {
            title: "Comfortable Sofa with Great Comfort",
            body:
              "There are many variations of passages of Lorem Ipsum available."
          }
        },
        {
          image: require("image-path"),
          link: "/next-shop-1",
          linkText: "Shop Now",
          content: {
            title: "Comfortable Sofa with Great Comfort",
            body:
              "There are many variations of passages of Lorem Ipsum available."
          }
        },
        {
          image: require("image-path"),
          link: "/next-shop-1",
          linkText: "Shop Now",
          content: {
            title: "Comfortable Sofa with Great Comfort",
            body:
              "There are many variations of passages of Lorem Ipsum available."
          }
        },
        {
          image: require("image-path"),
          link: "/next-shop-1",
          linkText: "Shop Now",
          content: {
            title: "Comfortable Sofa with Great Comfort",
            body:
              "There are many variations of passages of Lorem Ipsum available."
          }
        },
        {
          image: require("image-path"),
          link: "/next-shop-2",
          linkText: "View Store"
        },
        {
          image: require("image-path"),
          link: "/next-shop-3",
          linkText: "Checkout"
        },
        {
          image: require("image-path"),
          link: "/next-shop-4",
          linkText: "Shop Now"
        }
      ],
    };
  }
};
</script>
```

</CarouselLanderDocs>