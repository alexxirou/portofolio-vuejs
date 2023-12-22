<template>
 
  <BaseFooter>
   
    <template #social-icons>
      <a v-for="icon in socialIcons" :key="icon.name" :href="icon.link" class="decoration-none  text-gray transition duration-500 hover:text-white " >
        <i :class="icon.iconClass" class="text-[2em] md:my-1 mx-3 "></i>
      </a>
    </template>
    
    <template #navigation>
      <ul class="block text-center md:w-full">
        <li v-for="link in footerLinks" :key="link.id" class="block text-center md:inline mx-3 my-3">
          <RouterLink :to="link.url" class="decoration-none text-gray transition duration-500 hover:text-white ">{{ link.text }}</RouterLink>
        </li>
      </ul>
    </template>
   
    <template #other> 
      <address>Based on LOKKEE STUDIOS portfolio model:<a class="decoration-none text-gray transition duration-500 hover:text-white" href="https://www.lokkeestudios.com"> https://www.lokkeestudios.com/</a></address>
    </template>
  </BaseFooter>
</template>

<script setup lang="ts">
import BaseFooter from '../UI/BaseFooter.vue'
import { RouterLink } from 'vue-router'

import { ref } from 'vue'

// Define socialIcons array
/**
 * Array of social icons with their names, links, and corresponding icon classes.
 * @type {Ref<Array<{ name: string, link: string, iconClass: string }>>}
 */

interface SocialIcon {
  name: string;
  link: string;
  iconClass: string;
}

const socialIcons=ref<SocialIcon[]>([
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
interface FooterLink {
  id: number;
  url: object;
  text: string;
}

const footerLinks= ref<FooterLink[]>([
  { id: 1, url: {name:'about'}, text: 'About' },
  { id: 2, url: {name:'source-code'}, text: 'Source code' },
  { id: 3, url: {name:'contact'}, text: 'Contact' },
]);

</script>

