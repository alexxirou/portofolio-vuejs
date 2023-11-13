<template>
 
  <BaseFooter>
   
    <template #social-icons>
      <a v-for="icon in socialIcons" :key="icon.name" :href="icon.link">
        <i :class="icon.iconClass"></i>
      </a>
    </template>
    
    <template #navigation>
      <ul>
        <li v-for="link in footerLinks" :key="link.id">
          <RouterLink :to="link.url" class="footer-link">{{ link.text }}</RouterLink>
        </li>
      </ul>
    </template>
   
    <template #other> 
      <p>Based on LOKKEE STUDIOS portfolio model:<a href="https://www.lokkeestudios.com"> https://www.lokkeestudios.com/</a></p>
    </template>
  </BaseFooter>
</template>

<script setup>
import BaseFooter from '../UI/BaseFooter.vue'
import { RouterLink } from 'vue-router'

import { ref } from 'vue'

// Define socialIcons array
/**
 * Array of social icons with their names, links, and corresponding icon classes.
 * @type {Ref<Array<{ name: string, link: string, iconClass: string }>>}
 */
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
/**
 * Array of footer links with their IDs, URLs, and corresponding text.
 * @type {Ref<Array<{ id: number, url: object, text: string }>>}
 */
const footerLinks = ref([
  { id: 1, url: {name:'about'}, text: 'About' },
  { id: 2, url: {name:'source-code'}, text: 'Source code' },
  { id: 3, url: {name:'contact'}, text: 'Contact' },
]);

</script>

<style scoped>
/* Scoped styles for the component */
/**
 * Styles for anchor tags within the component.
 */
a {
  text-decoration: none;
  color: gray;
  transition: 0.5s;
}

/**
 * Hover styles for anchor tags within the component.
 */
a:hover {
  color: #fff;
}

/**
 * Styles for unordered lists within the component.
 */
ul {
  width: 100%;
  padding: 0;
}

/**
 * Styles for list items within the component.
 */
li {
  display: inline-block;
  margin: 1% 30px;
}

/**
 * Styles for icon elements within the component.
 */
i {
  font-size: 2em;
  margin: 0 1%;
}

/* Media query for mobile devices */
@media (max-width: 767px) {
  /**
   * Responsive styles for list items on mobile devices.
   */
  ul li{
    display:block;
    margin:10px 0px;
    text-align:center;
  }
  /**
   * Responsive styles for icon elements on mobile devices.
   */
  a i{
    margin:0% 3%;
  }
}

</style>
