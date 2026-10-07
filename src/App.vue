<script setup lang="ts">
import AppNav from '@/components/AppNav.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import IntroSection from '@/components/sections/IntroSection.vue'
import ServicesSection from '@/components/sections/ServicesSection.vue'
import StackSection from '@/components/sections/StackSection.vue'
import ProcessSection from '@/components/sections/ProcessSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import TimelineSection from '@/components/sections/TimelineSection.vue'
import LearningSection from '@/components/sections/LearningSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'

const year = new Date().getFullYear()
</script>

<template>
  <AppNav />

  <!-- Orden de secciones según design.md; los ids de cada <section> son los destinos de las anclas -->
  <main>
    <HeroSection />
    <IntroSection />
    <ServicesSection />
    <StackSection />
    <ProcessSection />
    <AboutSection />
    <TimelineSection />
    <LearningSection />
    <ContactSection />
  </main>

  <footer class="footer">
    <div class="container footer__inner">
      <p class="footer__text">© {{ year }} · Hecho con Vue y Vite.</p>
      <a class="footer__top" href="#inicio">Volver arriba ↑</a>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--color-border);
  padding-block: 2rem;
}

.footer__inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem 1.5rem;
}

.footer__text {
  font-size: 0.875rem;
}

.footer__top {
  font-size: 0.875rem;
  font-weight: 600;
}
</style>
