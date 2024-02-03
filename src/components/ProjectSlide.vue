<template>
  <!-- Slide component -->
  <div
    class="slide  relative flex md:w-[60vw] w-[90vw] items-center justify-center transition-all duration-1000 "
  >
    <div class="relative md:h-80 h-full md:w-3/5 w-full">
      <!-- Project title -->
      <h1 class="text-weight-500 text-white text-center mb-6 text-2xl md:text-3xl w-full">
        {{ title }}
      </h1>
      <!-- Project image -->
     <img :src="imageSrc" :alt="title" class="flex m-[auto] p-5 md:w-[30vw] rounded-[50%]" />

      <!-- Project description -->
      <p class="text-weight-500 text-white text-center mb-6 project__text">{{ description }}</p>
      <address class="text-weight-500 text-white justify-center text-center mb-6 project__tecnologies-text">
        <!-- Project technologies -->
        <p class="pb-[5%] w-[80%]  m-auto ">Technologies: {{ technologies }}</p>
        <!-- Project demo link -->
        <a
          class="button-link"
          :style="{ backgroundColor: buttonColor, borderColor: buttonColor }"
          :href="demoLink"
          >Demo</a
        >
      </address>
    </div>
  </div>
</template>

<script setup lang="ts">
// Destructuring props for better readability
/**
 * Props destructuring for Slide component.
 * @type {{ title: string, description: string, technologies: string, buttonColor: string, demoLink: string imageSrc: string }}
 */
interface SlideProps {
  title?: string;
  description?: string;
  technologies?: string;
  buttonColor?: string;
  demoLink?: string;
  imageSrc?: string;

}


const { title, description,technologies, buttonColor, demoLink }: SlideProps = defineProps([
  'title',
  'description',
  'technologies',
  'buttonColor',
  'demoLink',
  'imageSrc'
]);

</script>


<style scoped>
/**
   * Styles for the project text.
   */
.project__text {
  font-size: calc(12px + 0.5vw);
}

.project__tecnologies-text {
  font-size: calc(12px + 0.2vw);
}
</style>
