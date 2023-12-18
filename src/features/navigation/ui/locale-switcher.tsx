import { useLocale, useTranslations } from 'next-intl';
import { Languages } from 'lucide-react';

import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/shared/ui';
import { LocaleSwitcherItems } from './locale-switcher-items';

const LocaleSwitcher = () => {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' size='icon'>
          <Languages className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
          <span className='sr-only'>{t('label')}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' defaultValue={locale}>
        <LocaleSwitcherItems />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export { LocaleSwitcher };
