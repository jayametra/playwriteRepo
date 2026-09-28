import{test} from '@playwright/test'

test('Events in playwright - mouse hover',async({page})=>{
await page.goto('https://selenium.qabible.in/index.php')
await page.locator('#others').hover()

})
