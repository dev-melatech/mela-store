<template>
  <div>
    <div style="position:relative; overflow-x: hidden;   height: 400px;">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="img-container"
        :class="[
          currentSlide !== index && index > currentSlide && 'next-slide',
          currentSlide !== index && index < currentSlide && 'prev-slide',
          currentSlide === index && next && 'next',
          index === currentSlide + nextKey && next && 'in',
          currentSlide === index && prev && 'prev',
          index === currentSlide - prevKey && prev && 'out'
        ]"
        :ref="`imgContainer${index}`"
        :style="{
          padding: '50px 0',
          background:
            'linear-gradient(147deg, rgba(15, 85, 131, 0.2), rgba(0, 0, 0, .3)), url(' +
            image +
            ') no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }"
      ></div>
    </div>
    <div class="mt-5 text-center">
      <button
        class="btn btn-primary"
        @click="movePrev(500, 1)"
        :disabled="prev"
      >
        Slide prev
      </button>
      <button
        class="btn btn-secondary"
        @click="moveNext(500, 1)"
        :disabled="next"
      >
        Slide next
      </button>
    </div>
    <div>
      {{ landerImages }}
      <button
        class="btn btn-danger"
        v-for="(image, index) in landerImages"
        :key="index"
        @click="setCurrent(index)"
      >
        click me
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarouselLander",
  props: {
    autoplay: {
      type: Boolean,
      default: false
    },
    interval: {
      type: Number,
      default: 1
    },
    landerImages: {
      type: Array,
      default: () => [
        require("../../../static/images/lander/fill_1.jpg"),
        require("../../../static/images/lander/fill_2.jpg"),
        require("../../../static/images/lander/fill_3.jpg"),
        require("../../../static/images/lander/fill_4.jpg")
      ]
    }
  },
  computed: {
    image() {
      return require("../../../static/images/lander/fill_1.jpg");
    }
  },
  data() {
    return {
      images: [],
      currentSlide: 1,
      nextSlide: 1,
      prev: false,
      next: false,
      slidePrev: false,
      slideNext: false,
      step: 0,
      nextKey: 1,
      prevKey: 1
    };
  },
  mounted() {
    this.landerImages.forEach(v => {
      this.images.push(v);
    });

    const that = this;
    if (this.autoplay) {
      setInterval(function() {
        console.log("what's next");
        that.slideNext();
      }, that.interval * 1000);
    }
  },
  methods: {
    setCurrent(index) {
      let currentSlide;
      let minus;
      let count;
      const time = 500;

      if (this.step > 0) {
        minus = this.step * this.landerImages.length;
        currentSlide = this.currentSlide - minus;
      } else {
        currentSlide = this.currentSlide;
      }

      if (index < currentSlide) {
        count = currentSlide - index;
        this.prevKey = count;
        this.movePrev(time, count);
      } else if (index === currentSlide) {
        alert("same");
      } else {
        count = index - currentSlide;
        this.nextKey = count;
        this.moveNext(time, count);
      }
    },
    moveNext(time, nextKey) {
      this.next = true;
      this.prev = false;
      const length = this.images.length;
      const currentSlide = this.currentSlide;

      if (currentSlide === length - 1) {
        this.landerImages.forEach(v => {
          this.images.push(v);
        });
        this.step++;
        console.table(this.images);
      }
      const that = this;
      setTimeout(function() {
        that.next = false;
        that.currentSlide = that.currentSlide + nextKey;
        that.nextKey = 1;
      }, time - 50);
    },
    movePrev(time, prevKey) {
      this.next = false;
      this.prev = true;
      const length = this.images.length;

      console.log(this.currentSlide);
      if (this.currentSlide === 0) {
        this.landerImages.forEach(v => {
          this.images.push(v);
        });
        this.step++;
        this.currentSlide = length;
        console.table(this.images);
      }

      const that = this;
      setTimeout(function() {
        that.prev = false;
        that.currentSlide = that.currentSlide - prevKey;
        that.prevKey = 1;
      }, time - 50);
    }
  }
};
</script>

<style scoped>
.img-container {
  background-color: red;
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100%;
}
.next-slide {
  background-color: red;
  position: absolute;
  left: 100%;
  top: 0;
  width: 100vw;
  height: 100%;
}
.prev-slide {
  background-color: red;
  position: absolute;
  left: -100%;
  top: 0;
  width: 100vw;
  height: 100%;
}

.in {
  -webkit-animation: slide-in 0.5s forwards;
  animation: slide-in 0.5s forwards;
}

.out {
  -webkit-animation: slide-out 0.5s forwards;
  animation: slide-out 0.5s forwards;
}

.next {
  -webkit-animation: slide-next 0.5s forwards;
  animation: slide-next 0.5s forwards;
}

.prev {
  -webkit-animation: slide-prev 0.5s forwards;
  animation: slide-prev 0.5s forwards;
}

@keyframes slide-next {
  0% {
    z-index: 100000000;
    left: 0;
  }

  100% {
    left: -100%;
    width: 100vw;
    z-index: 100000000;
  }
}
@keyframes slide-prev {
  0% {
    z-index: 100000000;
    left: 0;
  }

  100% {
    left: 100%;
    width: 100vw;
    z-index: 100000000;
  }
}
@keyframes slide-in {
  0% {
    z-index: 100000000;
    left: 100%;
  }

  100% {
    left: 0;
    width: 100vw;
    z-index: 100000000;
  }
}
@keyframes slide-out {
  0% {
    z-index: 100000000;
    left: -100%;
  }

  100% {
    left: 0;
    width: 100vw;
    z-index: 100000000;
  }
}

/*@-webkit-keyframes slide-next {*/
/*  0% {*/
/*    z-index: 100000000;*/
/*    right: -2000px;*/
/*  }*/

/*  100% {*/
/*    right: 0;*/
/*    width: 100vw;*/
/*    z-index: 100000000;*/
/*  }*/
/*}*/
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
