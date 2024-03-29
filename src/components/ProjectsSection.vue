<template>
  <!-- Projects section -->
  <section
    class="bg-black h-screen w-screen flex flex-col justify-center items-center"
    id="projects"
  >
    <!-- Section title -->
    <h1 class="font-sans text-3xl pb-4 text-[#008b8b]">Projects</h1>

    <!-- Project slider component -->
    <project-slider>
      <!-- Using the 'slides' named slot -->
      <template #default>
        <project-slide
          v-for="(slide, index) in slides"
          :key="index"
          :title="slide.title"
          :imageSrc="slide.imageSrc"
          :description="slide.description"
          :technologies="slide.technologies"
          :buttonColor="slide.buttonColor"
          :demoColor="slide.demoColor"
          :demoLink="slide.demoLink"
          :sourceCode="slide.sourceCode"
          v-show="index === curSlide"
          >
        </project-slide>
      </template>
    </project-slider>
  </section>
</template>

<script setup lang="ts">
import ProjectSlider from '../UI/ProjectSlider.vue'
import ProjectSlide from './ProjectSlide.vue'
import imageForkify from './../assets/images/forkify.png';
import imageBattleship from './../assets/images/Battleship.png';
import imageAlpha_blog from './../assets/images/Alpha_blog.png';
import GameOfLife from './../assets/images/GameOfLife.png';
import SnakeGameMIPS from './../assets/images/SnakeGameMIPS.gif';
import { ref, provide } from 'vue'

const curSlide = ref<number>(0);
provide('curSlide', curSlide);

const slides = [
  {
    title: 'Recipe Finder Web Application',
    imageSrc: imageForkify,
    description:
      'The Recipe Finder Web Application is a fully functional and responsive web application that allows users to discover and explore a wide variety of recipes. It provides users with an intuitive and interactive interface to search for recipes, view detailed recipe information, adjust serving sizes, and bookmark their favorite recipes for quick access.',
    technologies: 'JavaScript (ES6+), Parcel Bundler, Forkify API',
    buttonColor: '#8b0000',
    demoColor: '#4C4CFF',
    demoLink: 'https://64c7ebbfbbd84f0008220220--gregarious-fox-dab8e8.netlify.app/',
    sourceCode: 'https://github.com/alexxirou/forkify-API'
  },
  {
    title: 'Battleship Game',
    imageSrc: imageBattleship,
    description:
      'A battleship game written in Ruby vs AI. It provides a GUI using tkinter for Ruby and Sinatra library to create API endpoints for a web UI.',
    technologies: 'Ruby, tk, sinstra, unicorn',
    buttonColor: '#8b0000',
    sourceCode: 'https://github.com/alexxirou/Battleship-ruby',
  },
  {
    title: 'Alpha_Blog',
    imageSrc: imageAlpha_blog,
    description:
      'A blog application written in Ruby on Rails, where users can sign-up, create, edit and delete articles.',
    technologies: 'Rails, Bootstrap, PostgreSQL',
    buttonColor: '#8b0000',
    demoColor: '#4C4CFF',
    demoLink: 'https://verbumsap.xyz/alpha_blog',
    sourceCode: 'https://github.com/alexxirou/alpha_blog'
  },
  {
    title: 'Game of Life',
    imageSrc: GameOfLife,
    description:
      'Game of Life written in C, compiled with or without tkinter for graphics UI',
    technologies: 'C, tkinter, Make',
    buttonColor: '#8b0000',
    sourceCode: 'https://github.com/alexxirou/Game-of-LIfe'
  },
  {
    title: 'SnaKe',
    imageSrc: SnakeGameMIPS,
    description:
      'Snake game written in MIPS Assembly and ran in Java emulator MARS',
    technologies: 'Assembly MIPS',
    buttonColor: '#8b0000',
    sourceCode: 'https://github.com/alexxirou/Snake-MIPS'
  }
];
</script>
