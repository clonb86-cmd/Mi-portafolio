<script setup lang="ts">
import { hero, profile } from '@/data/portfolio'

// El primer botón es la acción principal; el resto, secundarias.
const actions = hero.actions
</script>

<template>
  <section id="inicio" class="hero" aria-labelledby="hero-title">
    <div class="hero__inner container">
      <div class="hero__content">
        <div class="hero__profile">
          <div class="hero__photo-wrap">
            <img
              :src="profile.image"
              :alt="profile.imageAlt"
              class="hero__photo"
              width="472"
              height="472"
              decoding="async"
            />
          </div>
          <div class="hero__profile-text">
            <p class="hero__greeting">Hola, soy</p>
            <p class="hero__name">{{ profile.name }}</p>
          </div>
        </div>

        <p class="hero__roles">{{ hero.roles }}</p>
        <h1 id="hero-title" class="hero__title">{{ hero.title }}</h1>
        <p class="hero__subtitle">{{ hero.subtitle }}</p>

        <div class="hero__actions">
          <a
            v-for="(action, index) in actions"
            :key="action.href + action.label"
            :href="action.href"
            class="btn"
            :class="index === 0 ? 'btn--primary' : 'btn--ghost'"
          >
            {{ action.label }}
          </a>
        </div>
      </div>

      <!-- Composición visual decorativa: ventana de terminal/editor hecha con CSS (Req 1.6) -->
      <div class="hero__visual" aria-hidden="true">
        <div class="terminal">
          <div class="terminal__bar">
            <span class="terminal__dot terminal__dot--red"></span>
            <span class="terminal__dot terminal__dot--yellow"></span>
            <span class="terminal__dot terminal__dot--green"></span>
            <span class="terminal__file">solucion.ts</span>
          </div>
          <pre class="terminal__code"><code><span class="ln">1</span><span class="tk-kw">const</span> <span class="tk-var">problema</span> = <span class="tk-fn">entender</span>(<span class="tk-str">'necesidad real'</span>)
<span class="ln">2</span>
<span class="ln">3</span><span class="tk-kw">const</span> <span class="tk-var">solucion</span> = <span class="tk-kw">await</span> <span class="tk-fn">construir</span>({
<span class="ln">4</span>  <span class="tk-prop">stack</span>: [<span class="tk-str">'Vue'</span>, <span class="tk-str">'Node'</span>, <span class="tk-str">'Python'</span>],
<span class="ln">5</span>  <span class="tk-prop">ia</span>: [<span class="tk-str">'RAG'</span>, <span class="tk-str">'Agentes'</span>],
<span class="ln">6</span>  <span class="tk-prop">automatizar</span>: <span class="tk-bool">true</span>,
<span class="ln">7</span>})
<span class="ln">8</span>
<span class="ln">9</span><span class="tk-fn">desplegar</span>(<span class="tk-var">solucion</span>) <span class="tk-cm">// ✓ en producción</span>
<span class="ln">10</span><span class="tk-prompt">$</span> <span class="cursor"></span></code></pre>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  display: flex;
  align-items: center;
  min-height: 100vh;
  min-height: 100svh;
  padding-top: calc(var(--nav-height) + 2.5rem);
  padding-bottom: 4rem;
  overflow: hidden;
}

/* Halo de fondo sutil */
.hero::before {
  content: '';
  position: absolute;
  inset: -20% -10% auto auto;
  width: 60vw;
  height: 60vw;
  max-width: 720px;
  max-height: 720px;
  background: radial-gradient(circle, rgba(79, 140, 255, 0.16), transparent 65%);
  pointer-events: none;
}

.hero__inner {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 3rem;
  align-items: center;
}

.hero__content {
  min-width: 0;
}

.hero__profile {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.hero__photo-wrap {
  flex-shrink: 0;
  width: clamp(72px, 16vw, 96px);
  aspect-ratio: 1;
  padding: 3px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color-accent), var(--color-accent-2));
  box-shadow: 0 12px 30px -12px rgba(79, 140, 255, 0.55);
}

