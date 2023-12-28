import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import type { TLocales } from '@/entities/next-intl';
import type { ReactNode } from 'react';

type PostsLayoutProps = {
  children: ReactNode;
  params: {
    locale: TLocales;
  };
};

export async function generateMetadata({ params: { locale } }: Omit<PostsLayoutProps, 'children'>) {
  const t = await getTranslations({ locale: locale as 'ru' | 'en', namespace: 'PostsLayout' });
  return {
    title: t('title'),
  };
}

const PostsLayout = ({ children, params: { locale } }: PostsLayoutProps) => {
  unstable_setRequestLocale(locale as string);

  return (
    <main>
      <nav>
        <h1>Posts</h1>
      </nav>
      {children}
    </main>
  );
};

export default PostsLayout;
