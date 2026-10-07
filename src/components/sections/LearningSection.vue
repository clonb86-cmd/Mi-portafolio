<script setup lang="ts">
import { learning } from '@/data/portfolio'
import SectionHeading from '@/components/ui/SectionHeading.vue'
</script>

<template>
  <!-- Req 8: "Lo que estoy aprendiendo" — temas como tarjetas (sin artículo real) -->
  <section id="aprendizaje" class="learning section" aria-labelledby="aprendizaje-title">
    <div class="container">
      <SectionHeading id="aprendizaje-title" title="Lo que estoy aprendiendo" eyebrow="Conocimientos" />
      <ul class="learning__grid">
        <li v-for="(topic, index) in learning" :key="topic.title" class="learning__card">
          <span class="learning__index" aria-hidden="true">
            {{ String(index + 1).padStart(2, '0') }}
          </span>
          <h3 class="learning__title">{{ topic.title }}</h3>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.learning__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 15rem), 1fr));
  gap: 1.25rem;
}

.learning__card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-height: 10rem;
  padding: 1.75rem 1.5rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  background: var(--color-surface);
  overflow: hidden;
  transition:
    border-color var(--transition),
    transform var(--transition),
    background var(--transition);
}

/* Línea de acento superior */
.learning__card::before {
  content: '';
  position: absolute;
  inset: 0 0 auto 0;
  height: 2px;
  background: linear-gradient(90deg, var(--color-accent), var(--color-accent-2));
  opacity: 0;
  transition: opacity var(--transition);
}

.learning__card:hover {
  border-color: var(--color-accent);
  background: var(--color-surface-2);
  transform: translateY(-3px);
}

.learning__card:hover::before {
  opacity: 1;
}

@media (prefers-reduced-motion: reduce) {
  .learning__card:hover {
    transform: none;
  }
}

.learning__index {
  font-family: var(--font-mono);
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: var(--color-accent-2);
}

.learning__title {
  font-size: 1.125rem;
  line-height: 1.4;
  color: var(--color-text);
}
</style>
