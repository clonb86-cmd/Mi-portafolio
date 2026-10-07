<script setup lang="ts">
import { timeline } from '@/data/portfolio'
import SectionHeading from '@/components/ui/SectionHeading.vue'
</script>

<template>
  <!-- Req 7: "Mi trayectoria" — línea de tiempo vertical -->
  <section id="trayectoria" class="timeline section" aria-labelledby="trayectoria-title">
    <div class="container">
      <SectionHeading id="trayectoria-title" title="Mi trayectoria" eyebrow="Recorrido" />
      <ol class="timeline__list">
        <li
          v-for="(entry, index) in timeline"
          :key="`${entry.year}-${index}`"
          class="timeline__item"
        >
          <span class="timeline__dot" aria-hidden="true"></span>
          <div class="timeline__card">
            <time class="timeline__year" :datetime="entry.year">{{ entry.year }}</time>
            <h3 class="timeline__title">{{ entry.title }}</h3>
            <p class="timeline__description">{{ entry.description }}</p>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.timeline__list {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  max-width: 48rem;
  padding-left: 2rem;
}

/* Línea vertical */
.timeline__list::before {
  content: '';
  position: absolute;
  top: 0.5rem;
  bottom: 0.5rem;
  left: 0.4375rem;
  width: 2px;
  border-radius: 2px;
  background: linear-gradient(180deg, var(--color-accent), var(--color-accent-2));
  opacity: 0.6;
}

.timeline__item {
  position: relative;
}

.timeline__dot {
  position: absolute;
  top: 1.625rem;
  left: -2rem;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: var(--color-bg);
  border: 2px solid var(--color-accent-2);
  box-shadow: 0 0 0 4px var(--color-bg);
  transition: background var(--transition);
}

.timeline__card {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  padding: 1.25rem 1.5rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  background: var(--color-surface);
  transition:
    border-color var(--transition),
    background var(--transition);
}

.timeline__item:hover .timeline__card {
  border-color: var(--color-accent);
  background: var(--color-surface-2);
}

.timeline__item:hover .timeline__dot {
  background: var(--color-accent-2);
}

.timeline__year {
  font-family: var(--font-mono);
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: var(--color-accent-2);
}

.timeline__title {
  font-size: 1.125rem;
}

.timeline__description {
  font-size: 0.975rem;
}

@media (min-width: 640px) {
  .timeline__list {
    padding-left: 2.5rem;
  }

  .timeline__dot {
    left: -2.5rem;
  }
}
</style>
