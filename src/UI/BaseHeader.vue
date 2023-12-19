<template>
  <!-- Fixed bar container -->
  <header
    class="fixed w-full top-0 h-20 z-10 justify-evenly max-md:justify-around max-md:gap-[40%] gap-[20%] flex items-center backdrop-blur-md"
  >
    <!-- Collapse container -->
    <div class="flex items-center">
      <!-- Toggle Menu component -->
      <toggle-menu></toggle-menu>
      <!-- Menu list -->
      <ul
        class=" menu flex text-center list-none md:flex-row md:relative md:top-0 md:bg-transparent font-sans  text-white text-3xl md:gap-[20%] left-0 flex-col  absolute top-20  bg-[#191919)]  "
      >
        <!-- About menu item -->
        <li class="max-md:bg-[#191919]">
          <base-button styleType="main-button" :url="{ name: 'about' }"> ABOUT </base-button>
        </li>
        <!-- Projects menu item -->
        <li class="max-md:bg-[#191919] ">
          <base-button styleType="main-button" :url="{ name: 'projects' }"> PROJECTS </base-button>
        </li>
      </ul>
    </div>
    <!-- Content wrapper -->
    <div class="absolute m-[auto] flex ">
      <!-- Author name -->
      <p class="text-white text-md font-sans">Alexandros Xirouchakis</p>
    </div>
    <!-- Header buttons container -->
    <div class="header-buttons-container">
      <!-- Contact button -->
      <base-button
        class="border-white border-solid border-[3px] h-[50px] p-3 text-lg text-white"
        styleType="main-button-style-ex"
        :url="{ name: 'contact' }"
      >
        Contact
      </base-button>
    </div>
  </header>
</template>

<script setup>
import ToggleMenu from './ToggleMenu.vue'
</script>

