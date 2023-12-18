import { useTransition } from 'react';

import { usePathname, useRouter } from '@/entities/next-intl';

const useDropdownMenu = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const setLocale = ({ locale }: { locale: string }) => {
    startTransition(() => {
      router.replace(pathname, { locale });
    });
  };

  return {
    isPending,
    setLocale,
  };
};

export { useDropdownMenu };
