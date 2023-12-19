<template>
  <div class="flex; gap-[10px] w-[310px] h-[45px] m-0 " id="container">
    <!-- Display the first text element -->
    <span
      ref="text1"
      class="absolute  w-[310px] flex font-raleway text-4xl font-black text-white select-none max-md:justify-center"
      :style="text1Style"
      >{{ texts[textIndex % texts.length] }}</span
    >
    <!-- Display the second text element -->
    <span
      ref="text2"
      class="absolute  w-[310px] flex font-raleway text-4xl font-black text-white select-none  max-md:justify-center"
      :style="text2Style"
      >{{ texts[(textIndex + 1) % texts.length] }}</span
    >
  </div>
</template>

<script setup lang="ts">
/**
 * TextMorph component.
 * @component
 * @description This component represents a text morphing animation.
 * It displays two text elements with a morphing effect between them.
 */
import { Ref,ref, computed, onMounted } from 'vue'

// Define an array of texts
const texts: Ref<string[]> = ref(['Front-end', 'Back-end', 'Server-setup', 'Networking'])
// Initialize the text index
const textIndex: Ref<number> = ref(0)
// Initialize the morph value
let morph: Ref<number> = ref(0)
// Initialize the time value
let time: Ref<Date> = ref(new Date())

// Compute the style for the first text element
const text1Style: Ref<Record<string, string>> = computed((): Record<string, string> => ({
  filter: `blur(${Math.min(8 * morph.value, 8)}px)`,
  opacity: `${Math.pow(1 - morph.value, 0.4) * 100}%`
}))

// Compute the style for the second text element
const text2Style: Ref<Record<string, string>> = computed((): Record<string, string> => ({
  filter: `blur(${Math.min(8 * (1 - morph.value), 8)}px)`,
  opacity: `${Math.pow(morph.value, 0.4) * 100}%`
}))

// Perform morphing animation
const doMorph = (dt: number): void => {
  morph.value += dt * 0.65 // Adjusted increment step
  if (morph.value >= 1.5) {
    textIndex.value++
    morph.value = 0
  }
}

// Animate the morphing
const animate: () => void = (): void => {
  requestAnimationFrame(animate)

  let newTime = new Date() 
  let timeValue = time.value instanceof Date ? time.value : new Date(); // Ensure time.value is a Date

  let dt: number = (newTime.getTime() - timeValue.getTime()) / 1000; // Calculating time difference in seconds / 1000
  time.value = newTime

  doMorph(dt)
}

// Perform the animation when the component is mounted
onMounted(() => {
  animate()
})
</script>
