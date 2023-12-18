import createMiddleware from 'next-intl/middleware';

import { locales, pathnames } from './config';

export default createMiddleware({
  defaultLocale: 'ru',
  locales,
  pathnames,
});

const config = {
  matcher: ['/', '/(ru|en)/:path*', '/((?!_next|_vercel|.*\\..*).*)'],
};

export { config };
