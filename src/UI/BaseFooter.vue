<template>
  <!-- Footer section -->
  <footer class="footer">
    <!-- Social icons -->
    <div class="footer-row">
      <slot name="social-icons"></slot>
    </div>
    <!-- Navigation links -->
    <div class="footer-row">
      <slot name="navigation"></slot>
    </div>
    <!-- Other content -->
    <div class="footer-row">
      <slot name="other"></slot>
    </div>
  </footer>
</template>

<style>
.footer {
  /* Footer background */
  background: rgba(15, 15, 15, 1);
  padding: 30px 0px;
  font-family: 'Play', sans-serif;
  text-align: center;
  position: relative;
}

.footer .footer-row {
  /* Footer rows */
  width: 100%;
  margin: 1% 0%;
  padding: 0.6% 0%;
  color: gray;
  font-size: 0.8em;
  padding: 0;
}
</style>