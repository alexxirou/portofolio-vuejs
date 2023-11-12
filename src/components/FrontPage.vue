<template>
  <!-- Component markup -->
  <base-header></base-header>

  <div
    ref="frontPage"
    class="front-page full-screen bg-transparent"
    @mousemove="handleMove"
    @touchemove="handleMove"
  >
    <img
      ref="backdropImage"
      :style="{ transform: imageTransform }"
      class="backdrop-image mask-section fixed-top"
      src="../assets/images/future-grid.webp"
      alias="future-grid"
    />
    <main-banner-view></main-banner-view>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BaseHeader from '../UI/BaseHeader.vue'
import MainBannerView from '../views/MainBannerView.vue'

// Refs
const frontPage = ref(null)
const backdropImage = ref(null)

// Array to store positions
const positions = []

// Transform for the backdrop image
const imageTransform = ref('translate(0px, 0px)')

// Event handler for mouse/touch move
const handleMove = (e) => {
  let x, y

  if (e.touches) {
    // Calculate x position for touch events
    x = -(e.touches[0].pageX + backdropImage.value.offsetLeft) / 100
    y = 0
  } else {
    // Calculate x and y positions for mouse events
    x = -(e.pageX + backdropImage.value.offsetLeft) / 200
    y = -(e.pageY + backdropImage.value.offsetTop) / 500
  }

  // Add current position to positions array
  positions.push({ x, y })

  // Limit positions array to a certain number of elements
  const averageCount = 10
  if (positions.length > averageCount) positions.splice(0, 1)

  // Calculate average x and y positions
  const current = positions.reduce(
    (acc, e) => {
      acc.x += e.x
      acc.y += e.y
      return acc
    },
    { x: 0, y: 0 }
  )
  current.x /= positions.length

  // Update image transform based on current positions
  imageTransform.value = `translate(${current.x}px, ${current.y}px)`
}
</script>

<style scoped>
/* Component-specific styles */

.front-page {
  position: sticky;
  position: -webkit-sticky;
  overflow: hidden;
}

.backdrop-image {
  height: 101%;
  width: 101%;
  position: fixed;
  top: 0;
  z-index: 1;
}

.mask-section {
  will-change: auto;
}

.mask-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(
    90deg,
    transparent 5%,
    rgba(0, 0, 0, 1) 30%,
    rgba(0, 0, 0, 1) 70%,
    transparent 95%
  );
  z-index: 1;
}
</style>