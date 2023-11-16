import { Locator, Page } from "@playwright/test";


export class PIM {
    readonly page: Page
    private dynamicHeader: Locator
    private empName: Locator
    private empId: Locator
    private supervisorName: Locator
    private employmentStatus: Locator
    private jobTitle: Locator
    private subUnit: Locator
    private include: Locator
    private searchButton: Locator
    private resetButton: Locator
    private bothButtons : Locator
    private addButton: Locator

    constructor(page: Page) {
        this.page = page
        this.empName = page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[1]/div/div[2]/div/div/input')
        this.empId = page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[2]/div/div[2]/input')
        this.supervisorName = page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[5]/div/div[2]/div/div/input')
        this.employmentStatus = page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[3]/div/div[2]/div/div')
        this.jobTitle = page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[6]/div/div[2]/div/div')
        this.subUnit = page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[7]/div/div[2]/div/div')
        this.include = page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[4]/div/div[2]/div/div')
        this.searchButton = page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[2]/button[2]')
        this.resetButton = page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[2]/button[1]')
        this.addButton = page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div[1]/button')
        this.initPage()

        
        

        
    }

    initPage = async () => {
        await this.page.waitForLoadState()
    }

    selectHeaderOption =async (params:string) => {
        this.dynamicHeader = this.page.locator(`//header//nav//ul//li//a[text()='${params}']`)
        await this.dynamicHeader.click()
    }

    fillId =async (id: string) => {
        await this.empId.fill(id)
    }


    fillName =async (name: string) => {
        await this.empName.fill(name)
    }

    fillsupervisorName =async (supName: string) => {
        await this.supervisorName.fill(supName)
    }

    selectEmploymentStatus = async (optionName: string) => {
        await this.employmentStatus.click();
        await this.page.click(`text=${optionName}`)
    };
    
    selectJobTitle =async (job_title:string) => {
        await this.jobTitle.click()
        await this.page.click(`text=${job_title}`);
    }
        
    selectSubUnit =async (sub_unit:string) => {
        await this.subUnit.click()
        await this.page.click(`text=${sub_unit}`)
    }

    selectInclude =async (what_To_Include:string) => {
        await this.include.click()
        await this.page.click(`text=${what_To_Include}`)
    }

    pressSearchOrResetButton =async (Search_Or_reset: string) => {
        const bothButtons = this.page.locator(`button[type = '${Search_Or_reset}']`)
        await bothButtons.click()
    }



}
