<template>
  <!-- Main page container -->
  <div v-if="loaded" class="main-page bg-black">
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
import { ref , watch } from 'vue'
import { useStore } from 'vuex';
import AboutSection from '../components/AboutSection.vue'
import ProjectsSection from '../components/ProjectsSection.vue';
import ContactSection from '../components/ContactSection.vue';
import SourceCodeSection from '../components/SourceCodeSection.vue';
import FooterContent from '../components/FooterContent.vue';

// Create a reactive variable to track if the page is loaded
const loaded = ref(false);

// Get the Vuex store instance
const store = useStore();

// Watch the "isLoading" getter in the store and update the "loaded" variable accordingly
watch(() => store.getters.isLoading, (newValue) => {
  if (newValue === false) {
    // Set a timeout to simulate a delay before setting the page as loaded
    setTimeout(() => {
      loaded.value = true;
    }, 2000);
  }
})

// Export the store instance
store
</script>

<style scoped>
.main-page {
  position: relative;
  z-index: 1;
}
</style>