'use client';

import Link from 'next/link';
import React from 'react';

import { ParallaxIndexPage } from '@/features/parallax';
import { Button, UIParallax, UIParallaxPage } from '@/shared/ui';

const Posts = () => (
  <UIParallax pages={3} horizontal>
    {({ scroll }) => (
      <>
        <UIParallaxPage offset={0} speed={0.2}>
          <ParallaxIndexPage scroll={scroll} />
        </UIParallaxPage>
        <UIParallaxPage offset={1} speed={0.6}>
          <div className='absolute h-full w-full cursor-pointer bg-orange-500 bg-opacity-5'>
            <Button onClick={() => scroll(2)}>go next 2</Button>
            <Link href='/'>
              <Button variant='ghost'>go root</Button>
            </Link>
          </div>
        </UIParallaxPage>
        <UIParallaxPage offset={2} speed={0.2}>
          <div className='absolute h-full w-full cursor-pointer bg-sky-500 bg-opacity-5'>
            <Button onClick={() => scroll(0)}>go back</Button>
          </div>
        </UIParallaxPage>
      </>
    )}
  </UIParallax>
);

export default Posts;
