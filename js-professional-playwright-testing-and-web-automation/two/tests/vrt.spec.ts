import { test, expect } from '@playwright/test';

test('init should match visually', async ({ page}) => {
  await expect(page).toHaveScreenshot('initial.png')
})