import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import type { TLocales } from '@/entities/next-intl';
import type { ReactNode } from 'react';

import { Navigation } from '@/features/navigation';

type LocaleLayoutProps = {
  children: ReactNode;
  params: {
    locale: TLocales;
  };
};

export async function generateMetadata({
  params: { locale },
}: Omit<LocaleLayoutProps, 'children'>) {
  const t = await getTranslations({
    locale: locale as 'ru' | 'en',
    namespace: 'GratisVictoryLayout',
  });
  return {
    title: t('title'),
  };
}

const GratisVictoryLocaleLayout = ({ children, params: { locale } }: LocaleLayoutProps) => {
  unstable_setRequestLocale(locale as string);

  return (
    <main>
      <Navigation />
      {children}
    </main>
  );
};

export default GratisVictoryLocaleLayout;
