# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: addToCart.spec.js >> Add to cart - using oops concept
- Location: tests/addToCart.spec.js:3:5

# Error details

```
ReferenceError: LoginPage is not defined
```

# Test source

```ts
  1  | import { test } from '@playwright/test'
  2  | 
  3  | test("Add to cart - using oops concept", async({page})=>{
> 4  |  const loginPage = new LoginPage(page)
     |                    ^ ReferenceError: LoginPage is not defined
  5  |  const usernamevalue=loginData.validUsername
  6  |  const passwordvalue=loginData.validPassword
  7  |  await loginPage.navigateToApplication()
  8  |  await loginPage.userLogin(usernamevalue,passwordvalue)
  9  |  await loginPage.validateLoginSuccessfull()
  10 |  
  11 | 
  12 | })
```