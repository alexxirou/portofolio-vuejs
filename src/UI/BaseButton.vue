<template>
  <!-- Renders a router link with a custom class and URL -->
  <router-link :class="buttonClass" :to="url">
    <slot>Default Link Text</slot>
  </router-link>
</template>

<script setup lang="ts">
import { Ref, computed } from 'vue';
import { RouterLink,  RouteLocationRaw } from 'vue-router';

const props= defineProps({
  url: {
    type: Object as () => RouteLocationRaw,
    default: () => '',
    required: false,
  },
  styleType: {
    type: String,
    default: 'default',
  },
});

// Computes the class for the button based on the styleType prop
const buttonClass: Ref<string> = computed((): string => {
  return `${props.styleType}`;
});
</script>

