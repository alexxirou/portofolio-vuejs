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

