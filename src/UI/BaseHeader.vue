<template>
  <!-- Fixed bar container -->
  <div class="fixed-bar flex-center">
    <!-- Collapse container -->
    <div class="collapse">
      <!-- Toggle Menu component -->
      <toggle-menu></toggle-menu>
      <!-- Menu list -->
      <ul class="menu bg-transparent font-roboto-16-white">
        <!-- About menu item -->
        <li>
          <base-button
            class="font-roboto-16-white"
            styleType="main-button"
            :url="{ name: 'about' }"
          >
            ABOUT
          </base-button>
        </li>
        <!-- Projects menu item -->
        <li>
          <base-button
            class="font-roboto-16-white"
            styleType="main-button"
            :url="{ name: 'projects' }"
          >
            PROJECTS
          </base-button>
        </li>
      </ul>
    </div>
    <!-- Content wrapper -->
    <div class="content-wrapper flex-center">
      <!-- Author name -->
      <p class="font-roboto-16-white">Alexandros Xirouchakis</p>
    </div>
    <!-- Header buttons container -->
    <div class="header-buttons-container">
      <!-- Contact button -->
      <base-button
        class="bg-transparent font-roboto-16-white"
        styleType="main-button"
        id="contact-button"
        :url="{ name: 'contact' }"
      >
        Contact
      </base-button>
    </div>
  </div>
</template>

<script setup>
import ToggleMenu from './ToggleMenu.vue'
</script>

<style>
  /* Styles for the fixed navigation bar */
  .fixed-bar {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    height: 80px;
    z-index: 999;
    justify-content: space-evenly;
    gap: 40%;
    backdrop-filter: blur(10px);
  }

  /* Styles for the contact button */
  #contact-button {
    border-color: white;
    border-style: groove;
    padding: 12px;
    color: white;
    background: linear-gradient(white 0 0) left / var(--p, 0) no-repeat;
    transition: 0.4s, background-position 0s;
    height: 50px;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);
    font-size: 18px;
  }

  #contact-button:hover {
    text-decoration: drop 1.2s ease-in-out infinite;
    --p: 100%;
    background-position: right;
    color: black;
  }

  /* Styles for the menu */
  .menu {
    display: flex;
    flex-direction: row;
    list-style-type: none;
    padding: 0;
    font-size: 30px;
    gap: 20%;
  }

  .menu > li > a {
    text-decoration: none;
    color: white;
  }

  /* Styles for the content wrapper */
  .content-wrapper {
    position: absolute;
    margin: auto;
  }

  /* Media query for smaller screens */
  @media (max-width: 767px) {
    /* Styles for the menu on smaller screens */
    .menu {
      position: absolute;
      top: 50px;
      left: 0;
      flex-direction: column;
      width: 100%;
      padding: 0;
      background-color: rgba(25, 25, 25, 1);
      z-index: 1;
    }

    .menu > li {
      background-color: rgba(25, 25, 25, 1);
    }

    .menu > li:not(:last-child) {
      border-bottom: 1px solid #444;
    }

    /* Styles for the fixed bar on smaller screens */
    .fixed-bar {
      justify-content: space-around;
      gap: 60%;
    }
  }
</style>