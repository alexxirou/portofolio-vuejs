<template>
  <!-- Main banner -->
  <div class=" fixed flex-col text-center justify-center items-center flex w-full h-full bg-transparent">
    <!-- Header title -->
    <h1 class="text-center  text-white mt-[auto] select-none header-title ">Full-stack<br />programming</h1>
    <!-- Button to check out projects -->
    <base-button  styleType="button-link" :url="{ name: 'projects' }">Check me out</base-button>
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
}


</style>
