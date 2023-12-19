import { createStore } from 'vuex'

/**
 * Create a Vuex store
 * @returns {object} The Vuex store
 */
const store = createStore({
  state: {
    isLoading: true // Represents the loading state
  },
  mutations: {
    /**
     * Set the loading state
     * @param {object} state - The Vuex state object
     * @param {boolean} value - The new loading state value
     */
    setLoading(state: object, value: boolean): void {
      if ('isLoading' in state) {
        state.isLoading = value
      }
    }
  },
  actions: {
    /**
     * Toggle the loading state
     * @param {object} context - The Vuex context object
     * @param {boolean} value - The new loading state value
     */
    toggleLoading({ commit }: { commit: Function }, value: boolean) {
      commit('setLoading', value)
    }
  },
  getters: {
    /**
     * Get the loading state
     * @param {object} state - The Vuex state object
     * @returns {boolean} The loading state
     */
    isLoading(state: object): boolean {
      if ('isLoading' in state && typeof state.isLoading === 'boolean') {
        return state.isLoading
      }
      return false
    }
  }
})

export default store
