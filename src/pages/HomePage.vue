<template>
  <div>
    <HeroSection />
    <AboutSection />
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
  }
}
</script>