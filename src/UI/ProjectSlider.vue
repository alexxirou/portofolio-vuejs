<template>
  <div>
    <!-- Slider component -->
    <div class="h-[100vh] relative flex-col max-w-[100rem]">
      <!-- Slide container -->
      <div v-for="(slide, index) in slides" :key="index">
        <!-- Your slide content goes here -->
      </div>
      <!-- Slot content -->
      <slot></slot>
      <!-- Button to navigate to previous slide -->
      <button
        class="absolute top-[60%] md:top-[40%] z-10 border-none bg-white font-sans text-black rounded-full h-10 w-10 cursor-pointer transform-[translate(50%,-50%)] md:left-[20%] left-[5%]"
        @click="prevSlide"
      >
        &larr;
      </button>
      <!-- Button to navigate to next slide -->
      <button
        class="absolute top-[60%] md:top-[40%] z-10 border-none bg-white font-sans text-black rounded-full h-10 w-10 cursor-pointer transform-[translate(-50%, 50%)] md:right-[20%] right-[5%]"
        @click="nextSlide"
      >
        &rarr;
      </button>
    </div>
    <div>
      <!-- Dots navigation -->
      <div class="relative flex justify-center transform-[translateX(-50%)]">
        <!-- Dot for each slide -->
        <button
          v-for="(_, index) in dots"
          :key="index"
          class="border-none bg-[#b9b9b9] opacity-70 h-4 w-4 rounded-3xl cursor-pointer transition-all duration-500"
          :class="{ 'dots__dot--active': index === curSlide }"
          @click="goToSlide(index)"
        ></button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, inject } from 'vue'

// Define reactive variables
const slides = ref<HTMLElement[]>([]) // Holds the slide elements
const dots = ref<number[]>([]) // Holds the dot elements
const curSlide = inject('curSlide')
const maxSlide = ref<number>(0) // Holds the total number of slides

// Create dots for each slide
const createDots = (): void => {
  dots.value = Array.from({ length: slides.value.length }, (_, i) => i)
}

// Go to a specific slide
const goToSlide = (slide: number) => {
  slides.value.forEach((_, i) => {
    slides.value[i].style.transform = `translateX(${100 * (i - slide)}%)`
    //slides.value[i].classList.add('hidden')
  })

  curSlide.value = slide
  //slides.value[slide].classList.remove('hidden')
  activateDot()
}

// Go to the next slide
const nextSlide = () => {
  curSlide.value = (curSlide.value + 1) % maxSlide.value
  activateDot()
  goToSlide(curSlide.value)
}

// Go to the previous slide
const prevSlide = () => {
  curSlide.value = (curSlide.value - 1 + maxSlide.value) % maxSlide.value
  activateDot()
  goToSlide(curSlide.value)
}

// Activate the dot corresponding to the current slide
const activateDot = () => {
  dots.value.forEach((_, index) => {
    const dot = dots.value[index]
    if (dot && typeof dot !== 'number') {
      ;(dot as HTMLElement).classList.remove('dots__dot--active')
    }
  })

  const currentDot = dots.value[curSlide.value]
  if (currentDot && typeof currentDot !== 'number') {
    ;(currentDot as HTMLElement).classList.add('dots__dot--active')
  }
}

// Run the following code after the component is mounted
onMounted(() => {
  slides.value = [...document.querySelectorAll<HTMLElement>('.slide')]

  maxSlide.value = slides.value.length // Set the total number of slides
  createDots() // Create dots for each slide
  activateDot() // Activate the dot corresponding to the current slide
  goToSlide(0) // Go to the first slide
})
</script>

<style scoped>
/* Active dot */
.dots__dot--active {
  background-color: white;
  opacity: 1;
}
</style>
