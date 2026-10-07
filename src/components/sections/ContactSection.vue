<script setup lang="ts">
import { contact } from '@/data/portfolio'
import SectionHeading from '@/components/ui/SectionHeading.vue'

// Los enlaces mailto: se abren en el cliente de correo; los externos en nueva pestaña.
const isExternal = (href: string) => /^https?:\/\//.test(href)
</script>

<template>
  <!-- Req 9: Contacto — enlaces directos (mailto, GitHub, LinkedIn), sin formulario -->
  <section id="contacto" class="contact section" aria-labelledby="contacto-title">
    <div class="container">
      <SectionHeading id="contacto-title" title="Hablemos" eyebrow="Contacto" />
      <p class="contact__lead">
        ¿Tienes una idea, un problema por resolver o un proyecto en mente? Escríbeme y conversemos.
      </p>
      <ul class="contact__list">
        <li v-for="link in contact" :key="link.label">
          <a
            class="contact__link"
            :href="link.href"
            v-bind="isExternal(link.href) ? { target: '_blank', rel: 'noopener noreferrer' } : {}"
          >
            <span v-if="link.icon" class="contact__icon" aria-hidden="true">{{ link.icon }}</span>
            <span class="contact__label">{{ link.label }}</span>
            <span v-if="isExternal(link.href)" class="visually-hidden">(se abre en una nueva pestaña)</span>
            <span class="contact__arrow" aria-hidden="true">→</span>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.contact__lead {
  max-width: 40rem;
  margin-bottom: 2rem;
  font-size: 1.0625rem;
}

.contact__list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 14rem), 1fr));
  gap: 1rem;
}

.contact__link {
  display: flex;
  align-items: center;
  gap: 0.875rem;
  min-height: 3.5rem;
  padding: 1rem 1.25rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  background: var(--color-surface);
  color: var(--color-text);
  font-weight: 600;
  transition:
    border-color var(--transition),
    background var(--transition),
    transform var(--transition),
    color var(--transition);
}

.contact__link:hover,
.contact__link:focus-visible {
  border-color: var(--color-accent);
  background: var(--color-surface-2);
  color: var(--color-text);
  transform: translateY(-2px);
}

.contact__link:focus-visible {
  border-radius: var(--radius);
}

.contact__icon {
  font-size: 1.25rem;
  line-height: 1;
}

.contact__label {
  flex: 1;
}

.contact__arrow {
  color: var(--color-accent-2);
  transition: transform var(--transition);
}

.contact__link:hover .contact__arrow,
.contact__link:focus-visible .contact__arrow {
  transform: translateX(3px);
}

@media (prefers-reduced-motion: reduce) {
  .contact__link:hover,
  .contact__link:focus-visible,
  .contact__link:hover .contact__arrow,
  .contact__link:focus-visible .contact__arrow {
    transform: none;
  }
}
</style>
