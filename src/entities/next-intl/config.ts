import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';
import type { Pathnames } from 'next-intl/navigation';

const locales = ['ru', 'en'] as const;

type TLocales = typeof locales | string;

const pathnames = {
  '/': '/',
  '/pathnames': {
    ru: '/pathnames',
    en: '/pathnames',
  },
} satisfies Pathnames<typeof locales>;

type AppPathnames = keyof typeof pathnames;

const localePrefix = undefined;

const { Link, getPathname, redirect, usePathname, useRouter } = createLocalizedPathnamesNavigation({
  locales,
  pathnames,
  localePrefix,
});

export { getPathname, Link, locales, pathnames, redirect, usePathname, useRouter };
export type { AppPathnames, TLocales };
