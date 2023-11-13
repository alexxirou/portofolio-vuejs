# Portfolio Project

This Vue.js portfolio website showcases my skills, projects, and experience. The sections below provide details on installation, usage, components, views, UI elements, dependencies, and licensing.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
  - [About Section Component](#about-section-component)
  - [Contact Form Component](#contact-form-component)
  - [Slide Component](#slide-component)
  - [Footer Component](#footer-component)
  - [Front Page Component](#front-page-component)
  - [Projects Section Component](#projects-section-component)
  - [SourceCodeSection Component](#sourcecodesection-component)
  - [TextMorph Component](#textmorph-component)
  ...
- [Views](#views)
  - [MainBanner Component](#mainbanner-component)
  - [MainPageView Component](#mainpageview-component)
  ...
- [UI Elements](#ui-elements)
  - [BaseButton Component](#basebutton-component)
  - [FooterContent Component](#footercontent-component)
  - [BaseHeader Component](#baseheader-component)
  - [LoadScreen Component](#loadscreen-component)
  - [Slider Component](#slider-component)
  - [ToggleMenu Component](#togglemenu-component)
  ...
- [Dependencies](#dependencies)
  ...
- [License](#license)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)


## Installation


```bash
# Clone the repository
git clone https://github.com/your-username/your-repository.git

# Navigate to the project directory
cd your-repository

# Install dependencies
npm install
```

## Usage


```bash
# Run the application
npm run dev

# Build the application
npm run build
```

## Components

### About Section Component

The `AboutSection` component represents a section in a Vue.js application dedicated to showcasing information about the creator, Alex. This section is designed to provide a visually appealing presentation of Alex's background, skills, and a downloadable CV. The component is composed of different elements for a dynamic and engaging user experience.

#### Structure

The component is divided into two main sections:

1. **Left Section with Image:**
   - Displays an image of Alex (located at '../assets/images/funny.jpg').
   - Positioned on the left side of the screen.

2. **Right Section with Text Content:**
   - Contains text content about Alex's background and education.
   - Utilizes a text animation component (`TextAnimation`) to add a dynamic element.
   - Showcases coding languages icons using the `devicon` library.
   - Includes an SVG filter for visual effects.
   - Provides a "Download CV" button for users to download Alex's CV in PDF format.



### Contact Form Component

The `ContactForm` component is designed to provide a user-friendly contact form in a Vue.js application. It facilitates the sending of messages via email and includes dynamic features to handle form submission, email sending, and response display.

#### Reactive Data

The component uses Vue 3's Composition API with reactive data to manage the form data and track the status of email sending. The key data variables include:

- **formData:** A reactive reference to the form data, including the user's name, email, and message.
- **notSent:** A reactive boolean indicating whether the email has not been sent.
- **success:** A reactive boolean indicating the success status of the email sending.
- **responseData:** A reactive reference to the response data received from the server.

#### Methods

##### `sendEmail(data: object): Promise`
Sends an email using the provided data.
- Parameters:
  - `data`: The data to be sent in the email.
- Returns:
  - A promise that resolves to the response from the server.
- Throws:
  - An error if an error occurs during the request.

##### `submitForm(): Promise`
Submits the form data by sending an email. It utilizes the `sendEmail` method to handle the email sending process.



### Slide Component

The `Slide` component is a Vue.js component designed to showcase project details within a slideshow or presentation format. This component is suitable for displaying project information, including the project title, an image, description, technologies used, and a demo link.

#### Template Structure

The template of the `Slide` component includes the following elements:

- **Project Title (`project__header`):**
  - Displays the title of the project.

- **Project Image (`project__photo`):**
  - Displays an image representing the project.
  - Utilizes object-fit to cover the container, ensuring a consistent appearance.

- **Project Description (`project__text`):**
  - Provides a concise description of the project.
  - Styled for clarity and readability.

- **Project Technologies (`project__tecnologies`):**
  - Lists the technologies used in the project.
  - Styled to enhance visibility.

- **Demo Link Button (`button-link`):**
  - Provides a link to the project demo.
  - Styled with dynamic button color based on the `buttonColor` prop.

#### Script Setup

The script setup utilizes the Composition API to destructure props for improved readability. The destructured props include:
- `title`: The title of the project.
- `description`: A brief description of the project.
- `technologies`: The technologies used in the project.
- `buttonColor`: The color for the demo link button.
- `demoLink`: The URL for the project demo.


### Footer Component

The `Footer` component is a Vue.js component designed to provide a structured and customizable footer section for a web application. It leverages a `BaseFooter` component, incorporating social icons, navigation links, and additional information.

#### Template Structure

The template of the `Footer` component includes the following sections:

##### Social Icons (`#social-icons` template slot):
- Utilizes the `socialIcons` array to dynamically generate social icons with links.
- Icons include GitHub, LinkedIn, Facebook, and Discord.

##### Navigation Links (`#navigation` template slot):
- Utilizes the `footerLinks` array to dynamically generate navigation links.
- Each link is a Vue Router `RouterLink` component pointing to specific routes.
- Links include "About," "Source Code," and "Contact."

##### Other Information (`#other` template slot):
- Displays additional information, such as attribution to LOKKEE STUDIOS portfolio model.
- Includes a link to LOKKEE STUDIOS portfolio model.

#### Script Setup

The script setup utilizes the Composition API and imports necessary components and libraries:

- Imports the `BaseFooter` component for the overall footer structure.
- Imports the `RouterLink` component from `vue-router` for routing links.
- Defines a `socialIcons` array to store information about social icons (GitHub, LinkedIn, Facebook, Discord).
- Defines a `footerLinks` array to store information about navigation links.



### Front Page Component

The `FrontPage` component serves as the landing page of the Vue.js application, featuring a dynamic background effect and a main banner view. This component incorporates a `BaseHeader` component for the header structure and a `MainBannerView` component to showcase essential content.

#### Template Structure

The template of the `FrontPage` component includes the following elements:

- **Base Header (`<base-header>`):**
  - Provides a structured header for the page.

- **Front Page Container (`<div ref="frontPage" class="front-page">):**
  - Represents the main container for the front page content.
  - Applies a dynamic background effect based on mouse or touch movements.

- **Backdrop Image (`<img ref="backdropImage" class="backdrop-image">):**
  - Displays a backdrop image with a dynamic transform effect.
  - Responds to mouse or touch movements to create a visually engaging experience.

- **Main Banner View (`<main-banner-view></main-banner-view>`):**
  - Embeds the `MainBannerView` component to showcase primary content on the front page.

#### Script Setup

The script setup utilizes the Composition API and imports necessary components and libraries:

- Imports the `BaseHeader` and `MainBannerView` components.
- Defines references (`frontPage` and `backdropImage`) for interacting with specific elements in the template.
- Defines an array (`positions`) to store mouse or touch positions for the dynamic effect.
- Defines a ref (`imageTransform`) to store the transform style for the backdrop image.
- Implements an event handler (`handleMove`) for mouse and touch move events, updating the backdrop image's transform based on the movement.



### Projects Section Component

The `ProjectsSection` component is a Vue.js component that represents a section of a portfolio dedicated to showcasing various projects. It incorporates a `ProjectSlider` component to provide a dynamic and interactive display of project details.

#### Template Structure

The template of the `ProjectsSection` component includes the following elements:

- **Section Title:**
  - Displays a title for the projects section, emphasizing "Projects."

- **Project Slider Component (`<project-slider>`):**
  - Utilizes the `ProjectSlider` component to present project details through slides.
  - The default slot (`#default`) is used to define individual project slides.

- **First Slide Component (`<first-slide>`):**
  - Represents the first project slide within the slider.
  - Includes details such as the project title, image, description, technologies used, button color, and a demo link.
  - Demonstrates the potential for adding more slides as needed.

#### Script Setup

The script setup utilizes the Composition API and imports necessary components:

- Imports the `ProjectSlider` component to facilitate the display of project slides.
- Imports the `FirstSlide` component, which represents the content for the first project slide.




### SourceCodeSection Component

The `SourceCodeSection` integrates glitch animation on a canvas to provide a visually engaging experience for users interested in exploring the codebase. The component includes a title, description, and a button linking to the GitHub repository.

#### Script 

##### 1. Glitch Animation

- **Description:** The script incorporates glitch animation on an HTML canvas to create a visually captivating effect reminiscent of digital glitches.
- **Features:**
  - Random generation of glyphs, including numbers, operators, katakana, hiragana, and alphabet characters.
  - Dynamic glitch effects with varying spawn intervals, density, and glitch amount for an unpredictable and engaging display.

##### 2. Canvas Rendering

- **Description:** Utilizes HTML canvas and context to render glitched characters, creating a unique and interactive source code display.
- **Features:**
  - Responsive canvas dimensions that adapt to the window size for a seamless viewing experience.
  - Support for resizing the canvas on window resize events, ensuring optimal rendering.

##### 3. Dynamic Text Representation

- **Description:** Displays source code information through dynamically generated text elements with glitch effects.
- **Features:**
  - Implementation of a font style with specified height and family for consistent and aesthetically pleasing text rendering.
  - Inclusion of title, description, and a button with responsive styles for clarity and readability.

##### 4. Animation Loop

- **Description:** Implements an animation loop to continuously update and render glitched trails on the canvas.
- **Features:**
  - Real-time glitch effects achieved through updating trails' positions, lengths, and speeds in the animation loop.
  - Efficient handling of canvas clearing and drawing for smooth and visually appealing glitch animation.

##### 5. Trail Generation and Movement

- **Description:** Generates and moves glitch trails to create the appearance of dynamic, cascading glitch patterns.
- **Features:**
  - Creation of a universe of random glyphs serving as the source for glitch trails.
  - Randomized trail generation with characteristics such as column, speed, length, and starting position.
  - Continuous movement of glitch trails based on speed and distance, resulting in an ever-changing glitched display.

##### 6. User Interaction

- **Description:** Enables users to explore the source code by providing a button linking to the GitHub repository.
- **Features:**
  - Inclusion of a "Show me" button with a distinct style and a link to the GitHub repository for easy access.
  - Seamless redirection to the GitHub repository for users interested in exploring the actual source code.




### TextMorph Component

The `TextMorph` component represents a text morphing animation. It displays two text elements with a morphing effect between them, creating a visually engaging animation.


#### Setup Script

- **Text Array:** The `texts` array holds different texts to be displayed in the morphing animation. Customize the array with relevant texts based on your application's context.

- **Text Index and Morph:** The `textIndex` variable tracks the current index in the `texts` array, while the `morph` variable controls the morphing effect between two consecutive texts.

- **Text Style Computation:** The `text1Style` and `text2Style` variables dynamically compute styles for the two text elements based on the current morph value. This includes blur and opacity effects for a smooth transition.

- **Morphing Animation Functions:** The `doMorph` function handles incremental morphing, and the `animate` function initiates a continuous animation loop using `requestAnimationFrame`.

- **Animation Initialization:** The `onMounted` lifecycle hook ensures that the morphing animation starts when the component is mounted.




##   Views

### MainBanner Component

#### Overview

The `MainBanner` component is a Vue.js component that represents the main banner of the application. It includes a header title and a button to encourage users to check out projects. This component is designed for creating an eye-catching and engaging introduction to your application.

#### Features

- **Header Title:** The `header-title` class styles the main title of the banner. It utilizes dynamic font sizing for responsiveness and a text-decoration animation for visual appeal.

- **Button to Check Out Projects:** The component includes a button, implemented with the `base-button` component, encouraging users to navigate to the projects section.




### MainPageView Component

#### Overview

The `MainPageView` component is a Vue.js component that represents the main view of the application. It serves as the container for various sections, including About, Projects, Contact, Source Code, and Footer. This component plays a central role in organizing and displaying the main content of the application.

#### Features

- **Dynamic Loading Indicator:** The component includes a loading indicator that is initially shown until the application is fully loaded. The loading status is tracked using a Vuex store, and the `loaded` variable becomes `true` after a simulated delay.

- **Child Components:**
  - **About Section:** Displays information about the creator and showcases skills and education.
  - **Projects Section:** Showcases various projects using the `ProjectsSection` component.
  - **Contact Section:** Provides a user-friendly contact form for communication.
  - **Source Code Section:** Allows users to explore the source code of the portfolio application.
  - **Footer Content:** Displays a structured and customizable footer with social icons and navigation links.




## UI

### BaseButton Component

The `BaseButton` component renders a router link with a custom class and URL. It provides a flexible way to create buttons with customizable styles and behavior. The component uses Vue Router's `RouterLink` for seamless navigation between routes.

#### Features

- **Customizable Styles:** The button's appearance is highly customizable, including styles for default, hover, and active states. The button supports different style types based on the `styleType` prop.

- **Router Link Integration:** Utilizes Vue Router's `RouterLink` for navigation, allowing for seamless transition between routes within the application.

- **Dynamic Styling:** The button applies dynamic styling based on user interactions, such as hover and active states. This enhances the user experience by providing visual feedback.

- **Props:**
  - `url`: Specifies the destination URL for the router link.
  - `styleType`: Allows the selection of different button styles, with a default of 'default'.



### FooterContent Component


The `FooterContent` component represents the footer section of a web application. It provides a structured layout for displaying social icons, navigation links, and other content in the footer. The component is designed to be versatile, allowing developers to easily customize and extend the footer's content.

#### Features

- **Structured Layout:** The component divides the footer into three sections: social icons, navigation links, and other content. This structured layout provides clarity and organization to the footer.

- **Customizable Styling:** The footer's appearance is customizable, with options for adjusting the background color, padding, font family, text alignment, and other styling properties.

- **Dynamic Content:** Utilizes Vue.js slots to allow dynamic insertion of content for social icons, navigation links, and other miscellaneous content. This enables developers to easily update and extend the footer's content.



### BaseHeader

The `BaseHeader` represents a fixed navigation bar at the top of a web application. It provides a clean and responsive design with menu items, author information, and a contact button. The component is designed to be flexible, allowing for easy customization of styles and responsive behavior.

#### Features

- **Responsive Design:** The navigation bar is responsive and adjusts its layout for smaller screens, providing an optimal user experience on various devices.

- **Menu Items:** The component includes menu items for navigating to different sections of the application. Each menu item is implemented using the `base-button` component.

- **Author Information:** Displays the author's name in the content wrapper, providing a personal touch to the navigation bar.

- **Contact Button:** Includes a contact button with a dynamic styling effect on hover, encouraging user interaction.

- **Toggle Menu:** The navigation bar includes a toggle menu component (`ToggleMenu.vue`), which can be used to implement additional navigation options.




### LoadScreen Component


The `LoadScreen` component represents a loading screen or splash screen for a web application. It is designed to provide a visually appealing loading experience for users while the application is initializing or fetching data. The component can be easily integrated into any Vue.js project and customized based on the application's design.

#### Features

- **Responsive Design:** The loading screen adapts to different screen sizes, ensuring a consistent and visually pleasing experience on various devices.

- **Smooth Animation:** The component includes a smooth animation, enhancing the loading experience and keeping users engaged during application initialization.

- **Minimalist Design:** The loading screen follows a minimalist design approach, providing a clean and modern look.




### Slider Component


The `Slider` component is designed to create a responsive image slider with navigation buttons and dots. It allows users to navigate between slides easily, providing a visually engaging way to showcase content such as images or other media.

#### Features

- **Responsive Design:** The slider adapts to different screen sizes, ensuring a seamless experience on various devices.

- **Navigation Buttons:** Previous and next buttons enable users to navigate between slides.

- **Dot Navigation:** Dots below the slider indicate the number of slides and allow users to jump to a specific slide.

- **Dynamic Slide Creation:** The component dynamically creates dots for each slide based on the provided content.



### ToggleMenu 


The `ToggleMenu` component creates a toggleable menu button with animation effects. It utilizes an input checkbox to control the menu state and provides a visually appealing menu button with transitions.

#### Features

- **Toggleable Menu:** The component includes an input checkbox for toggling the menu state.

- **Animated Menu Button:** The menu button is animated with pseudo-elements to create a visual effect.

- **Responsive Design:** The component is designed to be responsive, with adjustments for smaller screens.




# Dependencies

The project relies on the following dependencies:

- **Vue.js:** The core JavaScript framework used for building the application's user interface.
- **Vue Router:** A Vue.js plugin for implementing navigation and routing in the application.
- **Devicon:** A set of icons representing programming languages, frameworks, and technology stacks.
- **Vuex:** A state management library for Vue.js applications, used for tracking the loading status in the `MainPageView` component.
- **GSAP (GreenSock Animation Platform):** A powerful animation library used for creating smooth and dynamic animations in various components.
- **Vue Glitch Animation Script:** A custom glitch animation script for creating an engaging glitch effect in the `SourceCodeSection` component.

# License

This project is licensed under the [MIT License](LICENSE).

# Acknowledgements

- The portfolio website is inspired by various portfolio templates and designs available online.

# Contact

For inquiries or further information, please contact alex.xirou@hotmail.com
