import { getTranslations } from 'next-intl/server';
type Props = {
  params: Promise<{locale: string}>;  // ← Promise tip!
};

export default async function PrevodPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Prevod' });
  return (
    <main>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </main>
  );
}
