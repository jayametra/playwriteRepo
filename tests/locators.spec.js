import{test} from '@playwright/test'

test('Locators in Playwright',async({page})=>{
    await page.goto("https://selenium.qabible.in/simple-form-demo.php")
    const messagefield = page.locator('#single-input-field') //creating an web element in playwright - id locator
    const showMessageButton = page.locator('#button-one') //creating an web element in playwright - class locator
    const messageField2 = page.locator("//input [@id='single-input-field']") // xpath locator
    //await messagefield.type("Hello") // type will not remove the previous data , it adds to the existing data
    //await messagefield.type("Jaya")
    await messageField2.fill("Hello") // fill removes the existing data and add the new data
    await messageField2.fill("Jaya")
    await showMessageButton.click()

}
)

// test for special locators 

test.only('Special Locators',async({page})=>{
 await page.goto('https://groceryapp.uniqassosiates.com/admin/login')
 const username = page.locator("//input[@name='username']")
 const password = page.locator("//input[@name='password']")
 const signinbutton = page.locator("//button[@type='submit']")
 await username.fill('admin')
 await password.fill('admin')
 await signinbutton.click()
 await page.goto("https://groceryapp.uniqassosiates.com/admin/list-admin") 
 //await page.getByRole('button',{name:'Active'}).nth(2).click()
 await page.getByText('Active').nth(5).click() // for first and last element use first and last method first() and last()

})