<script setup lang="ts">
import { process } from '@/data/portfolio'
import SectionHeading from '@/components/ui/SectionHeading.vue'
</script>

<template>
  <!-- Req 5: "Mi proceso" — 6 pasos numerados -->
  <section id="proceso" class="process section" aria-labelledby="proceso-title">
    <div class="container">
      <SectionHeading id="proceso-title" title="Mi proceso" eyebrow="Cómo trabajo" />
      <ol class="process__list">
        <li v-for="step in process" :key="step.number" class="process__step">
          <span class="process__number" aria-hidden="true">{{ step.number }}</span>
          <div class="process__body">
            <h3 class="process__title">
              <span class="visually-hidden">Paso {{ step.number }}: </span>{{ step.title }}
            </h3>
            <p class="process__description">{{ step.description }}</p>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.process__list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 640px) {
  .process__list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.25rem;
  }
}

@media (min-width: 1024px) {
  .process__list {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.process__step {
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  background: var(--color-surface);
  overflow: hidden;
  transition:
    border-color var(--transition),
    background var(--transition);
}

/* Barra de acento superior */
.process__step::before {
  content: '';
  position: absolute;
  inset: 0 0 auto 0;
  height: 2px;
  background: linear-gradient(90deg, var(--color-accent), var(--color-accent-2));
  opacity: 0;
  transition: opacity var(--transition);
}

.process__step:hover {
  border-color: var(--color-accent);
  background: var(--color-surface-2);
}

.process__step:hover::before {
  opacity: 1;
}

.process__number {
  flex-shrink: 0;
  font-family: var(--font-mono);
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 1;
  background: linear-gradient(135deg, var(--color-accent), var(--color-accent-2));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.process__body {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  min-width: 0;
}

.process__title {
  font-size: 1.125rem;
}

.process__description {
  font-size: 0.975rem;
}
</style>
