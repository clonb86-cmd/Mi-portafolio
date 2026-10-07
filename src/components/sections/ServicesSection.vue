<script setup lang="ts">
import { services } from '@/data/portfolio'
import SectionHeading from '@/components/ui/SectionHeading.vue'
</script>

<template>
  <!-- Req 3: "Lo que hago" — 4 servicios en cuadrícula responsive -->
  <section id="servicios" class="services section" aria-labelledby="servicios-title">
    <div class="container">
      <SectionHeading id="servicios-title" title="Lo que hago" eyebrow="Servicios" />
      <ul class="services__grid">
        <li v-for="service in services" :key="service.title" class="services__card">
          <span class="services__icon" aria-hidden="true">{{ service.icon }}</span>
          <h3 class="services__title">{{ service.title }}</h3>
          <p class="services__description">{{ service.description }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.services__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
}

@media (min-width: 640px) {
  .services__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .services__grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

.services__card {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.75rem 1.5rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  background: var(--color-surface);
  transition:
    border-color var(--transition),
    transform var(--transition),
    background var(--transition);
}

.services__card:hover {
  border-color: var(--color-accent);
  background: var(--color-surface-2);
  transform: translateY(-3px);
}

@media (prefers-reduced-motion: reduce) {
  .services__card:hover {
    transform: none;
  }
}

.services__icon {
  display: inline-grid;
  place-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: var(--radius-sm);
  background: var(--color-surface-2);
  border: 1px solid var(--color-border);
  font-size: 1.5rem;
  line-height: 1;
}

.services__description {
  font-size: 0.975rem;
}
</style>
