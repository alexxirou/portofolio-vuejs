<template>
  <!-- Slide component -->
  <div class="slide slide--1 relative flex h-fit items-center justify-center transition-transform  duration-1000 top-0 ">
    <div class="relative h-full w-3/5">
      <!-- Project title -->
      <h1 class="text-weight-500 text-white text-center mb-6 text-2xl md:text-3xl  w-full">{{ title }}</h1>
      <!-- Project image -->
      <img src="../assets/images/forkify.png" alt="forkify.png" class="flex m-[auto] relative p-5 md:w-1/2 rounded-[50%]" /> 
      <!-- Project description --> 
      <p class="text-weight-500 text-white text-center mb-6 project__text">{{ description }}</p>
      <address class=" text-weight-500 text-white text-center mb-6 project__tecnologies-text">
        <!-- Project technologies -->
        <p class="pb-[5%]">Technologies: {{ technologies }}</p>
        <!-- Project demo link -->
        <a class="button-link " :style="{ backgroundColor: buttonColor, borderColor: buttonColor }" :href="demoLink">Demo</a>
      </address>
    </div>
  </div>
</template>

<script setup>
  // Destructuring props for better readability
  /**
   * Props destructuring for Slide component.
   * @type {{ title: string, description: string, technologies: string, buttonColor: string, demoLink: string }}
   */
  const { title, description, technologies, buttonColor, demoLink } = defineProps([
    'title',
    'description',
    'technologies',
    'buttonColor',
    'demoLink'
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
