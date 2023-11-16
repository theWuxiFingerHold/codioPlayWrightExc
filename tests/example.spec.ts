import { test, expect } from '@playwright/test';
import { LoginPage } from "../POMs/loginPage.ts";
import { PIM } from "../POMs/PIM.ts";
import { Aside } from "../POMs/asideNav.ts";
import { AddNewEmp } from "../POMs/addNewEmployee.ts";


let login;
let aside;
let add;
let pim;
let successLocator

  test.beforeEach(async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    login = new LoginPage(page);
    aside = new Aside(page);
    add = new AddNewEmp(page);
    pim = new PIM(page)
    successLocator = page.locator('//*[@id="oxd-toaster_1"]')
  });


  test('login Success', async ({ page }) => {
    await login.fullLoginFunction('Admin', 'admin123')
    const dashboard = page.locator('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[1]/span/h6')
    await expect(dashboard).toBeVisible()
  });


  test('add new employee',async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await login.fullLoginFunction('Admin', 'admin123')
    await aside.selectFromAsideMenu('PIM')
    await add.clickaddBtn()
    await add.createNewEmp('fgug', 'amwer123fer', 'mordwqwfreeris', '992r11')
    const successLocator = page.locator('//*[@id="oxd-toaster_1"]')
    await expect(successLocator).toBeVisible()
  })


test('update info',async ({page}) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await login.fullLoginFunction('Admin', 'admin123')
  await aside.selectFromAsideMenu('My Info')
  await aside.fillFullName('lebowski', 'mikolaj', 'bjergson', 'his dudeness')
  await aside.fillIdFormFlow('1991', '2992', '3993', '2023-12-28')
  await aside.scrollTo()
  await aside.selectGender('Female')
  await aside.fillBDay('1995-08-15')
  await aside.fillmilitaryService('no')
  await aside.clickSaveButton()
  const successLocator = page.locator('//*[@id="oxd-toaster_1"]')
  await expect(successLocator).toBeVisible()
})

test('delete record', async ({ page }) => {
  await login.fullLoginFunction('Admin', 'admin123')
  await aside.selectFromAsideMenu('PIM')
  await aside.deleteRecordById('2927')
  const successLocator = page.locator('//*[@id="oxd-toaster_1"]')
  await expect(successLocator).toBeVisible()
  
});

test('search test', async ({ page }) => {
  await login.fullLoginFunction('Admin', 'admin123')
  await aside.selectFromAsideMenu('PIM')
  await pim.fillName('mike')
  await pim.fillId('99099')
  // await pim.selectJobTitle('Account Assistant')
  // await pim.selectEmploymentStatus('Full-Time Contract')
  // await pim.selectSubUnit('Quality Assurance')
  // await pim.selectInclude('Current and Past Employees')
  await pim.pressSearchOrResetButton('submit')
  const recordsFound = page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div[2]/div//span');
  const innerHTML = await recordsFound.innerHTML();
  console.log(innerHTML);
  expect(innerHTML).not.toEqual("No Records Found");

  
  
});





// //div[text()='0271']/following::div/following::div/following::div/following::div/following::div/following::div/following::div//button[1]



