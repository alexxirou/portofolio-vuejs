<template>
  <!-- Slide component -->
  <div class="slide slide--1">
    <div class="projects--container">
      <!-- Project title -->
      <h5 class="project__header">{{ title }}</h5>
      <!-- Project image -->
      <img src="../assets/images/forkify.png" alt="forkify.png" class="project__photo" /> 
      <!-- Project description -->
      <p class="project__text">{{ description }}</p>
      <address class="project__tecnologies">
        <!-- Project technologies -->
        <p style="padding-bottom: 5%;">Technologies: {{ technologies }}</p>
        <!-- Project demo link -->
        <a class="button-link front" :style="{ backgroundColor: buttonColor, borderColor: buttonColor }" :href="demoLink">Demo</a>
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

<style>
  /**
   * Styles for the Slide component.
   */
  .slide {
    position: relative;
    top: 0;
    width: 100%;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    /* Animation transition */
    transition: transform 1s;
  }

  /**
   * Styles for the image within the Slide component.
   */
  .slide > img {
    /* Only for images that have different size than the slide */
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /**
   * Styles for the projects container.
   */
  .projects--container {
    width: 65%;
    height: 100%;
    position: relative;
  }

  /**
   * Styles for the quote mark before the projects container.
   */
  .projects--container::before {
    content: '\201C';
    position: absolute;
    top: -5.7rem;
    left: -6.8rem;
    line-height: 1;
    font-size: calc(12px + 1vw);
    font-family: inherit;
    color: var(--color-primary);
    z-index: -1;
  }

  /**
   * Styles for the project header.
   */
  .project__header {
    font-size: calc(12px + 1vw);
    font-weight: 500;
    margin-bottom: 1.5rem;
    color: white;
    text-align: center;
  }

  /**
   * Styles for the project text.
   */
  .project__text {
    text-align: center;
    font-size: calc(12px + 0.5vw);
    margin-bottom: 3.5rem;
    color: white;
    width: 100%;
  }

  /**
   * Styles for the project photo.
   */
  .project__photo {
    display: flex;
    margin: auto;
    width: 50%;
    border-radius: 50%;
  }

  /**
   * Styles for the project technologies.
   */
  .project__tecnologies {
    font-size: calc(12px + 0.2vw);
    font-weight: 500;
    align-self: end;
    margin: 0;
    text-align: center;
    color: white;
  }

  /**
   * Media query styles for smaller screens.
   */
  @media (max-width: 767px) {
    .project__tecnologies {
      padding-bottom: 5%;
    }
  }
</style>
