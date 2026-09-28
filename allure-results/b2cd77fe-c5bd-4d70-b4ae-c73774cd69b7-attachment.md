# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.js >> Login with invalid credentials - Incorrect credentials
- Location: tests/login.spec.js:26:5

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for locator('#user-name')

```

# Test source

```ts
  1  | import{test,expect} from '@playwright/test'
  2  | import { LoginPage } from '../pages/loginPage'
  3  | 
  4  | test('Login with valid credentials', async({page})=>{
  5  |  const loginPage = new LoginPage(page)
  6  |  await loginPage.navigateToApplication()
  7  |  await loginPage.userLogin()
  8  |  await loginPage.validateLoginSuccessfull()
  9  | }
  10 | )
  11 | 
  12 | test('Login with invalid credentials - Incorrect username', async({page})=>{
  13 |     await page.locator('#user-name').fill("standard_user_Jaya")
  14 |     await page.locator('#password').fill("secret_sauce")
  15 |     await page.locator('#login-button').click()
  16 | 
  17 | })
  18 | 
  19 | test('Login with invalid credentials - Incorrect password', async({page})=>{
  20 |     await page.locator('#user-name').fill("standard_user")
  21 |     await page.locator('#password').fill("secret_sauce_test")
  22 |     await page.locator('#login-button').click()
  23 | 
  24 | })
  25 | 
  26 | test('Login with invalid credentials - Incorrect credentials', async({page})=>{
> 27 |     await page.locator('#user-name').fill("standard_user_Jaya")
     |                                      ^ Error: locator.fill: Target page, context or browser has been closed
  28 |     await page.locator('#password').fill("secret_sauce_test")
  29 |     await page.locator('#login-button').click()
  30 | 
  31 | })
```