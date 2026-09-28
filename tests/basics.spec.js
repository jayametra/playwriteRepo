import{test} from '@playwright/test'




test('Browser launch in Playwright', async({browser})=>{
 const context=await browser.newContext() // creating a tab
 const page=await context.newPage() // creating a page
 await page.goto("https://selenium.qabible.in/") // passing the url

})

// second test 

test.only('Browser launch in Playwright2',async({page})=>{
    await page.goto("https://selenium.qabible.in/")

}
)