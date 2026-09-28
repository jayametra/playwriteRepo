import { test , expect} from '@playwright/test'
import { LoginPage } from '../pages/loginPage'
import { InventoryPage} from '../pages/inventoryPage'
import loginData from '../utils/testData.json' with {type:'json'}

test("Verifying whether an item can be added to the cart", async({page})=>{
 const loginPage = new LoginPage(page)
 const inventoryPage = new InventoryPage(page)
 const usernamevalue=loginData.validUsername
 const passwordvalue=loginData.validPassword
 await loginPage.navigateToApplication()
 await loginPage.userLogin(usernamevalue,passwordvalue)
 await loginPage.validateLoginSuccessfull()
 await inventoryPage.addToCart()

})