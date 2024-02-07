export default {
  state: {
    navItems: ["Default"]
  },
  getters: {
    NavItems: (state) => state.navItems,
  },
  actions: {
    setNavItems(navItems) {
      this.navItems = navItems;
    },
  }
}