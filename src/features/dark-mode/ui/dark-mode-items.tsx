import { DropdownMenuItem } from '@/shared/ui';

interface DarkModeItemsProps {
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
}

const DarkModeItems = ({ setTheme }: DarkModeItemsProps) => (
  <>
    <DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
    <DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
    <DropdownMenuItem onClick={() => setTheme('system')}>System</DropdownMenuItem>
  </>
);

export { DarkModeItems };
