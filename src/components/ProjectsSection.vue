<template>
  <!-- Projects section -->
  <section class="bg-black h-[100vh]  min-h-[1200px] flex flex-col justify-center items-center align-middle relative m-0  " id="projects">
    <!-- Section title -->
    <h1 class="font-sans text-3xl pb-4 text-[#008b8b]">
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
/**
 * ProjectsSection component.
 * @component
 * @description This component represents the section of the portfolio that displays various projects.
 * It includes a ProjectSlider component for showcasing project details and slides.
 */
import ProjectSlider from '../UI/ProjectSlider.vue';
import FirstSlide from './FirstSlide.vue';
</script>
