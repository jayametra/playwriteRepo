import{expect, test} from '@playwright/test'

test('Dynamic visual testing', async({page})=>{
page.locator('https://selenium.qabible.in/index.php')
await page.waitForLoadState('networkidle')
await page.locator('.carousel').evaluate((element)=>{
    element.style.display='none' // code for hiding the sliders and banners in the application
})
await expect(page).toHaveScreenshot('obsqura.png',{threshold:0.2})
})