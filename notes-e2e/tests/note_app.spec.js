const { test, describe, expect } = require('@playwright/test');

describe('Note app', () => {
  // test('front page can be opened', async ({ page }) => {
  //   await page.goto('http://localhost:5173');

  //   const locator = await page.getByText('Notes');
  //   await expect(locator).toBeVisible();
  //   await expect(
  //     page.getByText(
  //       'Note app, Department of Computer Science, University of Helsinki 2024'
  //     )
  //   ).toBeVisible();
  // });

  test('login form can be opened', async ({ page }) => {
    await page.goto('http://localhost:5173');

    await page.getByRole('button', { name: 'login' }).click();

    await page.getByTestId('username').fill('mluukai');
    await page.getByTestId('password').fill('salainen');
    await page.getByRole('button', { name: 'login' }).click();

    await expect(page.getByText('Matti Luukkainen logged in')).toBeVisible();
  });
});
