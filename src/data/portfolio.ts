// Fuente única de contenido del portafolio.
// Edita los textos aquí sin tocar los componentes.

export interface Service {
  icon: string
  title: string
  description: string
}

export interface StackGroup {
  category: string
  items: string[]
}

export interface ProcessStep {
  number: string // "01"
  title: string
  description: string
}

export interface TimelineEntry {
  year: string
  title: string
  description: string
}

export interface LearningTopic {
  title: string
}

export interface ContactLink {
  label: string
  href: string
  icon?: string
}

export interface ActionLink {
  label: string
  href: string
}

// Perfil — foto y nombre completo (la imagen vive en /public/Perfil.jpg)
export const profile = {
  name: 'Jefferson Gervacio Quiñonez Aguirre',
  role: 'Desarrollador Full Stack · Inteligencia Artificial · Automatización',
  image: '/Perfil.jpg',
  imageAlt: 'Retrato de Jefferson Gervacio Quiñonez Aguirre',
}

// Req 1 — Hero
export const hero = {
  title: 'Construyo soluciones digitales para problemas reales.',
  subtitle:
    'Desarrollo aplicaciones web, sistemas inteligentes y herramientas digitales utilizando tecnologías modernas.',
  roles: 'Desarrollador Full Stack · Inteligencia Artificial · Automatización',
  actions: [
    { label: 'Ver proyectos', href: '#servicios' },
    { label: 'Conocerme', href: '#sobre-mi' },
    { label: 'Contactarme', href: '#contacto' },
  ] as ActionLink[],
}

// Req 2 — Introducción
export const intro = {
  title: '¿Quién soy?',
  text: 'Soy desarrollador de software enfocado en crear soluciones web y sistemas inteligentes. Me interesa especialmente convertir necesidades y problemas concretos en herramientas digitales funcionales, escalables y fáciles de utilizar.',
  link: { label: 'Más sobre mí →', href: '#sobre-mi' } as ActionLink,
}

// Req 3 — Servicios
export const services: Service[] = [
  {
    icon: '🌐',
    title: 'Desarrollo Web',
    description: 'Aplicaciones web modernas, responsive y adaptadas a las necesidades del proyecto.',
  },
  {
    icon: '⚙️',
    title: 'Sistemas Full Stack',
    description:
      'Sistemas de gestión, plataformas administrativas, APIs, bases de datos y aplicaciones empresariales.',
  },
  {
    icon: '🤖',
    title: 'Inteligencia Artificial',
    description: 'Integración de IA, RAG, agentes inteligentes y automatización de procesos.',
  },
  {
    icon: '🔄',
    title: 'Automatización',
    description: 'Digitalización y automatización de tareas y procesos repetitivos.',
  },
]

// Req 4 — Stack
export const stack: StackGroup[] = [
  {
    category: 'Desarrollo',
    items: ['Vue', 'Nuxt', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Tailwind'],
  },
  { category: 'Backend', items: ['Node.js', 'Python', 'FastAPI'] },
  { category: 'Datos', items: ['PostgreSQL', 'Supabase'] },
  { category: 'IA', items: ['RAG', 'LLM', 'LangGraph', 'AI Agents'] },
  { category: 'Herramientas', items: ['Git', 'GitHub', 'VS Code', 'Vercel'] },
]

// Req 5 — Proceso
export const process: ProcessStep[] = [
  { number: '01', title: 'Descubrir', description: 'Entiendo el problema y las necesidades.' },
  { number: '02', title: 'Planificar', description: 'Defino funcionalidades, arquitectura y flujo.' },
  { number: '03', title: 'Diseñar', description: 'Creo la experiencia e interfaz.' },
  { number: '04', title: 'Desarrollar', description: 'Construyo y pruebo la solución.' },
  { number: '05', title: 'Desplegar', description: 'Llevo el proyecto a producción.' },
  { number: '06', title: 'Mejorar', description: 'Itero según resultados y necesidades.' },
]

// Req 6 — Sobre mí
export const about = {
  title: 'Sobre mí',
  paragraphs: [
    'Mi interés por el desarrollo de software nació de querer crear herramientas que solucionen problemas concretos.',
    'Actualmente estoy desarrollando proyectos relacionados con aplicaciones web, sistemas de gestión e inteligencia artificial.',
    'Mi enfoque está en aprender construyendo: investigar una tecnología, aplicarla en un proyecto real y evaluar cómo puede utilizarse para resolver un problema.',
  ],
  exploringTitle: 'Actualmente explorando',
  exploring: ['IA', 'RAG', 'Agentes', 'Cloud', 'Automatización', 'Data'],
}

// Req 7 — Trayectoria
export const timeline: TimelineEntry[] = [
  {
    year: '2025',
    title: 'Desarrollo Full Stack',
    description: 'Desarrollo de aplicaciones y sistemas web.',
  },
  {
    year: '2026',
    title: 'Inteligencia Artificial',
    description: 'Investigación y experimentación con RAG, LLMs y agentes.',
  },
  {
    year: '2026',
    title: 'Proyectos digitales',
    description: 'Desarrollo de soluciones para iniciativas y organizaciones locales.',
  },
]

// Req 8 — Lo que estoy aprendiendo
export const learning: LearningTopic[] = [
  { title: 'Cómo diseñar un sistema RAG' },
  { title: 'Construyendo una PWA con Nuxt y Supabase' },
  { title: 'Diseño de bases de datos para sistemas de gestión' },
  { title: 'Cómo convertir un problema real en una solución digital' },
]

// Req 9 — Contacto (enlaces configurables: edítalos aquí si cambian)
export const contact: ContactLink[] = [
  { label: 'Correo', href: 'mailto:quinonezaguirrejeffersongervac@gmail.com', icon: '✉️' },
  { label: 'GitHub', href: 'https://github.com/JeffersonQuin', icon: '💻' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jefferson-qui%C3%B1onez-aguirre/',
    icon: '💼',
  },
]
