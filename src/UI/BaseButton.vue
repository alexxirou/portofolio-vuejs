<template>
  <!-- Renders a router link with a custom class and URL -->
  <router-link :class="buttonClass" :to="url">
    <slot>Default Link Text</slot>
  </router-link>
</template>

<script setup>
import { computed } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
  url: {
    type: Object,
    required: false,
  },
  styleType: {
    type: String,
    default: 'default',
  },
});

// Computes the class for the button based on the styleType prop
const buttonClass = computed(() => {
  return `${props.styleType}`;
});
</script>

<style>
/* Styles for the button */
.main-button {
  margin: auto;
  border-color: transparent;
  background-image: linear-gradient(90deg, white, white); /* underline color */
  background-size: 0 2px; /* vertical size of underline */
  background-repeat: no-repeat;
  background-position: left 70% top 95%; /* start position of underline */
  transition: background-size 0.3s ease-in;
  text-decoration: none;
}

.main-button:hover {
  cursor: pointer;
  background-size: 100% 2px;
}

.main-button:active {
  opacity: 0.5;
}

.button-link:active {
  opacity: 0.5;
}

.button-link {
  font-size: 20px;
  color: white;
  padding: 15px;
  text-decoration: none !important;
  border: 2px solid white;
  box-shadow: 0.2px;
  background: linear-gradient(white 0 0) left / var(--p, 0) no-repeat;
  letter-spacing: 2px;
  transition: all 0.25s;
  margin-bottom: auto;
  z-index: 1;
}

.button-link:hover {
  --p: 100%;
  background-position: right;
  color: black;
  letter-spacing: 5px;
}
</style>