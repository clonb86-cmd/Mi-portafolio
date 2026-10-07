<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <span class="tech-chip">{{ label }}</span>
</template>

<style scoped>
.tech-chip {
  display: inline-flex;
  align-items: center;
  padding: 0.375rem 0.75rem;
  border: 1px solid var(--color-border);
  border-radius: 999px;
  background: var(--color-surface-2);
  color: var(--color-text);
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.4;
  white-space: nowrap;
  transition:
    border-color var(--transition),
    color var(--transition),
    background-color var(--transition);
}

.tech-chip:hover {
  border-color: var(--color-accent);
  color: var(--color-accent-2);
  background: var(--color-surface);
}
</style>
