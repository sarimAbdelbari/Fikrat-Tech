import { getRequestConfig } from 'next-intl/server'
import { hasLocale } from 'next-intl'
import { routing } from './routing'

const messageFiles = {
  en: 'languageEn',
  fr: 'languageFr',
  ar: 'languageAr',
}

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale

  const file = messageFiles[locale]
  const messages = (await import(`../messages/${file}.json`)).default

  return {
    locale,
    messages,
  }
})
