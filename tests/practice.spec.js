import{test} from '@playwright/test'

// open browser url and locate an element

test('Open browser URL', async({page})=>{
await page.goto("https://selenium.qabible.in/")

}
)

