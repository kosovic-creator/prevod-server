import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import Nav from '../components/Nav';

export default async function LocaleLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const messages = await getMessages();
  return (
    <NextIntlClientProvider messages={messages}>
        <Nav />
      {children}
    </NextIntlClientProvider>
  );
}
