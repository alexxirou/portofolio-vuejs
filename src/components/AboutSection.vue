<template>
  <!-- About section -->
  <section class="flex-center full-screen" id="about">
    <!-- Left section with image -->
    <div class="right-section flex-center">
      <img class="max-image" src="../assets/images/funny.jpg" />
    </div>
    <!-- Right section with text content -->
    <div class="right-section flex-center">
      <div class="text-container" >
        <h1 class="font-roboto-16-white" style="color: #008b8b; font-size: 24px;">ABOUT</h1>
        <div class="title flex-center;">
          <!-- Text animation component -->
          <text-animation></text-animation>
          <!-- Coding languages icons -->
          <div class="coding-languages">
            <i
              v-for="(language, index) in codingLanguages"
              :key="index"
              :class="getIconClass(language)"
            ></i>
          </div>
        </div>
        <!-- SVG filters -->
        <svg id="filters">
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
        <p class="font-roboto-16-white">
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
          class="font-roboto-16-white bg-transparent main-button"
          id="contact-button"
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
  'tailwindcss',
  'javascript',
  'mysql',
  'ruby',
  'php',
  'vuejs',
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

/**
 * Downloads the CV file.
 */
 const downloadFile = async () => {
  console.log('Downloading...');

  // Construct the full URL to the PDF file
  const pdfUrl = '/src/assets/files/CV.pdf'; // Update with the actual path

  try {
    // Fetch the file content
    const response = await fetch(pdfUrl);
    
    // Check if the request was successful
    if (response.ok) {
      // Get the filename from the Content-Disposition header
      const filename = response.headers.get('Content-Disposition') || 'download.pdf';

      // Create a temporary link element
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = filename;

      // Append the link to the document
      document.body.appendChild(link);

      // Trigger a click on the link
      link.click();

      // Remove the link from the document
      document.body.removeChild(link);
    } else {
      console.error('Failed to fetch the file:', response.statusText);
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
};



</script>

<style scoped>
/* Styling for coding languages */
.coding-languages {
  color: white;
  font-size: 50px;
}

/* Styling for contact button */
#contact-button {
  border-color: white;
  border-style: groove;
  padding: 10px;
  color: white;
  background: linear-gradient(white 0 0) left / var(--p, 0) no-repeat;
  transition:
    0.4s,
    background-position 0s;
  height: 50px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  font-size: 18px;
}

/* Hover effect for contact button */
#contact-button:hover {
  text-decoration: drop 1.2s ease-in-out infinite;
  --p: 100%;
  background-position: right;
  color: black;
}

/* Styling for the about section */
#about {
  display: flex;
  justify-content: center;
}

/* Styling for the right section */
#about .right-section {
  flex-direction: row;
  width: 30%;
}

/* Styling for the max image */
.max-image {
  max-width: 100%;
  max-height: 100%;
}

/* Styling for the SVG filters */
#filters {
  display: none;
}

/* Responsive styling for smaller screens */
@media (max-width: 767px) {
  #about {
    flex-wrap: wrap;
    text-align: center;
  }

  #about .right-section {
    width: 100%;
  }
}
</style>
