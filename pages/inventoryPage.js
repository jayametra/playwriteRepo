import { expect } from '@playwright/test'

export class InventoryPage{
constructor(page){
    this.page= page 
    this.addTocartButton= page.locator('#add-to-cart-sauce-labs-backpack')
}
async addToCart(){
await this.addTocartButton.click()
}

}