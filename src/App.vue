<template>
  <div>
    <SiteHeader />
    <SiteNavbar />
    <router-view></router-view>
  </div>
</template>

<script>
import './assets/css/import.css';

import SiteHeader from './components/SiteHeader';
import SiteNavbar from './components/SiteNavbar';
import globalStore from './store/globalStore';

import navItemsJSON from './data/nav-items.json';
export default {
  components: {
    SiteHeader,
    SiteNavbar
  },
  created() {
    const store = globalStore();
    store.setNavItems(navItemsJSON.navItems);
  }
}
</script>