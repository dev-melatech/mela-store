<template>
  <div
    class="melastore-carousel-lander"
    @mouseover="autoplay && pauseTimer()"
    @mouseleave="autoplay && timer()"
    :class="classes"
  >
    <!--slider section-->
    <div
      v-for="(image, index) in images"
      :key="index"
      class="img-container"
      :class="[
        currentSlide !== index && index > currentSlide && 'next-slide',
        currentSlide !== index && index < currentSlide && 'prev-slide',
        currentSlide === images.length - 1 &&
          index === 0 &&
          replaceClass(index, 'prev-slide', 'next-slide'),
        currentSlide === 0 &&
          index === images.length - 1 &&
          replaceClass(index, 'next-slide', 'prev-slide'),
        currentSlide === index && next && 'next',
        index === currentSlide + nextKey && next && 'in',
        currentSlide === index && prev && 'prev',
        currentSlide === 0 && index === images.length - 1 && prev && 'out',
        currentSlide !== 0 && index === currentSlide - prevKey && prev && 'out'
      ]"
      :ref="`imgContainer${index}`"
      :style="{
        backgroundImage: 'url(' + image + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }"
    >
      <!--slider content-->
      <b-container
        v-if="
          landerImages[calcCurrentSlide].content &&
            landerImages[calcCurrentSlide].content.title &&
            landerImages[calcCurrentSlide].content.body
        "
      >
        <b-row>
          <b-col lg="6" offset-lg="3" md="6" offset-md="3" sm="12">
            <div
              class="slider-content text-center hidden"
              :class="bounce ? 'bounce visible' : 'd-none'"
            >
              <h4
                v-if="
                  landerImages[calcCurrentSlide].content &&
                    landerImages[calcCurrentSlide].content.title
                "
              >
                {{ landerImages[calcCurrentSlide].content.title }}
              </h4>
              <p
                v-if="
                  landerImages[calcCurrentSlide].content &&
                    landerImages[calcCurrentSlide].content.body
                "
              >
                {{ landerImages[calcCurrentSlide].content.body }}
              </p>
              <a
                :href="landerImages[calcCurrentSlide].link"
                class="btn btn-primary"
              >
                {{ landerImages[calcCurrentSlide].linkText }}
              </a>
            </div>
          </b-col>
        </b-row>
      </b-container>
      <div class="shop-now text-center" v-else>
        <a
          :href="landerImages[calcCurrentSlide].link"
          class="btn btn-primary"
          v-if="bounce"
        >
          {{ landerImages[calcCurrentSlide].linkText }}
        </a>
      </div>
    </div>
    <!--prev button-->
    <button
      class="btn  prev-btn d-none d-md-block"
      @click="movePrev(500, 1)"
      :disabled="prev"
      style="font-size: 18px;"
    >
      <font-awesome-icon :icon="['fas', 'chevron-left']" />
    </button>
    <!--next button-->
    <button
      class="btn next-btn d-none d-md-block"
      @click="moveNext(500, 1)"
      :disabled="next"
      style="font-size: 18px;"
    >
      <font-awesome-icon :icon="['fas', 'chevron-right']" />
    </button>
    <!--dots button-->
    <div class="dots text-center ">
      <button
        :style="
          landerImages[calcCurrentSlide].dotsColor && {
            color: landerImages[calcCurrentSlide].dotsColor
          }
        "
        class="btn"
        v-for="(image, index) in landerImages"
        :key="index"
        @click="setCurrent(index)"
        :disabled="index === calcCurrentSlide"
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
    classes: {
      type: String,
      default: ""
    },
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
      handler(index) {
        if (index === 0) {
          this.calcCurrentSlide = this.images.length - 1;
        } else {
          this.calcCurrentSlide = index - 1;
        }
      },
      deep: true
    },
    autoplay: {
      handler(val) {
        if (val) {
          this.timer();
        }
      },
      deep: true
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
      prevKey: 1,
      calcCurrentSlide: 0,
      autoSlide: false,
      my_timer: 0,
      bounce: false
    };
  },
  mounted() {
    this.landerImages.forEach(v => {
      this.images.push(v.image);
    });
    this.images.unshift(this.landerImages[this.landerImages.length - 1].image);
    this.images.pop();
    if (this.autoplay) {
      this.timer();
    }
    this.bounce = true;
  },
  methods: {
    replaceClass(index, removeName, addName) {
      if (removeName) {
        this.$refs[`imgContainer${index}`][0].classList.remove(removeName);
      }
      this.$refs[`imgContainer${index}`][0].classList.add(addName);
    },
    timer() {
      const that = this;
      this.my_timer = setInterval(() => {
        if (!that.next && !that.prev) {
          that.moveNext(500, 1);
        }
      }, that.interval * 1000);
    },
    pauseTimer() {
      clearInterval(this.my_timer);
    },
    setCurrent(index) {
      let key;
      const time = 500;
      const that = this;
      if (index === 0) {
        key = 1;
      } else if (index === this.images.length - 1) {
        key = 0;
      } else {
        key = index + 1;
      }

      if (key !== 0 && key < this.currentSlide) {
        this.replaceClass(this.currentSlide, "", "prev");
        this.replaceClass(key, "next-slide", "prev-slide");
        this.replaceClass(key, "", "out");
      } else if (key !== 0 && key > this.currentSlide) {
        this.replaceClass(this.currentSlide, "", "next");
        this.replaceClass(key, "prev-slide", "next-slide");
        this.replaceClass(key, "", "in");
      } else if (key === 0) {
        this.replaceClass(this.currentSlide, "", "next");
        this.replaceClass(key, "prev-slide", "next-slide");
        this.replaceClass(key, "", "in");
      }
      setTimeout(function() {
        that.currentSlide = key;
      }, time - 50);
    },
    moveNext(time, nextKey) {
      this.next = true;
      this.prev = false;
      this.bounce = false;
      if (this.currentSlide === this.images.length - 1) {
        this.nextKey = this.currentSlide * -1;
      }
      const that = this;
      setTimeout(function() {
        that.next = false;
        if (that.currentSlide === that.images.length - 1) {
          that.currentSlide = 0;
        } else {
          that.currentSlide = that.currentSlide + nextKey;
        }
        that.nextKey = 1;
      }, time - 50);
      setTimeout(function() {
        that.bounce = true;
      }, time - 25);
    },
    movePrev(time, prevKey) {
      this.next = false;
      this.prev = true;
      this.bounce = false;

      const that = this;
      setTimeout(function() {
        that.prev = false;
        if (that.currentSlide === 0) {
          that.currentSlide = that.images.length - 1;
        } else {
          that.currentSlide = that.currentSlide - prevKey;
        }
        that.prevKey = 1;
      }, time - 50);
      setTimeout(function() {
        that.bounce = true;
      }, time - 25);
    }
  }
};
</script>

