import { Locator, Page } from "@playwright/test";

export class LoginPage {

    readonly page: Page
    private usernameField: Locator
    private passwordField: Locator
    private loginButton: Locator

    constructor(page: Page) {
        this.page = page;
        
        this.usernameField = page.locator('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input')
        this.passwordField = page.locator('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input')
        this.loginButton = page.locator('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button')
    }
    initPage = async () => {
        await this.page.waitForLoadState()
    }

    fillUserName =async (username:string) => {
       await this.usernameField.fill(username)
    }

    fillPassword =async (password:string) => {
        await this.passwordField.fill(password)
    }

    clickLoginButton =async () => {
        await this.loginButton.click()
    }

    fullLoginFunction =async (name:string, pass:string) => {
        await this.usernameField.fill(name)
        await this.passwordField.fill(pass)
        await this.loginButton.click()
    }


}