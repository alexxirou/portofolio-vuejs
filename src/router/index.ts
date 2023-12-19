
// router/index.ts

import { createRouter, createWebHistory, RouterScrollBehavior, Router, RouteLocationNormalized } from 'vue-router'

import AboutSection from '../components/AboutSection.vue'
import ProjectsSection from '../components/ProjectsSection.vue'
import ContactSection from '../components/ContactSection.vue'
import SourceCodeSection from '../components/SourceCodeSection.vue'
import FrontPage from '../components/FrontPage.vue'

/**
 * Creates a Vue Router instance with specified routes and scroll behavior.
 * @returns {Object} The Vue Router instance.
 */
const createCustomRouter = (): Router => {
  // Create a new router instance
  const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', component: FrontPage, name: 'home' },
      { path: '/about', component: AboutSection, name: 'about' },
      { path: '/projects', component: ProjectsSection, name: 'projects' },
      { path: '/contact', component: ContactSection, name: 'contact' },
      { path: '/source-code', component: SourceCodeSection, name: 'source-code' }
    ],
    scrollBehavior (to: RouteLocationNormalized, from: RouteLocationNormalized, savedPosition: any) {
      // Scroll to the element with the same name as the route
      if (to.name) {
        const element = document.getElementById((to.name) as string)
        if (element) {
          return { top: element.offsetTop + window.innerHeight, behavior: 'smooth' }
        }
      }
      // If no element found, scroll to top or saved position
      return savedPosition || { top: 0, behavior: 'smooth' }
    }
  })

  return router
}

// Create and export the router instance
const router = createCustomRouter()
export default router
