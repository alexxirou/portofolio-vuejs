<template>
  <div id="container">
    <!-- Display the first text element -->
    <span ref="text1" class="text" :style="text1Style">{{ texts[textIndex % texts.length] }}</span>
    <!-- Display the second text element -->
    <span ref="text2" class="text" :style="text2Style">{{ texts[(textIndex + 1) % texts.length] }}</span>
  </div>
</template>

<script setup>
/**
 * TextMorph component.
 * @component
 * @description This component represents a text morphing animation.
 * It displays two text elements with a morphing effect between them.
 */
import { ref, computed, onMounted } from 'vue';

// Define an array of texts
const texts = ref(['Front-end', 'Back-end', 'Server-setup', 'Networking']);
// Initialize the text index
const textIndex = ref(0);
// Initialize the morph value
let morph = ref(0);
// Initialize the time value
let time = ref(new Date());

// Compute the style for the first text element
const text1Style = computed(() => ({
  filter: `blur(${Math.min(8 * morph.value, 8)}px)`,
  opacity: `${Math.pow(1 - morph.value, 0.4) * 100}%`
}));

// Compute the style for the second text element
const text2Style = computed(() => ({
  filter: `blur(${Math.min(8 * (1 - morph.value), 8)}px)`,
  opacity: `${Math.pow(morph.value, 0.4) * 100}%`
}));

// Perform morphing animation
const doMorph = (dt) => {
  morph.value += dt * 0.65; // Adjusted increment step
  if (morph.value >= 1.5) {
    textIndex.value++;
    morph.value = 0;
  }
};

// Animate the morphing
const animate = () => {
  requestAnimationFrame(animate);

  let newTime = new Date();
  let dt = (newTime - time.value) / 1000;
  time.value = newTime;

  doMorph(dt);
};

// Perform the animation when the component is mounted
onMounted(() => {
  animate();
});
</script>

<style scoped>
/**
 * Scoped styles for the TextMorph component.
 */
.text {
  position: absolute;
  width: 100%;
  display: flex;
  font-family: 'Raleway', sans-serif;
  font-size: 30pt;
  color: white;
  user-select: none;
}

#container {
  display: flex;
  gap: 10px;
  width: 310px;
  height: 40pt;
  filter: url(#threshold) blur(0.6px);
}

@media (max-width: 767px) {
  .text-container {
    text-align: center;
    justify-content: center;
  }

  .text {
    justify-content: center;
  }
  #container {
    justify-content: center;
    margin: auto;
  }
}
</style>
