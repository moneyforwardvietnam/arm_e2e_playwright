import { test, expect } from '@playwright/test';
const baseURL = process.env.BASEURL as string;

test('C164794_Navigation', async ({ page }) => {
  //Navigation
  await page.goto(baseURL);
  await page.getByRole('menuitem', { name: '消込' }).click();
  await page.getByRole('menuitem', { name: '請求書' }).click();
  await page.getByRole('menuitem', { name: '売上' }).click();
  await page.getByRole('menuitem', { name: '案件' }).click();
  await page.getByRole('menuitem', { name: '見積書' }).click();
  await page.getByRole('menuitem', { name: '設定' }).click();
});