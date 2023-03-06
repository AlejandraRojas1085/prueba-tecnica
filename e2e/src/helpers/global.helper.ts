import { browser, element, by, ExpectedConditions } from "protractor";
import { getLogger } from 'log4js';
import { LoginPage } from '../page-objects/login.po';
import { HomePage } from '../page-objects/home.po';

export const clearBrowserData = () => {
    browser.driver.manage().deleteAllCookies();
    browser.executeScript('window.localStorage.clear();');
    browser.executeScript('window.sessionStorage.clear();');
};

export const expectToastErrorAndReturnDialog = () => {
    const toast = element(by.css('.toast-error'));
    browser.wait(ExpectedConditions.visibilityOf(toast), 5000);
    return toast.element(by.css('div[role="alertdialog"]'));
}

export const expectToastSuccessAndReturnDialog = () => {
    const toast = element(by.css('.toast-success'));
    browser.wait(ExpectedConditions.visibilityOf(toast), 5000);
    return toast.element(by.css('div[role="alertdialog"]'));
};

export const login = ( user: {username: string, password: string} ) =>{
    const loginPage = new LoginPage();
    const homePage = new HomePage();
    loginPage.load();
    loginPage.waitUntilPresent();
    handleLoading();
    browser.sleep(500);
    loginPage.setUserInput(user.username);
    loginPage.setPasswordIntput(user.password);
    loginPage.clickLoginButton();
    browser.waitForAngularEnabled(false);
    homePage.waitUntilPresent();
}

export const handleLoading = async (parentCssSelector?: string) => {
    const selector = parentCssSelector ? parentCssSelector + ' ngx-loading:first-child' : 'ngx-loading:first-child';
    const el = element(by.css(selector));
    try{ await browser.wait(ExpectedConditions.visibilityOf(el), 2000); }catch(err){}
    await browser.wait(ExpectedConditions.invisibilityOf(el), 15000);
};