<template>
  <!-- Main application template -->
  <load-screen></load-screen>
  <front-page></front-page>
  <main-page-view></main-page-view>
</template>

<script setup lang="ts">
/**
 * Main application component.
 * @component
 * @description This component serves as the entry point for the application.
 * It includes the LoadScreen, FrontPage, and MainPageView components.
 */
  import LoadScreen from './UI/LoadScreen.vue';
  import FrontPage from './components/FrontPage.vue';
  import MainPageView from './views/MainPageView.vue';
</script>

<style>

</style>
