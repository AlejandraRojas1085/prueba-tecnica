import { HomePage } from '../page-objects/home.po';
import { clearBrowserData, login } from '../helpers/global.helper';
import { browser, ElementFinder, ExpectedConditions } from 'protractor';
import { config } from '../config/test-data';
import { ProfilePage } from '../page-objects/profile.po';

describe('On home page', ()=>{
    const homePage = new HomePage();

    afterAll(()=>{
        clearBrowserData();
    });

    /*it('should be able to access user menu from header', ()=>{
        login(config.users.admin);
        homePage.clickUserButtonInHeader();
        browser.wait(ExpectedConditions.presenceOf(homePage.getUserMenuContent()), 3000);
        expect(homePage.getUserMenuContent().isDisplayed()).toBe(true);
        clearBrowserData();
    });

    it('should be able to access user profile from user menu', async ()=>{
        login(config.users.admin);
        const profilePage = new ProfilePage();
        await homePage.clickUserButtonInHeader();
        await browser.wait(ExpectedConditions.presenceOf(homePage.getUserMenuContent()), 3000);
        const buttons = await homePage.getUserMenuContentButtons();
        expect(buttons.length).toBe(4);
        await (buttons[2] as ElementFinder).click();
        profilePage.waitUntilPresent();
        expect(profilePage.rootElement().isDisplayed()).toBe(true);
        clearBrowserData();
    });*/

    describe('should show only the allowed sections for', ()=>{
        afterEach(()=>{
            clearBrowserData();
        });

        it('admin', async ()=>{
            login(config.users.admin);
            browser.sleep(500);
            expect(await homePage.showsCorrectOptionsForUser(config.users.admin)).toBe(true);
        });
        it('operator', async ()=>{
            login(config.users.operator);
            expect(await homePage.showsCorrectOptionsForUser(config.users.operator)).toBe(true);
        });
        it('visualizer', async ()=>{
            login(config.users.visualizer);
            expect(await homePage.showsCorrectOptionsForUser(config.users.visualizer)).toBe(true);
        });
        it('doctor', async ()=>{
            login(config.users.doctor);
            expect(await homePage.showsCorrectOptionsForUser(config.users.doctor)).toBe(true);
        });
    });

});