import { PageObjectBase } from '../page-objects/base.po';
import { element, by, ElementFinder, ElementArrayFinder } from 'protractor';

export class DashboardPage extends PageObjectBase{
    constructor(){
        super('app-dashboard','/#/home/dashboard');
    }

    async getHeaderIndicators(){
        return await element.all(by.css(`${this.tag} .header .tooltip`));
    }

    async getDashboardCards(){
        return await element.all(by.css(`${this.tag} app-dashboard-box .card-style`));
    }
}