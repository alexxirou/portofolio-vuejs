<template>
  <!-- BaseFooter component -->
  <BaseFooter>
    <!-- Slot for social icons -->
    <template #social-icons>
      <!-- Iterate over socialIcons array -->
      <a v-for="icon in socialIcons" :key="icon.name" :href="icon.link">
        <!-- Render icon by applying iconClass -->
        <i :class="icon.iconClass"></i>
      </a>
    </template>
    <!-- Slot for navigation links -->
    <template #navigation>
      <ul>
        <!-- Iterate over footerLinks array -->
        <li v-for="link in footerLinks" :key="link.id">
          <!-- Render link using RouterLink component -->
          <RouterLink :to="link.url" class="footer-link">{{ link.text }}</RouterLink>
        </li>
      </ul>
    </template>
    <!-- Slot for other content -->
    <template #other> 
      <!-- Additional information -->
      <p>Based on LOKKEE STUDIOS portfolio model:<a href="https://www.lokkeestudios.com"> https://www.lokkeestudios.com/</a></p>
    </template>
  </BaseFooter>
</template>

<script setup>
import BaseFooter from '../UI/BaseFooter.vue'
import { RouterLink } from 'vue-router'

import { ref } from 'vue'

// Define socialIcons array
const socialIcons = ref([
  { name: 'GitHub', link: 'https://github.com/alexxirou', iconClass: 'fa fa-github' },
  { name: 'LinkedIn', link: 'https://www.linkedin.com/in/alexxirou', iconClass: 'fa fa-linkedin' },
  { name: 'Facebook', link: 'https://facebook', iconClass: 'fa fa-facebook' },
  {
    name: 'Discord',
    link: 'https://discord.com/users/97752634122829824',
    iconClass: 'fa fa-discord'
  }
])

// Define footerLinks array
const footerLinks = ref([
  { id: 1, url: {name:'about'}, text: 'About' },
  { id: 2, url: {name:'source-code'}, text: 'Source code' },
  { id: 3, url: {name:'contact'}, text: 'Contact' },
]);

</script>

<style scoped>
/* Scoped styles for the component */
a {
  text-decoration: none;
  color: gray;
  transition: 0.5s;
}

a:hover {
  color: #fff;
}

ul {
  width: 100%;
  padding: 0;
}

li {
  display: inline-block;
  margin: 1% 30px;
}

i {
  font-size: 2em;
  margin: 0 1%;
}

/* Media query for mobile devices */
@media (max-width: 767px) {
  ul li{
    display:block;
    margin:10px 0px;
    text-align:center;
  }
   a i{
    margin:0% 3%;
  }
}

</style>
