import clsx from 'clsx';
import type { AppPathnames } from '@/entities/next-intl';
import type { ReactNode } from 'react';

import { Link } from '@/entities/next-intl';

interface UINavigationProps {
  href: AppPathnames;
  isActive: boolean;
  children: ReactNode;
}

const UINavigation = ({ href, isActive, children, ...props }: UINavigationProps): JSX.Element => (
  <Link
    className={clsx(
      'inline-block bg-black px-2 py-3 transition-colors',
      isActive ? 'text-white' : 'text-gray-400 hover:text-gray-200',
    )}
    href={href}
    {...props}>
    {children}
  </Link>
);

export { UINavigation };
