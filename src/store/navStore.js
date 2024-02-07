export default {
  state: {
    navItems: []
  },
  getters: {
    navItems: (state) => state.navItems,
  },
  actions: {
    setNavItems(navItems) {
      this.navItems = navItems;
    },
  }
}