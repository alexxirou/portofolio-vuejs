<template>
  <!-- Footer section -->
  <footer class="bg-[#0f0f0f]  py-[40px] font-play text-center relative">
    <!-- Social icons -->
    <div class="w-full my-7 text-gray-500 text-[0.8em] ">
      <slot name="social-icons"></slot>
    </div>
    <!-- Navigation links -->
    <div class="w-full my-7 text-gray-500 text-[0.8em] ">
      <slot name="navigation"></slot>
    </div>
    <!-- Other content -->
    <div class="w-full my-7 text-gray-500 text-[0.8em] ">
      <slot name="other"></slot>
    </div>
  </footer>
</template>

