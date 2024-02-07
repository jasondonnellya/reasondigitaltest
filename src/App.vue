<template>
  <div>
    <SiteHeader />
    <SiteNavbar />
    <router-view></router-view>
    {{ navItems }}
  </div>
</template>

<script>
import SiteHeader from './components/SiteHeader';
import SiteNavbar from './components/SiteNavbar';
import globalStore from './store/globalStore';
export default {
  components: {
    SiteHeader,
    SiteNavbar
  },
  mounted() {
    const store = globalStore();
    store.setNavItems(["Home"]);
  },
  computed: {
    navItems() {
      const store = globalStore();
      return store.NavItems;
    }
  }
}
</script>