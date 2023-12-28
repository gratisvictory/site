import type { IScrollProps } from '@/shared/ui';

import { Button } from '@/shared/ui';

const ParallaxIndexPage = ({ scroll }: IScrollProps) => {
  return (
    <main className='flex h-screen w-full flex-col items-center  justify-center bg-orange-500 bg-opacity-5'>
      <Button onClick={() => scroll(1)}>Navigation</Button>
    </main>
  );
};

export { ParallaxIndexPage };
