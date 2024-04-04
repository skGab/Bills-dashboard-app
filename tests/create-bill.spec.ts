import { expect, test } from '@playwright/test';

test('The form should be able to create a bill', async ({ page }) => {
	// GET THE CREATE BILL PAGE
	await page.goto('http://localhost:5173/');

	// EXPECT FORM TO BE VISIBLE
	await expect(page.getByText('Create Bill Name Value')).toBeVisible();

	// FULL-FILL FORM INPUTS
	await page.getByLabel('Name').fill('CEMIG');
	await page.getByLabel('Value').fill('3.000');
	await page.locator('input[type="date"]').fill('1999-06-05')

	// CREATE BILLL
	await page.getByRole('button', { name: 'Create' }).click();
});
