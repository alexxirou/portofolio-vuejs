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
  // Props destructuring
  const { title, description, technologies, buttonColor, demoLink } = defineProps(['title',  'description', 'technologies', 'buttonColor', 'demoLink']);
</script>


<style>
/* Slide component styles */
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

/* Slide image styles */
.slide > img {
  /* Only for images that have different size than slide */
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Projects container styles */
.projects--container {
  width: 65%;
  height: 100%;
  position: relative;
}

/* Quote mark styles */
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

/* Project header styles */
.project__header {
  font-size: calc(12px + 1vw);
  font-weight: 500;
  margin-bottom: 1.5rem;
  color: white;
  text-align: center;
}

/* Project text styles */
.project__text {
  text-align: center;
  font-size: calc(12px + 0.5vw);
  margin-bottom: 3.5rem;
  color: white;
  width: 100%;
}

/* Project photo styles */
.project__photo {
  display: flex;
  margin: auto;
  width: 50%;
  border-radius: 50%;
}

/* Project technologies styles */
.project__tecnologies {
  font-size: calc(12px + 0.2vw);
  font-weight: 500;
  align-self: end;
  margin: 0;
  text-align: center;
  color: white;
}

/* Media query for smaller screens */
@media (max-width: 767px) {
  .project__tecnologies {
    padding-bottom: 5%;
  }
}
</style>