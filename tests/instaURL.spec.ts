import { test, expect } from '@playwright/test';
import { userTestData } from '../testData/testDataUtility';

test("Enter User Details and Click On Submit", async ({ page }) => {
    await page.goto(userTestData.base_Url);
    await expect(page).toHaveTitle(userTestData.sitexpectedTitle);
    await page.getByRole('link', { name: 'Basic Form Elements' }).scrollIntoViewIfNeeded();
    await page.getByRole('link', { name: 'Basic Form Elements' }).click();
    await expect(page.getByText('Section 1: Basic Form Elements')).toBeVisible();
    await expect(page.getByText('Section 1: Basic Form Elements')).toHaveText('Section 1: Basic Form Elements');
    // Enter User Details
    await page.getByPlaceholder('Enter your name').fill('Ammulu');
    await page.getByPlaceholder('Enter password').fill('Password@123');
    await page.getByPlaceholder('Enter email').fill('ammulu@yopmail.com');
    await page.getByPlaceholder('Enter phone').fill('1234567890');
    await page.getByPlaceholder('Tell us about yourself').fill('I am a software tester');
    await page.getByRole('button', { name: 'Submit form' }).screenshot({path: "test-results/screenshots/SubmitButton.png"});
   await page.getByRole('button', { name: 'Submit form' }).click();

});