.hero__photo {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--color-bg);
}

.hero__profile-text {
  min-width: 0;
}

.hero__greeting {
  font-family: var(--font-mono);
  font-size: 0.8125rem;
  color: var(--color-accent-2);
}

.hero__name {
  font-size: clamp(1rem, 2.6vw, 1.25rem);
  font-weight: 700;
  line-height: 1.3;
  color: var(--color-text);
  overflow-wrap: anywhere;
}

.hero__roles {
  margin-bottom: 1rem;
  font-family: var(--font-mono);
  font-size: 0.875rem;
  color: var(--color-accent-2);
  letter-spacing: 0.01em;
}

.hero__title {
  margin-bottom: 1.25rem;
}

.hero__subtitle {
  max-width: 36rem;
  margin-bottom: 2rem;
  font-size: 1.125rem;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

/* Botones */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 0.7rem 1.35rem;
  border-radius: var(--radius-sm);
  border: 1px solid transparent;
  font-weight: 600;
  font-size: 0.95rem;
  transition:
    background var(--transition),
    border-color var(--transition),
    color var(--transition),
    transform var(--transition);
}

.btn:hover {
  transform: translateY(-1px);
}

.btn--primary {
  background: var(--color-accent);
  color: #fff;
}

.btn--primary:hover,
.btn--primary:focus-visible {
  background: #3b7af0;
  color: #fff;
}

.btn--ghost {
  border-color: var(--color-border);
  background: var(--color-surface);
  color: var(--color-text);
}

.btn--ghost:hover,
.btn--ghost:focus-visible {
  border-color: var(--color-accent);
  color: var(--color-text);
}

/* Terminal */
.hero__visual {
  min-width: 0;
}

.terminal {
  width: 100%;
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  background: var(--color-surface);
  box-shadow:
    0 24px 60px -20px rgba(0, 0, 0, 0.6),
    0 0 0 1px rgba(79, 140, 255, 0.06);
  overflow: hidden;
}

.terminal__bar {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: var(--color-surface-2);
  border-bottom: 1px solid var(--color-border);
}

.terminal__dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.terminal__dot--red {
  background: #ff5f57;
}

.terminal__dot--yellow {
  background: #febc2e;
}

.terminal__dot--green {
  background: #28c840;
}

.terminal__file {
  margin-left: 0.75rem;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--color-text-muted);
}

.terminal__code {
  margin: 0;
  padding: 1.25rem 1rem;
  overflow-x: auto;
  font-family: var(--font-mono);
  font-size: clamp(0.75rem, 1.6vw, 0.9rem);
  line-height: 1.8;
  color: var(--color-text);
}

.ln {
  display: inline-block;
  width: 2ch;
  margin-right: 1.25rem;
  text-align: right;
  color: #4a5876;
  user-select: none;
}

.tk-kw {
  color: #c792ea;
}

.tk-var {
  color: var(--color-text);
}

.tk-fn {
  color: var(--color-accent);
}

.tk-str {
  color: #a5e075;
}

.tk-prop {
  color: var(--color-accent-2);
}

.tk-bool {
  color: #f78c6c;
}

.tk-cm {
  color: #6b7a99;
  font-style: italic;
}

.tk-prompt {
  color: var(--color-accent-2);
}

.cursor {
  display: inline-block;
  width: 0.55em;
  height: 1.1em;
  vertical-align: text-bottom;
  background: var(--color-accent-2);
  animation: blink 1.1s steps(1) infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .cursor {
    animation: none;
  }

  .btn:hover {
    transform: none;
  }
}

/* Escritorio: dos columnas (texto + composición visual) */
@media (min-width: 1024px) {
  .hero__inner {
    grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
    gap: 4rem;
  }
}
</style>
