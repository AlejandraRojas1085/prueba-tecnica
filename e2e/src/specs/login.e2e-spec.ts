import { browser, ExpectedConditions } from 'protractor';
import { AppPage } from '../page-objects/app.po';
import { LoginPage } from '../page-objects/login.po';
import { config } from '../config/test-data';
import { clearBrowserData, login } from '../helpers/global.helper';
import { HomePage } from '../page-objects/home.po';

describe('At start-up', ()=>{
    const loginPage = new LoginPage();
    const appPage = new AppPage();
    beforeEach(()=>{
        appPage.load();
        appPage.waitUntilPresent();
    });

    it('should load login page', ()=>{
        loginPage.waitUntilPresent();
        expect(loginPage.rootElement().isDisplayed()).toBe(true);
    });

});

describe('On login page', ()=>{
    const loginPage = new LoginPage();

    beforeEach(()=>{
        loginPage.load();
        loginPage.waitUntilPresent();
    });

    afterAll(()=>{
        clearBrowserData();
    });

    it('form fields should be blank', ()=>{
        expect(loginPage.getPasswordInput().getText()).toBe('');
        expect(loginPage.getUserInput().getText()).toBe('');
    });

    it('should be able to access password recovery page', ()=>{
        loginPage.clickRecoveryPassword();
        browser.wait(ExpectedConditions.visibilityOf(loginPage.recoveryFormRootElement()));
        expect(loginPage.recoveryFormRootElement().isDisplayed()).toBe(true);
    });


    it('should be able to login and redirect to home page', ()=>{
        const homePage = new HomePage();

        loginPage.setUserInput(config.users.admin.username);
        loginPage.setPasswordIntput(config.users.admin.password);
        loginPage.clickLoginButton();
        browser.waitForAngularEnabled(false);
        homePage.waitUntilPresent();
        expect(homePage.rootElement().isDisplayed()).toBe(true);
    });

});

describe('On login page with diferent users', ()=>{
    const loginPage = new LoginPage();
    const homePage = new HomePage();

    beforeEach(()=>{
        loginPage.load();
        loginPage.waitUntilPresent();
    });

    afterEach(()=>{
        clearBrowserData();
    });

    it('should be able to login as operator',()=>{
        login(config.users.operator);
        homePage.waitUntilPresent();
        expect(homePage.rootElement().isDisplayed()).toBe(true);
    });

    it('should be able to login as visualizer', ()=>{
        login(config.users.visualizer);
        homePage.waitUntilPresent();
        expect(homePage.rootElement().isDisplayed()).toBe(true);
    });

    it('should be able to login as doctor', ()=>{
        login(config.users.doctor);
        homePage.waitUntilPresent();
        expect(homePage.rootElement().isDisplayed()).toBe(true);
    });

    it('should be able to login as admin', ()=>{
        login(config.users.admin);
        homePage.waitUntilPresent();
        expect(homePage.rootElement().isDisplayed()).toBe(true);
    });
});