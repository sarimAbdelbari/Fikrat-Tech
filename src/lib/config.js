// ===== FIKRAT DZ — GLOBAL SITE CONFIG =====
// Single source of truth for contact info and WhatsApp links.

export const SITE_CONFIG = {
  name: 'Fikrat DZ',
  tagline: 'Built for Algeria. Built to Last.',
  url: 'https://fikratdz.tech',
  email: 'contact@fikratdz.tech',
  instagram: '@fikratdz',
  instagramUrl: 'https://www.instagram.com/fikratdz',
  whatsapp: {
    number: '213696458600', // Replace with real number (no + or spaces)
    baseUrl: 'https://wa.me/',
  },
}

export function buildWaLink(message) {
  return `${SITE_CONFIG.whatsapp.baseUrl}${SITE_CONFIG.whatsapp.number}?text=${encodeURIComponent(message)}`
}

/** @deprecated Prefer buildWaLink with translated messages from i18n */
export const WA = {
  generic: buildWaLink("Hello Fikrat DZ, I'd like to discuss a project."),
  boutique: buildWaLink("Hello, I'm interested in the Boutique Store package."),
  commerce: buildWaLink("Hello, I'm interested in the Commerce System package."),
  platform: buildWaLink("Hello, I'm interested in the Full Platform package."),
  services: buildWaLink("Hello, I have a question about your services."),
  caseStudy: buildWaLink("Hello, I'd like something similar to what you built for Paradise Game DZ."),
  contact: buildWaLink("Hello Fikrat DZ, I'd like to discuss my project."),
}
