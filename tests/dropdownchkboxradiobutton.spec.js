import{test} from '@playwright/test'

test('Dropdown in Playwright',async({page})=>{
await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
const dropdown= page.locator('#dropdowm-menu-1')
//await dropdown.selectOption({index:2}) // selecting a dropdown option using the index value 
//await dropdown.selectOption({value:'sql'}) // selecting a dropdown option using the value attribute value
await dropdown.selectOption({label:'C#'}) // selecting a dropdown option using the text value
})

test('Handling checkbox in playwright',async({page})=>{
await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
const chechbox = page.locator("//input[@value='option-2']")
//await chechbox.click(). // instead of click() use check()
await chechbox.check()
await chechbox.uncheck()
// ischecked() is a method which helps in ensuring whether the checkbox is checked or not
console.log(await chechbox.isChecked())
})

// radio button assignment

test.only('Radio button', async({page})=>{
    page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    const radioButton = page.locator("//input[@value='yellow']")
    await radioButton.click()
})