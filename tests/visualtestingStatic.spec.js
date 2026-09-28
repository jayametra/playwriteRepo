import{test,expect} from '@playwright/test'

test('Visual testing - Static webpage', async({page})=>{
page.goto('https://www.saucedemo.com/')
await page.waitForLoadState('networkidle') // this line is to wait for the page to load completely
await expect(page).toHaveScreenshot('saucedemo.png',{threshold:0.2}) //threshold to allow difference 0.2 means 20% differnce is allowed 
// npx playwright test tests/visualtestingStatic.spec.js --update-snapshots  (this is the command used to take the baseline screenshot)

})