<template>
  <!-- Main banner -->
  <div class="main-banner full-screen flex-center bg-black">
    <!-- Header title -->
    <h1 class="header-title">Full-stack<br />programming</h1>
    <!-- Button to check out projects -->
    <base-button styleType="button-link" :url="{ name: 'projects' }">Check me out</base-button>
  </div>
</template>

<style scoped>
/**
 * MainBanner component.
 * @component
 * @description This component represents the main banner of the application.
 * It includes a header title and a button to check out projects.
 */
/* Header title styles */
.header-title {
  font-size: calc(12px + 4.5vw);
  text-align: center;
  color: white;
  margin-top: auto;
  text-decoration: drop 1.2s ease-in-out infinite;
}

/* Main banner styles */
.main-banner {
  flex-direction: column;
  position: fixed;
}
</style>
