<template>
  <!-- Main page container -->
  <div v-if="loaded" class="relative z-[1] bg-black scroll-smooth">
    <!-- About section component -->
    <about-section></about-section>

    <!-- Projects section component -->
    <projects-section></projects-section>

    <!-- Contact section component -->
    <contact-section></contact-section>

    <!-- Source code section component -->
    <source-code-section></source-code-section>

    <!-- Footer content component -->
    <footer-content></footer-content>
  </div>
</template>

<script setup>
/**
 * MainPageView component.
 * @component
 * @description This component represents the main view of the application.
 * It includes various sections like About, Projects, Contact, Source Code, and Footer.
 */
import { ref, watch } from 'vue';
import { useStore } from 'vuex';
import AboutSection from '../components/AboutSection.vue';
import ProjectsSection from '../components/ProjectsSection.vue';
import ContactSection from '../components/ContactSection.vue';
import SourceCodeSection from '../components/SourceCodeSection.vue';
import FooterContent from '../components/FooterContent.vue';

// Create a reactive variable to track if the page is loaded
const loaded = ref(false);

// Get the Vuex store instance
const store = useStore();

/**
 * Watch the "isLoading" getter in the store and update the "loaded" variable accordingly.
 * @function
 * @param {boolean} newValue - The new value of the "isLoading" getter.
 */
watch(() => store.getters.isLoading, (newValue) => {
  if (newValue === false) {
    // Set a timeout to simulate a delay before setting the page as loaded
    setTimeout(() => {
      loaded.value = true;
    }, 2000);
  }
});

// Export the store instance
store;
</script>

