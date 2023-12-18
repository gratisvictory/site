'use client';

import { DropdownMenuItem } from '@/shared/ui';
import { useDropdownMenu } from '../model';

const LocaleSwitcherItems = () => {
  const { isPending, setLocale } = useDropdownMenu();

  return (
    <>
      <DropdownMenuItem disabled={isPending} onClick={() => setLocale({ locale: 'ru' })}>
        RU
      </DropdownMenuItem>
      <DropdownMenuItem disabled={isPending} onClick={() => setLocale({ locale: 'en' })}>
        EN
      </DropdownMenuItem>
    </>
  );
};

export { LocaleSwitcherItems };
