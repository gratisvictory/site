import { useTranslations } from 'next-intl';

import { LocaleSwitcher } from './locale-switcher';
import { NavigationLink } from './navigation-link';

const Navigation = () => {
  const t = useTranslations('Navigation');
  return (
    <div className='mt-10'>
      <nav className='text-red container flex justify-between p-2'>
        <div>
          <NavigationLink href='/'>{t('home')}</NavigationLink>
          <NavigationLink href='/pathnames'>{t('pathnames')}</NavigationLink>
          <NavigationLink href='/posts'>{t('posts')}</NavigationLink>
        </div>
        <LocaleSwitcher />
      </nav>
    </div>
  );
};
export { Navigation };
