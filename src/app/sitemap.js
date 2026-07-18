export default function sitemap() {
  const baseUrl = 'https://fikratdz.tech'
  const lastModified = new Date()
  const locales = ['en', 'fr', 'ar']
  const paths = [
    { path: '', priority: 1.0 },
    { path: '/services', priority: 0.9 },
    { path: '/work', priority: 0.8 },
    { path: '/work/paradise-game-dz', priority: 0.8 },
    { path: '/packages', priority: 0.9 },
    { path: '/about', priority: 0.7 },
    { path: '/contact', priority: 0.9 },
  ]

  return locales.flatMap((locale) =>
    paths.map(({ path, priority }) => ({
      url: `${baseUrl}/${locale}${path}`,
      lastModified,
      changeFrequency: 'monthly',
      priority,
    }))
  )
}
