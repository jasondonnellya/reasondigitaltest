<template>
  <nav class="site-navbar">
    <div>
      <img src="../assets/images/placeholder-logo.png" width="120" />
    </div>
    <div>
      <router-link class="site-navbar__link" v-for="{ label, href } in NavItems" :key="label" :to="href">
        {{ label }}
      </router-link>
    </div>
  </nav>
</template>

<script>
import NavItem from "../models/NavItem";
import globalStore from "../store/globalStore";
export default {
  data() {
    return {
      navItems: [new NavItem({ label: "", href: "" })]
    }
  },
  mounted() {
    const store = globalStore();
    this.navItems = store.NavItems;
  },
  computed: {
    NavItems() {
      return this.navItems;
    }
  }
}
</script>