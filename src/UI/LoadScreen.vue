<template>
  <transition name="scrollDown" :leave-to-class="isLoaded">
    <div v-if="isLoading" class="absolute text-center z-50 overflow-hidden bg-black h-full w-full">
      <h1 class="top-1/2 relative font-thin font-sans text-[#a3e1f0] ">
        <span
          v-for="(letter, i) in 'LOADING'"
          :key="i"
          :class="'let-' + i + ' animation-drop top-[0.63em] relative inline-block '"
        >
          {{ letter }}
        </span>
      </h1>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { Ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'

// Get the Vuex store instance
const store= useStore()

// Computed property to check if the app is currently loading
const isLoading: Ref<boolean> = computed(() => store.getters.isLoading)

// Computed property to determine the class for the transition when the loading is done
const isLoaded: Ref<string> = computed(() => (store.getters.isLoading ? '' : 'loaded'))

// Triggered when the component is mounted
onMounted(() => {
  // Simulate a 1.5-second delay before toggling the loading state to false
  setTimeout(() => {
    store.dispatch('toggleLoading', false)
  }, 1500)
})
</script>

<style lang="scss" scoped>


/* Styles for the preloader span */
@for $i from 0 through 6 {
  .let-#{$i} {
    transform: rotateX(-90deg);
    transition: opacity 0.5s ease-in, transform 0.5s ease-in;
    animation: drop 1.2s ease-in-out infinite;
    animation-delay: calc(1.2s + #{$i * 0.1s}); 
    font-size: calc(12px + 2.5vw);
  }
}
/* Animation keyframes for the drop effect */
@keyframes drop {
  10% {
    opacity: 0.5;
  }
  20% {
    opacity: 1;
    top: 3.78em;
    transform: rotateX(-360deg);
  }
  70% {
    opacity: 1;
    top: 3.78em;
    transform: rotateX(-360deg);
  }
  90% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
    top: 6.94em;
  }
}

/* Animation keyframes for the slideDown effect */
@keyframes slideDown {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(100%);
  }
}

/* Styles for the loaded state */
.loaded {
  animation: slideDown 2s ease-in-out forwards;
}
</style>
