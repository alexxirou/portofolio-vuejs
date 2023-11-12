<template>
  <!-- This is the main template -->
  <load-screen></load-screen>
  <front-page></front-page>
  <main-page-view></main-page-view>
</template>

<script setup>
  // Importing necessary components
  import LoadScreen from './UI/LoadScreen.vue';
  import FrontPage from './components/FrontPage.vue';
  import MainPageView from './views/MainPageView.vue';
</script>

<style>
  /* Importing necessary styles */
  @import url("./assets/fonts.css");
  @import url("./assets/main.css");
</style>