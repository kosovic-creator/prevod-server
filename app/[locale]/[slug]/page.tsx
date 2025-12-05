import { getTranslations } from 'next-intl/server';

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export default async function SlugPage({ params }: Props) {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: 'Dynamic' });

  return (
    <main>
      <h1>{t('title', { slug })}</h1>
      <p>{t('description')}</p>
      <p>Slug: {slug}</p>
    </main>
  );
}
