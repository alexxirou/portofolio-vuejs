<template>
  <!-- About section -->
  <section class="flex  flex-col md:flex-row align-middle justify-center w-full h-[100vh] max-md:flex-wrap max-md:text-center" id="about">
    <!-- Left section with image -->
    <div class="flex flex-row  w-screen select-none justify-center items-center md:w-1/3">
      <img class=" w-full" src="../assets/images/funny.jpg" />
    </div>
    <!-- Right section with text content -->
    <div class=" flex flex-row  w-screen  items-center justify-center md:w-1/3 ">
      <div >
        <h1 class="font-md font-sans text-2xl  text-[#008b8b]">ABOUT</h1>
        <div class="flex flex-col justify-center items-center md:items-start">
          <!-- Text animation component -->
          <text-animation></text-animation>
          <!-- Coding languages icons -->
          <div class="text-[50px]">
            <i
              v-for="(language, index) in codingLanguages"
              :key="index"
              :class="getIconClass(language)"
            ></i>
          </div>
        </div>
        <!-- SVG filters -->
        <svg  class="hidden" id="filters">
          <defs>
            <filter id="threshold">
              <feColorMatrix
                in="SourceGraphic"
                type="matrix"
                values="1 0 0 0 0
                        0 1 0 0 0
                        0 0 1 0 0
                        0 0 0 255 -140"
              />
            </filter>
          </defs>
        </svg>
        <!-- About text -->
        <p class="font-sans text-md text-white">
          I'm Alex, an enthusiastic creator on the internet. In 2022, I completed my studies in BTS
          Networks and Systems, <br />
          which provided me with a solid understanding of networking and systems. Subsequently, I
          pursued a year of education at the University of Strasbourg Department of Mathematics and
          Computer Science, where I gained valuable knowledge in low-level programming.
        </p>
        <br/>
        <!-- Download CV button -->
        <button
          @click.prevent="downloadFile"
          class="border-white border-solid border-[3px] h-[50px] w-[150px]  text-lg text-white main-button-style-ex"
        >
          Download CV
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>

import TextAnimation from './TextAnimation.vue'

// Array of coding languages for display
const codingLanguages = [
  'c',
  'scss',
  'tailwindcss',
  'typescript',
  'mysql',
  'ruby',
  'php',
  'vuejs',
  'nuxt',
  'django',
  'magento'
];

/**
 * Generates the icon class for a given coding language.
 *
 * @param {string} language - The coding language.
 * @returns {string} - The corresponding icon class.
 */
const getIconClass = (language) => `devicon-${language}-plain colored`;


const downloadFile = async () => {
  try {
    console.log('Downloading...');
    // Use an absolute URL for the file
    const fileUrl = 'assets/CV.pdf';
    // Fetch the file content
    const response = await fetch(fileUrl);
    if (!response.ok) {
      throw new Error('Failed to download file');
    }
    const blob = await response.blob();
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'CV.pdf';
    // Append the link to the document
    document.body.appendChild(link);
    // Trigger a click on the link
    link.click();
    // Remove the link from the document
    document.body.removeChild(link);
    console.log('Download complete!');
  } catch (error) {
    console.error('Error downloading file:', error.message);
  }
};



</script>

