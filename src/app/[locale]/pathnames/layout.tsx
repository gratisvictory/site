import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: '',
  description: '',
};

interface PathLayoutProps {
  children: ReactNode;
}

const PathLayout = ({ children }: PathLayoutProps) => (
  <main>
    <h1>Path</h1>
    {children}
  </main>
);

export default PathLayout;
