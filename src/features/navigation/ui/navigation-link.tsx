'use client';

import { useSelectedLayoutSegment } from 'next/navigation';
import type { AppPathnames } from '@/entities/next-intl';
import type { ReactNode } from 'react';

import { UINavigation } from '@/shared/ui';

interface NavigationLinkProps {
  href: AppPathnames;
  children: ReactNode;
}

const NavigationLink = ({ children, href }: NavigationLinkProps) => {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
  const isActive = pathname === href;
  return (
    <UINavigation href={href} isActive={isActive}>
      {children}
    </UINavigation>
  );
};
export { NavigationLink };
