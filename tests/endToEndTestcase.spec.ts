import {test, expect} from '@playwright/test';

test("Log Submit and Logout", async ({ page }) => {
    await page.waitForLoadState('networkidle');
    await page.goto("https://www.rahulshettyacademy.com/AutomationPractice/");
    await page.getByRole('radio',{name:'radio1'}).check();
    await page.locator('#autocomplete').fill('India');
    await page.locator('#dropdown-class-example').selectOption('Option2');
    await page.getByLabel('option2').check();


});
