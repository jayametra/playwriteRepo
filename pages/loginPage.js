import{expect} from '@playwright/test'

export class LoginPage{
constructor(page){
    this.page=page 
    this.username=page.locator('#user-name')
    this.password=page.locator('#password')
    this.loginButton=page.locator('#login-button')
}
async navigateToApplication(){
    await this.page.goto('https://www.saucedemo.com/')

}
async userLogin(usernamevalue,passwordvalue){
    await this.username.fill(usernamevalue)
    await this.password.fill(passwordvalue)
    await this.loginButton.click()
}
async validateLoginSuccessfull(){
    await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html')
}

}


