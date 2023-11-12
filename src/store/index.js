import { createStore } from 'vuex';

/**
 * Create a Vuex store
 * @returns {object} The Vuex store
 */
const store = createStore({
  state: {
    isLoading: true, // Represents the loading state
  },
  mutations: {
    /**
     * Set the loading state
     * @param {object} state - The Vuex state object
     * @param {boolean} value - The new loading state value
     */
    setLoading(state, value) {
      state.isLoading = value;
    },
  },
  actions: {
    /**
     * Toggle the loading state
     * @param {object} context - The Vuex context object
     * @param {boolean} value - The new loading state value
     */
    toggleLoading({ commit }, value) {
      commit('setLoading', value);
    },
  },
  getters: {
    /**
     * Get the loading state
     * @param {object} state - The Vuex state object
     * @returns {boolean} The loading state
     */
    isLoading(state) {
      return state.isLoading;
    },
  },
});

export default store;