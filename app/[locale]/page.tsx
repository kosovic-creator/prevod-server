import {getTranslations} from 'next-intl/server';

type Props = {
  params: Promise<{locale: string}>;  // ← Promise tip!
};

export default async function HomePage({params}: Props) {  // ← Bez destrukturinga!
  const {locale} = await params;  // ← Await ovde!

  const t = await getTranslations({locale, namespace: 'Home'});

  return (
    <main>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </main>
  );
}
