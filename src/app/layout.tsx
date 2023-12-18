import type { ReactNode } from 'react';

import '@/app/styles/globals.css';

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => children;

export default RootLayout;
