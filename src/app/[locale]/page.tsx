import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { TLocales } from '@/entities/next-intl';
import type { ReactNode } from 'react';

import { locales } from '@/entities/next-intl';
import { DarkModeToggle } from '@/features/dark-mode';

type IndexPageProps = {
  params: { locale: TLocales };
};

const CodeComponent = (chunks: ReactNode): ReactNode => (
  <code className='font-mono text-white'>{chunks}</code>
);

const IndexPage = ({ params: { locale } }: IndexPageProps) => {
  const isValidLocale = locales.some((cur: string) => cur === locale);
  if (!isValidLocale) notFound();

  unstable_setRequestLocale(locale as string);

  const t = useTranslations('IndexPage');

  return (
    <main className='transition-colors dark:text-red-300' title={t('title')}>
      <h1>Preview</h1>
      <p>
        {t.rich('description', {
          code: CodeComponent,
        })}
      </p>
      <DarkModeToggle />
    </main>
  );
};
export default IndexPage;
