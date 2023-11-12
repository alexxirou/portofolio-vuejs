<template>
  <!-- Slider component -->
  <div class="slider">
    <!-- Slide container -->
    <div class="slide" v-for="(slide, index) in slides" :key="index">
      <!-- Your slide content goes here -->
    </div>
    <!-- Slot content -->
    <slot></slot>
    <!-- Button to navigate to previous slide -->
    <button class="slider__btn slider__btn--left" @click="prevSlide">&larr;</button>
    <!-- Button to navigate to next slide -->
    <button class="slider__btn slider__btn--right" @click="nextSlide">&rarr;</button>
    <!-- Dots navigation -->
    <div class="dots">
      <!-- Dot for each slide -->
      <button
        v-for="(_, index) in dots"
        :key="index"
        class="dots__dot"
        :class="{ 'dots__dot--active': index === curSlide }"
        @click="goToSlide(index)"
      ></button>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';

// Define reactive variables
const slides = ref([]); // Holds the slide elements
const dots = ref([]); // Holds the dot elements
let curSlide = ref(0); // Holds the index of the current slide
const maxSlide = ref(0); // Holds the total number of slides

// Create dots for each slide
const createDots = () => {
  dots.value = Array.from({ length: slides.value.length }, (_, i) => i);
};

// Go to a specific slide
const goToSlide = (slide) => {
  slides.value.forEach((_, i) => (slides.value[i].style.transform = `translateX(${100 * (i - slide)}%)`));
  curSlide.value = slide;
  activateDot();
};

// Go to the next slide
const nextSlide = () => {
  curSlide.value = (curSlide.value + 1) % maxSlide.value;
  activateDot();
  goToSlide(curSlide.value);
};

// Go to the previous slide
const prevSlide = () => {
  curSlide.value = (curSlide.value - 1 + maxSlide.value) % maxSlide.value;
  activateDot();
  goToSlide(curSlide.value);
};

// Activate the dot corresponding to the current slide
const activateDot = () => {
  dots.value.forEach((_, index) => {
    if (dots.value[index]) {
      dots.value[index].classList.remove('dots__dot--active');
    }
  });
  if (dots.value[curSlide.value]) {
    dots.value[curSlide.value].classList.add('dots__dot--active');
  }
};

// Run the following code after the component is mounted
onMounted(() => {
  slides.value = document.querySelectorAll('.slide'); // Get the slide elements
  maxSlide.value = slides.value.length; // Set the total number of slides
  createDots(); // Create dots for each slide
  activateDot(); // Activate the dot corresponding to the current slide
  goToSlide(0); // Go to the first slide
});
</script>

<style scoped>
/* SLIDER */
.slider {
  max-width: 100rem;
  height: 100vw;

  position: relative;
  flex-direction: column;
  display: flex;
  /* IN THE END */
}

/* Slider buttons */
.slider__btn {
  position: absolute;
  top: 50%;
  z-index: 10;

  border: none;
  background: white;
  font-family: inherit;
  color: #333;
  border-radius: 50%;
  height: calc(15px + 1.5vw);
  width: calc(15px + 1.5vw);
  font-size: calc(10px + 1vw);
  cursor: pointer;
}

/* Left slider button */
.slider__btn--left {
  left: 11%;
  transform: translate(-50%, -50%);
}

/* Right slider button */
.slider__btn--right {
  right: 11%;
  transform: translate(50%, -50%);
}

/* Dots container */
.dots {
  position: relative;
  margin: auto; /* Center the div horizontally */
  transform: translateX(-50%);
  display: flex;
  bottom: 0;
  height: min-content;
}

/* Individual dot */
.dots__dot {
  border: none;
  background-color: #b9b9b9;
  opacity: 0.7;
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  margin-right: calc(2px + 0.5vw);
  cursor: pointer;
  transition: all 0.5s;

  /* Only necessary when overlying images */
  /* box-shadow: 0 0.6rem 1.5rem rgba(0, 0, 0, 0.7); */
}

/* Last dot in the container */
.dots__dot:last-child {
  margin: 0;
}

/* Active dot */
.dots__dot--active {
  /* background-color: #fff; */
  background-color: white;
  opacity: 1;
}

@media(max-width: 768px) {
  .dots{
    padding-top: 20px;
  }
  
}

</style>