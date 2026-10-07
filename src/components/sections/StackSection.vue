<script setup lang="ts">
import { stack } from '@/data/portfolio'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import TechChip from '@/components/ui/TechChip.vue'
</script>

<template>
  <!-- Req 4: "Mi stack" — tecnologías agrupadas por categoría como chips, sin porcentajes -->
  <section id="stack" class="stack section" aria-labelledby="stack-title">
    <div class="container">
      <SectionHeading id="stack-title" title="Mi stack" eyebrow="Tecnologías" />
      <div class="stack__grid">
        <article v-for="group in stack" :key="group.category" class="stack__group">
          <h3 class="stack__category">{{ group.category }}</h3>
          <ul class="stack__chips" :aria-label="`Tecnologías de ${group.category}`">
            <li v-for="item in group.items" :key="item">
              <TechChip :label="item" />
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stack__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
}

@media (min-width: 640px) {
  .stack__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .stack__grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.stack__group {
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

.stack__group:hover {
  border-color: var(--color-accent);
  background: var(--color-surface-2);
}

.stack__category {
  font-family: var(--font-mono);
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-accent-2);
}

.stack__chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
</style>
