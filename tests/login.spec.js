import{test,expect} from '@playwright/test'
import { LoginPage } from '../pages/loginPage'
import loginData from '../utils/testData.json' with {type:'json'} // logindata is the element which represents the test data json file
import { getData } from '../utils/excelread.js' 

test.only('Login with valid credentials', async({page})=>{
 const loginPage = new LoginPage(page)
 const usernamevalue=getData(1,1)
 const passwordvalue=getData(1,2)
 await loginPage.navigateToApplication()
 await loginPage.userLogin(usernamevalue,passwordvalue)
 await loginPage.validateLoginSuccessfull()
}
)

test('Login with invalid credentials - Incorrect username', async({page})=>{
 const loginPage = new LoginPage(page)
 const usernamevalue=loginData.invalidUseername
 const passwordvalue=loginData.validPassword
 await loginPage.navigateToApplication()
 await loginPage.userLogin(usernamevalue,passwordvalue)

})

test('Login with invalid credentials - Incorrect password', async({page})=>{
 const loginPage = new LoginPage(page)
 const usernamevalue=loginData.validUsername
 const passwordvalue=loginData.invalidPassword
 await loginPage.navigateToApplication()
 await loginPage.userLogin(usernamevalue,passwordvalue)

})

test('Login with invalid credentials - Incorrect credentials', async({page})=>{
 const loginPage = new LoginPage(page)
 const usernamevalue=loginData.invalidUseername
 const passwordvalue=loginData.invalidPassword
 await loginPage.navigateToApplication()
 await loginPage.userLogin(usernamevalue,passwordvalue)
})