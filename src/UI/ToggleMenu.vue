<template>
  <!-- Input checkbox for the menu toggle -->
  <input id="menu-toggle" type="checkbox" />
  <!-- Label for the menu toggle, acts as the button -->
  <label class="menu-button-container" for="menu-toggle">
    <!-- Menu button -->
    <div class="menu-button"></div>
  </label>
</template>

<style>
/* Hide the menu toggle checkbox */
#menu-toggle {
  display: none;
}

/* Styling for the menu button and its pseudo-elements */
.menu-button,
.menu-button::before,
.menu-button::after {
  background-color: #fff;
  position: absolute;
  margin-top: 8px;
  height: 5px;
  width: 30px;
  transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
  border-radius: 2px;
}

.menu-button::before {
  content: "";
  margin-top: -8px;
}

.menu-button::after {
  content: "";
  margin-top: 8px;
}

/* Styling for the menu button when the menu toggle is checked */
#menu-toggle:checked + .menu-button-container .menu-button::before {
  margin-top: 0px;
  transform: rotate(405deg);
}

#menu-toggle:checked + .menu-button-container .menu-button {
  background: transparent;
}

#menu-toggle:checked + .menu-button-container .menu-button::after {
  margin-top: 0px;
  transform: rotate(-405deg);
}

/* Styling for the menu button container */
.menu-button-container {
  display: none;
  height: 100%;
  width: 30px;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* Media query for screens with max-width of 767px */
@media (max-width: 767px) {
  /* Display the menu button container */
  .menu-button-container {
    display: flex;
    margin: auto;
  }

  /* Styling for the menu items */
  #menu-toggle ~ .menu li {
    height: 0;
    margin: 0;
    padding: 0;
    border: 0;
    transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
    text-align: center;
    opacity: 0;
  }

  /* Styling for the menu items when the menu toggle is checked */
  #menu-toggle:checked ~ .menu li {
    height: 30px;
    transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
    width: 95%;
    border: 2px solid black;
    padding-top: 5px;
    font-size: 20px;
    margin: auto;
    opacity: 1;
  }

  /* Styling for the main button */
  .main-button {
    margin: auto;
    overflow: hidden;
  }
}
</style>