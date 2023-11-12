<template>
  <transition name="scrollDown" :leave-to-class="isLoaded">
    <!-- Show the preloader if isLoading is true -->
    <div v-if="isLoading" class="preloader bg-black full-screen">
      <h1 class="loading-title">
        <!-- Display each letter of "LOADING" with a unique class -->
        <span v-for="(letter, i) in 'LOADING'" :key="i" :class="'let' + i">{{ letter }}</span>
      </h1>
    </div>
  </transition>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex';

// Get the Vuex store instance
const store = useStore();

// Computed property to check if the app is currently loading
const isLoading = computed(() => store.getters.isLoading);

// Computed property to determine the class for the transition when the loading is done
const isLoaded = computed(() => (store.getters.isLoading ? '' : 'loaded'));

// Triggered when the component is mounted
onMounted(() => {
  // Simulate a 3-second delay before toggling the loading state to false
  setTimeout(() => {
    store.dispatch('toggleLoading', false);
  }, 1500);
});
</script>

<style scoped>
@import url('../assets/loader.css');
</style>