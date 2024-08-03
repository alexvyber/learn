import { test, expect } from '@playwright/test';

test.beforeEach(async ({page}) => {
  await page.goto('http://localhost:5173')
})


test("Right Heading", async ({page} ) => {
  const heading = page.locator('h1', { hasText: "Vite + React"})
await expect(heading).toBeVisible()
})

test.describe('Counter', () => {
  test('should be visible', async ({page}) => {
    const counterButton = page.locator("#counter")
    await expect(counterButton).toBeVisible()
  })


  test('should increment', async ({page}) => {
    const counterButton = page.locator("#counter")
    await expect(counterButton).toHaveText('count is 0')
    await counterButton.click()
    await expect(counterButton).toHaveText('count is 1')
    await counterButton.click()
    await expect(counterButton).toHaveText('count is 2')
  })

})
// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
