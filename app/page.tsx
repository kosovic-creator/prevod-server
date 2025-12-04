import { cookies, headers } from 'next/headers';


async function getLocale() {
  // Pokušaj da uzmeš jezik iz cookie-a ili headera
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get('NEXT_LOCALE')?.value;
  const headerStore = await headers();
  const acceptLang = headerStore.get('accept-language');
  if (cookieLocale) return cookieLocale;
  if (acceptLang) {
    if (acceptLang.startsWith('sr')) return 'sr';
    if (acceptLang.startsWith('en')) return 'en';
  }
  return 'sr';
}

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <p>This is the home page.</p>
    </main>
  );
}
