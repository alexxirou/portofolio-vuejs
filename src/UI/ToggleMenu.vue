<template>
  <!-- Input checkbox for the menu toggle -->
  <input id="menu-toggle" type="checkbox" />
  <!-- Label for the menu toggle, acts as the button -->
  <label
    class="md:hidden w-[30px] flex m-[auto] cursor-pointer flex-col justify-center items-center"
    for="menu-toggle"
  >
    <!-- Menu button -->
    <i
      class="fa fa-bars text-3xl text-white transition duration-300 hover:text-gray-500 md:ml-20 rounded-md"
    ></i>
  </label>
</template>

<style>
/* Hide the menu toggle checkbox */
#menu-toggle {
  display: none;
}

/* Media query for screens with max-width of 767px */
@media (max-width: 767px) {
  /* Styling for the menu items */
  #menu-toggle ~ .menu li {
    height: 0;
    width: 100vw;
    margin: 0;
    padding: 0;
    border: 0;
    transition: height 400ms ease-in, opacity 400ms ease-in;
    text-align: center;
    opacity: 0;
    overflow: hidden;
  }

  /* Styling for the menu items when the menu toggle is checked */
  #menu-toggle:checked ~ .menu li {
    height: 40px; /* Change this value to the desired expanded height */
    transition: height 400ms ease-in, opacity 400ms ease-in;
    border: 2px solid black;
    font-size: 20px;
    margin: auto;
    opacity: 1;
  }
}

</style>
