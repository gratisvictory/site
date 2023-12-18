import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import type { TLocales } from '@/entities/next-intl';
import type { ReactNode } from 'react';

type PathnamesPageProps = {
  params: { locale: TLocales };
};

const paragraphComponent = (chunks: ReactNode): ReactNode => <p className='mt-4'>{chunks}</p>;
const codeComponent = (chunks: ReactNode): ReactNode => (
  <code className='font-mono font-bold text-blue-700'>{chunks}</code>
);

const PathnamesPage = ({ params: { locale } }: PathnamesPageProps) => {
  unstable_setRequestLocale(locale as string);

  const t = useTranslations('PathnamesPage');

  return (
    <main title={t('title')} className='mt-10 bg-sky-300 p-4'>
      <div>
        {t.rich('description', {
          p: paragraphComponent,
          code: codeComponent,
        })}
        <div
          className='mt-10 bg-red-400 p-4'
          dangerouslySetInnerHTML={{ __html: t.raw('content') }}
        />
      </div>
    </main>
  );
};
export default PathnamesPage;
