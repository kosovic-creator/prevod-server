// next.config.ts
import createNextIntlPlugin from 'next-intl/plugin';
import type {NextConfig} from 'next';

const withNextIntl = createNextIntlPlugin('./app/i18n/request.ts');  // ← OVO je ključno!

const nextConfig: NextConfig = {};

export default withNextIntl(nextConfig);


