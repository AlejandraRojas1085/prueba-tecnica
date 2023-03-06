import { PageObjectBase } from './base.po';
import { element, by, ElementFinder } from 'protractor';

export class HomePage extends PageObjectBase{
    constructor(){
        super('app-home','/#/home');
    }
    
    async homeSideBarOptions(){
        return await element.all(by.css(`${this.tag} app-home-side-bar .itemContainer`));
    }

    getSideBar(){
        return element(by.css('app-home-side-bar'));
    }

    async getSideMenuOptions(){
        return await element.all(by.css('app-home-side-bar .itemContainer .itemContainer_wrapper .menuTitle'));
    }

    async showsCorrectOptionsForUser(user: {[attribute: string]: any, menu: {[option: string]: boolean}}): Promise<boolean>{
        const options: ElementFinder[] = await this.getSideMenuOptions();
        for (const option of options) {
            const optionText = await option.getText();
            if(!user.menu[optionText]){
                return false;
            }
        }
        return true;
    }

    async clickUserButtonInHeader(){
        const el = element(by.css(`${this.tag} .user-manager img`));
        await el.click();
    }

    getUserMenuContent(){
        return element(by.css('#mat-menu-panel-4 .mat-menu-content'));
    }

    async getUserMenuContentButtons(){
        return await element.all(by.css('#mat-menu-panel-4 .mat-menu-content button'));
    }
}