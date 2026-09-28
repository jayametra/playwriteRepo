import{test,expect} from '@playwright/test'

test('Alerts in Playwright', async({page})=>{
page.goto('https://selenium.qabible.in/javascript-alert.php')
page.on('dialog',async dialog=>{ //this line is to listen to the pop up 
 expect(dialog.message().toBe('I am a Javascript alert box!'))
 await dialog.accept()
 const clickmebutton = page.locator('.btn btn-success').click()
})
})