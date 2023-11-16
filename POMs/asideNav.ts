import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";


export class Aside {
    readonly page: Page
    // private PIM: Locator
    private empFirstName: Locator
    private empMiddleName: Locator
    private empLastName: Locator
    private empNickName: Locator
    private empId: Locator
    private empOtherId: Locator
    private driverLicense: Locator
    private drivingExpDate: Locator
    private nationality: Locator
    private maritalStatus: Locator
    private dateOfBirth: Locator;
    private gender: Locator
    private militaryService: Locator
    private firstSaveBtn: Locator
    private secondSaveBtn: Locator
    private bloodType: Locator
    private deleteButton: Locator


    private test: Locator

    constructor(page: Page) {
        this.page = page
        this.empFirstName = page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[1]/div[1]/div/div/div[2]/div[1]/div[2]/input')
        this.empMiddleName = page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[1]/div[1]/div/div/div[2]/div[2]/div[2]/input')
        this.empLastName = page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[1]/div[1]/div/div/div[2]/div[3]/div[2]/input')
        this.empNickName = page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[1]/div[2]/div/div/div[2]/input')
        this.empId = page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[2]/div[1]/div[1]/div/div[2]/input')
        this.empOtherId = page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[2]/div[1]/div[2]/div/div[2]/input')
        this.driverLicense = page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[2]/div[2]/div[1]/div/div[2]/input')
        this.drivingExpDate = page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[2]/div[2]/div[2]/div/div[2]/div/div/input')
        this.nationality = page.locator('')
        this.maritalStatus = page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[3]/div[1]/div[2]/div/div[2]/div/div')
        this.dateOfBirth = page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[3]/div[2]/div[1]/div/div[2]/div/div/input')
        this.militaryService = page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[4]/div/div[1]/div/div[2]/input')
        this.firstSaveBtn = page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[5]/button')
        this.secondSaveBtn = page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[2]/div/form/div[2]/button')
        this.bloodType = page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[2]/div/form/div[1]/div/div/div/div[2]/div/div')
        this.initPage()
    }

    initPage = async () => {
        await this.page.waitForLoadState()
    }







    optionSelector = async (typeOfName:string, to: string) => {
        this.test = this.page.locator(`//div//input[@placeholder="${typeOfName}"]`)
        await this.test.fill(to)
    }
    fillFullName =async (first:string, middle:string, last:string, nickName:string) => {
        await this.optionSelector('First Name', `${first}`)
        await this.optionSelector('Middle Name', `${middle}`)
        await this.optionSelector('Last Name', `${last}`)
        await this.empNickName.fill(nickName)
    }



    // clickPIM =async () => {
    //     await this.PIM.click()
    // }

    selectFromAsideMenu =async (asideOptionName:string) => {
        const selectedOption = this.page.locator(`//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li/a/span[text() = '${asideOptionName}']`)
        await selectedOption.click()
    }

    //=======================================================NAME FORMS==========================================================================
    fillEmpFirstName = async (nameToFill:string) => {
        await this.empFirstName.fill(nameToFill)
    }

    fillEmpMiddleName = async (nameToFill:string) => {
        await this.empMiddleName.fill(nameToFill)
    }

    fillEmpLastName = async (nameToFill:string) => {
        await this.empLastName.fill(nameToFill)
    }

    fillEmpNickName = async (nameToFill:string) => {
        await this.empNickName.fill(nameToFill)
    }


    fillNamesFormFlow = async (firstName:string, middle: string, lastName:string, nickName:string) => {
        await this.empFirstName.fill(firstName)
        await this.empMiddleName.fill(middle)
        await this.empLastName.fill(lastName)
        await this.empNickName.fill(nickName)
        
    }

    //=================================================================================================================================

    fillId = async (id: string) => {
       await this.empId.fill(id) 
    }

    fillOtherId =async (OtherId:string) => {
        await this.empOtherId.fill(OtherId)
    }
    fillDriverLicense =async (licenseNumber:string) => {
        await this.driverLicense.fill(licenseNumber)        
    }
    fillExpDate =async (yyyy_mm_dd:string) => {
        await this.drivingExpDate.fill(yyyy_mm_dd)
    }

    fillIdFormFlow =async (id:string, otherId: string, dlNumber: string, expDate: string) => {
        await this.empId.fill(id) 
        await this.empOtherId.fill(otherId)
        await this.driverLicense.fill(dlNumber)
        await this.drivingExpDate.fill(expDate)
    }
    selectGender = async (gender: string) => {
        this.gender = this.page.locator(`//div//label[text() = '${gender}']`);
        await this.gender.click()
    }

    scrollTo =async () => {
        const genderLocator = this.page.locator(`//div[label = 'Male']//input`);
        const genderElement = await genderLocator.first();
        await genderElement.scrollIntoViewIfNeeded(); 
    }

    fillBDay =async (yyyy_mm_dd:string) => {
        await this.dateOfBirth.fill(yyyy_mm_dd)
    }

    fillmilitaryService =async (answer:string) => {
        await this.militaryService.fill(answer)
    }

    clickSaveButton =async () => {
        await this.firstSaveBtn.click()
    }


    deleteRecordById =async (id:string) => {
        const deleteLocator = this.page.locator(`//div[text()='${id}']/following::div//button[1]`);
        const deleteBtn = await deleteLocator.first();
        await deleteBtn.scrollIntoViewIfNeeded(); 
        await deleteBtn.click()
        const deleteConfirmation = this.page.locator('//*[@id="app"]/div[3]/div/div/div/div[3]/button[2]')
        await deleteConfirmation.click()
        
    }








    
    // selecGender =async (gender:string) => {

    //     this.gender = this.page.locator(`//div[label = '${gender}']//input`)
    //     await this.gender.check()
    // }
}