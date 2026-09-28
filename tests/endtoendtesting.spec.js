import{test} from '@playwright/test'

test('End to End Testing - eCommerce',async({page})=>{
await page.goto('https://www.saucedemo.com/')
const username = page.locator('#user-name')
const password = page.locator('#password')
const loginButton = page.locator('#login-button')
const firstName = page.locator('#first-name')
const lastName = page.locator('#last-name')
const zipCode = page.locator('#postal-code')
const continueButton = page.locator('#continue')
const checkoutButton = page.locator('#checkout')
const finishButton = page.locator('#finish')
const confirmationMessage = page.locator("//h2[@data-test='complete-header']")

await username.fill("standard_user")
await password.fill("secret_sauce")
await loginButton.click()

page.locator('#add-to-cart-sauce-labs-backpack')
await page.locator("//a[@data-test='shopping-cart-link']").click()
await checkoutButton.click()
await firstName.fill("JayaTest")
await lastName.fill("playwright")
await zipCode.fill("30087")
await continueButton.click()
await finishButton.click()
})

// shorter version

test.only('End to End testing2', async({page})=>{
    page.goto('https://www.saucedemo.com/')
    await page.locator('#user-name').fill("standard_user")
    await page.locator('#password').fill("secret_sauce")
    await page.locator('#login-button').click()
    await page.locator('#add-to-cart-sauce-labs-backpack').click()
    await page.locator("//a[@data-test='shopping-cart-link']").click()
    await page.locator('#checkout').click()
    await page.locator('#first-name').fill("test")
    await page.locator('#last-name').fill("test2")
    await page.locator('#postal-code').fill("324234")
    await page.locator('#continue').click()
    await page.locator('#finish').click()


})