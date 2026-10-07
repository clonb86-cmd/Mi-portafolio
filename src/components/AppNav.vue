<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

interface NavLink {
  id: string
  label: string
}

// Enlaces a las secciones principales (Req 10.1). Los ids coinciden con los de cada <section>.
const links: NavLink[] = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'servicios', label: 'Lo que hago' },
  { id: 'stack', label: 'Stack' },
  { id: 'proceso', label: 'Proceso' },
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'trayectoria', label: 'Trayectoria' },
  { id: 'contacto', label: 'Contacto' },
]

// Estado del menú compacto en móvil (Req 10.3)
const isOpen = ref(false)

function toggleMenu() {
  isOpen.value = !isOpen.value
}

function closeMenu() {
  isOpen.value = false
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') closeMenu()
}

// Cierra el menú si se pasa a escritorio con el menú abierto.
// 960px: por debajo, la marca + 7 enlaces no caben en línea sin desbordar.
const desktopQuery = typeof window !== 'undefined' ? window.matchMedia('(min-width: 960px)') : null
function onBreakpointChange(event: MediaQueryListEvent) {
  if (event.matches) closeMenu()
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
  desktopQuery?.addEventListener('change', onBreakpointChange)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
  desktopQuery?.removeEventListener('change', onBreakpointChange)
})
</script>

<template>
  <header class="nav">
    <nav class="nav__inner container" aria-label="Navegación principal">
      <a href="#inicio" class="nav__brand" @click="closeMenu">
        <span class="nav__brand-mark" aria-hidden="true">&lt;/&gt;</span>
        Portafolio
      </a>

      <button
        type="button"
        class="nav__toggle"
        :aria-expanded="isOpen"
        aria-controls="nav-menu"
        :aria-label="isOpen ? 'Cerrar menú' : 'Abrir menú'"
        @click="toggleMenu"
      >
        <span class="nav__toggle-bar" :class="{ 'is-open': isOpen }" aria-hidden="true"></span>
      </button>

      <ul id="nav-menu" class="nav__menu" :class="{ 'is-open': isOpen }">
        <li v-for="link in links" :key="link.id">
          <a :href="`#${link.id}`" class="nav__link" @click="closeMenu">{{ link.label }}</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.nav {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 100;
  height: var(--nav-height);
  background: rgba(11, 15, 23, 0.8);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--color-border);
}

.nav__inner {
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.nav__brand {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
  color: var(--color-text);
}

.nav__brand:hover {
  color: var(--color-text);
}

.nav__brand-mark {
  font-family: var(--font-mono);
  color: var(--color-accent-2);
}

/* Botón hamburguesa (solo móvil) */
.nav__toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: var(--radius-sm);
  transition: background var(--transition);
}

.nav__toggle:hover {
  background: var(--color-surface-2);
}

.nav__toggle-bar,
.nav__toggle-bar::before,
.nav__toggle-bar::after {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--color-text);
  border-radius: 2px;
  transition: transform var(--transition), background var(--transition);
}

.nav__toggle-bar {
  position: relative;
}

.nav__toggle-bar::before,
.nav__toggle-bar::after {
  content: '';
  position: absolute;
  left: 0;
}

.nav__toggle-bar::before {
  transform: translateY(-7px);
}

.nav__toggle-bar::after {
  transform: translateY(7px);
}

.nav__toggle-bar.is-open {
  background: transparent;
}

.nav__toggle-bar.is-open::before {
  transform: rotate(45deg);
}

.nav__toggle-bar.is-open::after {
  transform: rotate(-45deg);
}

/* Menú desplegable en móvil */
.nav__menu {
  position: absolute;
  top: var(--nav-height);
  left: 0;
  right: 0;
  display: none;
  flex-direction: column;
  padding: 0.75rem var(--gutter) 1rem;
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
}

.nav__menu.is-open {
  display: flex;
}

.nav__link {
  display: block;
  padding: 0.75rem 0.5rem;
  border-radius: var(--radius-sm);
  color: var(--color-text-muted);
  font-weight: 500;
  transition: color var(--transition), background var(--transition);
}

.nav__link:hover,
.nav__link:focus-visible {
  color: var(--color-text);
  background: var(--color-surface-2);
}

/* Escritorio: enlaces en línea, sin botón */
@media (min-width: 960px) {
  .nav__toggle {
    display: none;
  }

  .nav__menu {
    position: static;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.25rem;
    padding: 0;
    background: none;
    border: none;
  }

  .nav__link {
    padding: 0.5rem 0.75rem;
    font-size: 0.925rem;
    white-space: nowrap;
  }
}
</style>
