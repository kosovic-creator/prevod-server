import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';
import {hasLocale} from 'next-intl';

export default getRequestConfig(async ({requestLocale}) => {
  // Čekaj da dobiješ locale iz URL-a (/sr, /en)
  const locale = await requestLocale;

  // Validiraj locale ili fallback na default
  const validLocale = hasLocale(routing.locales, locale)
    ? locale
    : routing.defaultLocale;

  return {
    locale: validLocale,
    messages: (await import(`../../messages/${validLocale}.json`)).default
  };
});
