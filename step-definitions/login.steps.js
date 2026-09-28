import { Given,When,Then } from "@cucumber/cucumber";
import { chromium } from "@playwright/test";
import assert from 'assert';

let browser
let page
Given('User is on login page',async function() {
    browser=await chromium.launch({headless:false})
    const context=await browser.newContext()
    page=await context.newPage()
    await page.goto('https://www.saucedemo.com/',{timeout:60000})

})
When('User enters Valid username and password',async function(){
    const usernameField = page.locator('#user-name')
    const passwordField = page.locator('#password')
    const loginButton = page.locator('#login-button')
    await usernameField.fill('standard_user')
    await passwordField.fill('secret_sauce')
    await loginButton.click()
})
Then('User should see inventory page',async function(){
    await page.waitForSelector('.inventory_list')
    const title = await page.title()
    assert.ok(title.includes('Swag Labs'))
    await browser.close()
})