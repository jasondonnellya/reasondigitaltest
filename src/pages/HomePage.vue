<template>
  <div>
    <HeroSection />
    <AboutSection />
    <div class="site-section text-center">
      {{ catFact }}
    </div>
    <HelpSection />
    <WhatWeDoSection />
  </div>
</template>

<script>
import AboutSection from '../components/AboutSection';
import HelpSection from '../components/HelpSection';
import HeroSection from '../components/HeroSection';
import WhatWeDoSection from '../components/WhatWeDoSection';
export default {
  components: {
    AboutSection,
    HelpSection,
    HeroSection,
    WhatWeDoSection
  },
  data() {
    return {
      catFact: ''
    }
  },
  mounted() {
    // pull cat fact.
  }
}
</script>