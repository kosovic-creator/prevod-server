"use client";
import { useTranslations } from 'next-intl';

import { Link, usePathname } from '../i18n/navigation';

export default function Nav() {
  const t = useTranslations('Nav');
  const pathname = usePathname();
  // Robust locale detection from pathname
  const localeMatch = pathname.match(/^\/(en|sr)(\/|$)/);
  const currentLocale = localeMatch ? localeMatch[1] : 'en';

  // Helper: remove locale segment from pathname


function getBasePath(pathname: string): string {
    const parts: string[] = pathname.split('/');
    // Ako je prvi segment locale, ukloni ga
    if (parts[1] === 'en' || parts[1] === 'sr') {
        return '/' + parts.slice(2).join('/');
    }
    return pathname;
}

  const basePath = getBasePath(pathname) || '/';

  return (
    <nav style={{ marginBottom: '2rem' }}>
      <Link locale={currentLocale} href="/" style={{ marginRight: '1rem' }}>{t('home')}</Link>
      <Link locale={currentLocale} href="/prevod" style={{ marginRight: '1rem' }}>{'prevod'}</Link>
      <Link locale={currentLocale} href="/prevod2" style={{ marginRight: '1rem' }}>{'prevod2'}</Link>
      {/* <Link locale={currentLocale} href="/test" style={{ marginRight: '1rem' }}>{'test (dynamic)'}</Link> */}
      <Link locale="sr" href={basePath} style={{ marginRight: '1rem' }}>{t('sr')}</Link>
      <Link locale="en" href={basePath}>{t('en')}</Link>
    </nav>
  );
}
