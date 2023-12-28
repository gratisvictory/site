'use client';

import { useRef } from 'react';
import { Parallax } from '@react-spring/parallax';
import type { IParallax } from '@react-spring/parallax';
import type { ReactNode } from 'react';

export interface IScrollProps {
  scroll: (to: number) => void | null;
}

interface UIParallaxProps {
  horizontal?: boolean;
  pages: number;
  children: ({ scroll }: IScrollProps) => ReactNode;
}

const UIParallax = ({ children, horizontal, pages }: UIParallaxProps) => {
  const parallax = useRef<IParallax>(null);

  const scroll = (to: number) => parallax.current && parallax.current.scrollTo(to);

  return (
    <Parallax style={{ top: '0', left: '0' }} ref={parallax} pages={pages} horizontal={horizontal}>
      {children({ scroll })}
    </Parallax>
  );
};

export { UIParallax };
