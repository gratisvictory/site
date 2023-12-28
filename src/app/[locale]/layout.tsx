import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import clsx from 'clsx';
import type { TLocales } from '@/entities/next-intl';
import type { ReactNode } from 'react';

import ThemeProvider from '@/app/provider/theme-provider';
import { locales } from '@/entities/next-intl';

const inter = Inter({ subsets: ['latin'] });

type LocaleLayoutProps = {
  children: ReactNode;
  params: {
    locale: TLocales;
  };
};

export async function generateMetadata({
  params: { locale },
}: Omit<LocaleLayoutProps, 'children'>) {
  const t = await getTranslations({ locale: locale as 'ru' | 'en', namespace: 'LocaleLayout' });
  return {
    title: t('title'),
  };
}

const LocaleLayout = ({ children, params: { locale } }: LocaleLayoutProps) => {
  if (!locales.includes(locale as 'ru' | 'en')) notFound();
  unstable_setRequestLocale(locale as string);

  return (
    <html lang={locale as 'ru' | 'en'}>
      <body className={clsx(inter.className, 'flex h-full flex-col  items-center')}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default LocaleLayout;
