<template>
  <div>
    <SiteHeader />
    <SiteNavbar />
    <router-view></router-view>
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
    store.setNavItems([]);
  }
}
</script>