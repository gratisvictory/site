'use client';

import { ParallaxLayer } from '@react-spring/parallax';
import type { FC, ReactNode } from 'react';

interface UIParallaxPageProps {
  speed: number;
  offset: number;
  children: ReactNode;
}

const UIParallaxPage: FC<UIParallaxPageProps> = ({
  offset,
  speed,
  children,
}: UIParallaxPageProps) => {
  return (
    <ParallaxLayer offset={offset} speed={speed}>
      {children}
    </ParallaxLayer>
  );
};

export { UIParallaxPage };
