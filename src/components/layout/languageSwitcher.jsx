'use client'
import { useLocale, useTranslations } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/navigation'
import { routing } from '@/i18n/routing'

const LanguageSwitcher = ({ compact = false }) => {
  const t = useTranslations('languageSwitcher')
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()

  const switchLocale = (nextLocale) => {
    router.replace(pathname, { locale: nextLocale })
  }

  return (
    <div
      className={`inline-flex items-center rounded-lg border border-primary-light/20 bg-primary/10 ${
        compact ? 'text-xs' : 'text-sm'
      }`}
      role="group"
      aria-label={t('label')}
    >
      {routing.locales.map((code) => {
        const isActive = locale === code
        return (
          <button
            key={code}
            type="button"
            onClick={() => switchLocale(code)}
            className={`px-2.5 py-1.5 font-semibold transition-colors duration-200 ${
              isActive
                ? 'bg-primary text-white'
                : 'text-secondary hover:text-theme-primary'
            } ${code === 'en' ? 'rounded-s-lg' : ''} ${code === 'ar' ? 'rounded-e-lg' : ''}`}
            aria-pressed={isActive}
          >
            {t(code)}
          </button>
        )
      })}
    </div>
  )
}

export default LanguageSwitcher