<style scoped>
.melastore-carousel-lander {
  position: relative;
  overflow-x: hidden;
  height: 400px;
}
.hidden {
  visibility: hidden !important;
  opacity: 0 !important;
  transition: visibility 0s 1s, opacity 1s linear !important;
}
.visible {
  visibility: visible !important;
  opacity: 1 !important;
  transition: opacity 1s linear !important;
}
.slider-content {
  background: #f7f5f5d9;

  margin-top: 50px;
  padding: 20px 50px;
}
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
  font-size: 18px;
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
  color: white !important;
}
.dots,
.shop-now {
  bottom: 10px;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 10;
}
.shop-now {
  bottom: 70px;
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
  width: 100%;
  height: 100%;
}
.next-slide {
  background-color: red;
  position: absolute;
  left: 100%;
  top: 0;
  width: 100%;
  height: 100%;
}
.prev-slide {
  background-color: red;
  position: absolute;
  left: -100%;
  top: 0;
  width: 100%;
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
.bounce {
  transform-origin: bottom;
  animation: bounce linear 1s 1 forwards;
}

@keyframes bounce {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-15px);
  }
  50% {
    transform: translateX(0);
  }
  75% {
    transform: translateX(15px);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes slide-next {
  0% {
    z-index: 1;
    left: 0;
  }

  100% {
    left: -100%;
    width: 100%;
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
    width: 100%;
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
    width: 100%;
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
    width: 100%;
    z-index: 1;
  }
}
/*webkit animations*/
@-webkit-keyframes bounce {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-15px);
  }
  50% {
    transform: translateX(0);
  }
  75% {
    transform: translateX(15px);
  }
  100% {
    transform: translateX(0);
  }
}
@-webkit-keyframes slide-next {
  0% {
    z-index: 1;
    left: 0;
  }

  100% {
    left: -100%;
    width: 100%;
    z-index: 1;
  }
}
@-webkit-keyframes slide-prev {
  0% {
    z-index: 1;
    left: 0;
  }

  100% {
    left: 100%;
    width: 100%;
    z-index: 1;
  }
}
@-webkit-keyframes slide-in {
  0% {
    z-index: 1;
    left: 100%;
  }

  100% {
    left: 0;
    width: 100%;
    z-index: 1;
  }
}
@-webkit-keyframes slide-out {
  0% {
    z-index: 1;
    left: -100%;
  }

  100% {
    left: 0;
    width: 100%;
    z-index: 1;
  }
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
