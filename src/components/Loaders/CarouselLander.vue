<template>
  <div
    style="position:relative; overflow-x: hidden;   height: 400px;"
    @mouseover="pauseTimer"
    @mouseleave="autoplay && timer()"
  >
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
        backgroundImage: 'url(/' + image + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }"
    >
      <button
        class="btn btn-danger"
        style="position: absolute; bottom: 50px;z-index: 10"
      >
        Shop Now
      </button>
    </div>
    <button class="btn  prev-btn" @click="movePrev(500, 1)" :disabled="prev">
      <font-awesome-icon :icon="['fas', 'chevron-left']" />
    </button>
    <button class="btn next-btn" @click="moveNext(500, 1)" :disabled="next">
      <font-awesome-icon :icon="['fas', 'chevron-right']" />
    </button>
    <div class="dots text-center">
      <button
        class="btn"
        v-for="(image, index) in landerImages"
        :key="index"
        @click="setCurrent(index)"
        :disabled="calcCurrentSlide === index"
      >
        <font-awesome-icon :icon="['fas', 'circle']" />
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
      default: true
    },
    interval: {
      type: Number,
      default: 3
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
  computed: {},
  watch: {
    currentSlide: {
      handler(val) {
        let minus;
        if (this.step > 0) {
          minus = this.step * this.landerImages.length;
          this.calcCurrentSlide = val - minus;
        } else {
          this.calcCurrentSlide = this.currentSlide;
        }
      },
      deep: true
    }
  },
  data() {
    return {
      images: [],
      currentSlide: 0,
      nextSlide: 1,
      prev: false,
      next: false,
      slidePrev: false,
      slideNext: false,
      step: 0,
      nextKey: 1,
      prevKey: 1,
      calcCurrentSlide: 0,
      autoSlide: false,
      my_timer: 0
    };
  },
  mounted() {
    this.landerImages.forEach(v => {
      this.images.push(v);
    });
    this.landerImages.forEach(v => {
      this.images.push(v);
    });
    this.step++;
    this.currentSlide = this.landerImages.length;
    console.table(this.images);
    if (this.autoplay) {
      this.timer();
    }
  },
  methods: {
    timer() {
      console.log("playing");
      const that = this;
      this.my_timer = setInterval(() => {
        if (!that.next && !that.prev) {
          console.log("what's next");
          that.moveNext(500, 1);
        }
      }, that.interval * 1000);
    },
    pauseTimer() {
      console.log("stop");
      clearInterval(this.my_timer);
    },
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
        // alert("same");
      } else {
        count = index - currentSlide;
        this.nextKey = count;
        this.moveNext(time, count);
      }
    },
    moveNext(time, nextKey) {
      this.next = true;
      this.prev = false;
      console.log(this.currentSlide);
      if (this.currentSlide === this.images.length - 1) {
        this.currentSlide = this.landerImages.length - 1;
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
      console.log(this.currentSlide);
      if (this.currentSlide === 0) {
        this.currentSlide = this.landerImages.length;
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
.prev-btn {
  position: absolute;
  left: 10%;
  top: 45%;
  z-index: 10;
}
.next-btn {
  position: absolute;
  right: 10%;
  top: 45%;
  z-index: 10;
}
.prev-btn,
.next-btn {
  background-color: #2966a5;
  /* width: 40px; */
  /* padding: 5px 15px; */
  width: 40px;
  height: 40px;
  padding: 0;
  color: white;
}
.prev-btn:disabled,
.next-btn:disabled {
  opacity: 1;
}
.prev-btn:hover,
.next-btn:hover {
  background-color: #3d77b3;
}
.dots {
  bottom: 10px;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 10;
}
.dots .btn {
  color: black;
  padding: 5px;
  font-size: 12px;
}
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
    z-index: 1;
    left: 0;
  }

  100% {
    left: -100%;
    width: 100vw;
    z-index: 1;
  }
}
@keyframes slide-prev {
  0% {
    z-index: 1;
    left: 0;
  }

  100% {
    left: 100%;
    width: 100vw;
    z-index: 1;
  }
}
@keyframes slide-in {
  0% {
    z-index: 1;
    left: 100%;
  }

  100% {
    left: 0;
    width: 100vw;
    z-index: 1;
  }
}
@keyframes slide-out {
  0% {
    z-index: 1;
    left: -100%;
  }

  100% {
    left: 0;
    width: 100vw;
    z-index: 1;
  }
}

/*@-webkit-keyframes slide-next {*/
/*  0% {*/
/*    z-index: 1;*/
/*    right: -2000px;*/
/*  }*/

/*  100% {*/
/*    right: 0;*/
/*    width: 100vw;*/
/*    z-index: 1;*/
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
