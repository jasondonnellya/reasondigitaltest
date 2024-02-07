import { defineStore } from 'pinia';

import navStore from './navStore';

export const globalStore = defineStore('counter', {
  state: () => ({
    ...navStore.state
  }),
  getters: {
    ...navStore.getters
  },
  actions: {
    ...navStore.setters
  },
});

export default globalStore;