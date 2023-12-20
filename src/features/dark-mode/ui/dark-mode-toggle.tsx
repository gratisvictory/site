'use client';

import { useTheme } from 'next-themes';
import * as React from 'react';
import { Moon, Sun } from 'lucide-react';

import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/shared/ui';
import { DarkModeItems } from './dark-mode-items';

const DarkModeToggle = () => {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' size='icon'>
          <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
          <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
          <span className='sr-only'>Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DarkModeItems setTheme={setTheme} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export { DarkModeToggle };
