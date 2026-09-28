import {test, expect} from '@playwright/test';

test('Open Google and Verify Title', async({page})=>{
    
   await page.goto('https://www.google.com');
   await expect(page).toHaveTitle(/Google/);
   
})
