import { test, expect } from '@playwright/test'

test('homepage test', async ({ page }) => {
  await page.goto('http://localhost:3000')

  const div = page.locator('.ml-2')

  await expect(div).toBeVisible()
})
