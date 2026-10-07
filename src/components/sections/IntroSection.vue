<script setup lang="ts">
import { intro } from '@/data/portfolio'
import SectionHeading from '@/components/ui/SectionHeading.vue'
</script>

<template>
  <!-- Req 2: bloque corto tras el Hero. No forma parte de la navbar, por eso no lleva id de ancla. -->
  <section class="intro section" :aria-label="intro.title">
    <div class="container">
      <div class="intro__card">
        <SectionHeading :title="intro.title" />
        <p class="intro__text">{{ intro.text }}</p>
        <a :href="intro.link.href" class="intro__link">{{ intro.link.label }}</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.intro__card {
  position: relative;
  max-width: 52rem;
  padding: clamp(1.75rem, 4vw, 2.75rem);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  background: var(--color-surface);
  overflow: hidden;
}

/* Línea de acento en el borde izquierdo */
.intro__card::before {
  content: '';
  position: absolute;
  inset: 0 auto 0 0;
  width: 3px;
  background: linear-gradient(180deg, var(--color-accent), var(--color-accent-2));
}

/* SectionHeading trae un margen pensado para secciones con contenido extenso */
.intro__card :deep(.section-heading) {
  margin-bottom: 1rem;
}

.intro__text {
  max-width: 44rem;
  margin-bottom: 1.5rem;
  font-size: 1.125rem;
}

.intro__link {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  font-weight: 600;
}

.intro__link:hover,
.intro__link:focus-visible {
  color: var(--color-accent-2);
}
</style>
