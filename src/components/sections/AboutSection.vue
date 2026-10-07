<script setup lang="ts">
import { about } from '@/data/portfolio'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import TechChip from '@/components/ui/TechChip.vue'
</script>

<template>
  <!-- Req 6: "Sobre mí" — texto narrativo + bloque "Actualmente explorando" -->
  <section id="sobre-mi" class="about section" aria-labelledby="about-title">
    <div class="container">
      <SectionHeading id="about-title" :title="about.title" eyebrow="Mi historia" />
      <div class="about__layout">
        <div class="about__text">
          <p v-for="(paragraph, index) in about.paragraphs" :key="index" class="about__paragraph">
            {{ paragraph }}
          </p>
        </div>
        <aside class="about__exploring" aria-labelledby="about-exploring-title">
          <h3 id="about-exploring-title" class="about__exploring-title">
            {{ about.exploringTitle }}
          </h3>
          <ul class="about__chips">
            <li v-for="item in about.exploring" :key="item">
              <TechChip :label="item" />
            </li>
          </ul>
        </aside>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about__layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: start;
}

@media (min-width: 1024px) {
  .about__layout {
    grid-template-columns: minmax(0, 3fr) minmax(0, 2fr);
    gap: 3rem;
  }
}

.about__text {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  max-width: 42rem;
}

.about__paragraph {
  font-size: 1.0625rem;
  line-height: 1.75;
  color: var(--color-text-muted);
}

.about__paragraph:first-child {
  font-size: 1.1875rem;
  color: var(--color-text);
}

.about__exploring {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  background: var(--color-surface);
  transition:
    border-color var(--transition),
    background var(--transition);
}

.about__exploring:hover {
  border-color: var(--color-accent);
  background: var(--color-surface-2);
}

.about__exploring-title {
  font-family: var(--font-mono);
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-accent-2);
}

.about__chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
</style>
