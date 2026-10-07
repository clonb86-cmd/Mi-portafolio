<script setup lang="ts">
defineProps<{
  title: string
  eyebrow?: string
}>()
</script>

<template>
  <header class="section-heading">
    <p v-if="eyebrow" class="section-heading__eyebrow">{{ eyebrow }}</p>
    <h2 class="section-heading__title">{{ title }}</h2>
  </header>
</template>

<style scoped>
.section-heading {
  margin-bottom: clamp(2rem, 4vw, 3rem);
  max-width: 48rem;
}

.section-heading__eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  font-family: var(--font-mono);
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-accent-2);
}

.section-heading__eyebrow::before {
  content: '';
  width: 1.5rem;
  height: 2px;
  border-radius: 2px;
  background: linear-gradient(90deg, var(--color-accent), var(--color-accent-2));
}

.section-heading__title {
  color: var(--color-text);
}
</style>
