import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class AddNewEmp extends BasePage{

    private addButton: Locator
    private empId: Locator
    private saveButton: Locator

    constructor(page: Page) {
        super(page)
        this.addButton = page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div[1]/button')
        this.empId = page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[1]/div[2]/div/div/div[2]/input')
        this.saveButton = page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/button[2]')
    }

    createNewEmp =async (first:string, middle:string, last:string, id:string) => {
        await this.optionSelector('First Name', `${first}`)
        await this.optionSelector('Middle Name', `${middle}`)
        await this.optionSelector('Last Name', `${last}`)
        await this.empId.fill(id)
        await this.saveButton.click()

    }
    clickaddBtn =async () => {
        await this.addButton.click()
    }
}