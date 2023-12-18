import { test } from '@playwright/test';

test('navigation', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Russian Pathnames' }).click();
  await page.getByRole('link', { name: 'Главная страница' }).click();
  await page.getByRole('button', { name: 'Change language' }).click();
  await page.getByRole('menuitem', { name: 'RU' }).click();
  await page.getByRole('button', { name: 'Change language' }).click();
  await page.getByRole('menuitem', { name: 'EN' }).click();
  await page.getByRole('link', { name: 'Pathnames' }).click();
  await page.getByRole('link', { name: 'Home' }).click();
});
