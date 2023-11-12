<template>
  <!-- Projects section -->
  <section class="bg-black full-screen flex-center" id="projects">
    <!-- Section title -->
    <h1 class="font-roboto-16-white" style="font-size: 24px; color:#008b8b;">
      Projects
    </h1>

    <!-- Project slider component -->
    <project-slider>
      <!-- Using the 'slides' named slot -->
      <template #default>
        <!-- First slide -->
        <first-slide
          title="Recipe Finder Web Application"
          imageSrc="../assets/images/forkify.png"
          description="The Recipe Finder Web Application is a fully functional and responsive web application that allows users to discover and explore a wide variety of recipes. It provides users with an intuitive and interactive interface to search for recipes, view detailed recipe information, adjust serving sizes, and bookmark their favorite recipes for quick access."
          technologies="JavaScript (ES6+), Parcel Bundler, Forkify API"
          buttonColor="#8b0000"
          demoLink="https://64c7ebbfbbd84f0008220220--gregarious-fox-dab8e8.netlify.app/"
        ></first-slide>

        <!-- Add more slides as needed -->
      </template>
    </project-slider>
  </section>
</template>

<script setup>
import ProjectSlider from '../UI/ProjectSlider.vue'
import FirstSlide from './FirstSlide.vue'
</script>

<style scoped>
/* Styles specific to the #projects section */
#projects {
  flex-direction: column;
  min-height: 1200px;
}
</style>