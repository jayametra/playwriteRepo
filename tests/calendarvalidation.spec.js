import{test,expect} from '@playwright/test'

test('Calendar Validation', async({page})=>{
 page.goto('https://selenium.qabible.in/date-picker.php')
 const dateInput = page.locator('#single-input-field')
 await dateInput.click()
 const targetYear = 1997
 await expect(page.locator('.datepicker-dropdown')).toBeVisible()
 const switchButton = page.locator('.datepicker-switch:visible')
 await switchButton.click()
 await switchButton.click()
let attempt = 10
while(attempt--){
const decadetext = await switchButton.innerText()   //text is fetched from 'switchbutton' and stored in 'decadetext'
const startyear = parseInt(decadetext.split('-')[0].trim())
if(targetYear>=startyear && targetYear<= startyear +9)break  //when getting exact condition, it will break the iteration
await page.locator('.prev:visible').click()
}
await page.locator('.year:visible').filter({hasText:'1997'}).click()
await page.locator('.month:visible').filter({hasText:'Sep'}).click()
await page.locator('.day:not(.old):not(.new)',{hasText:/^15$/}).click()
const showdate = page.locator('#button-one').click()
}
)