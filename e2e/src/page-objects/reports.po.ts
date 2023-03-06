import { PageObjectBase } from './base.po';
import { element, browser, by, ExpectedConditions, ElementFinder } from 'protractor';
import { clickElement } from '../helpers/actions.helper';

export class ReportsPage extends PageObjectBase{
    constructor(){
        super('app-reports','/#/home/reports');
    }

    waitUntilPresent() {
        browser.wait(ExpectedConditions.presenceOf(this.rootElement()), 25000);
    }

    async clickFilterSelector(){
        const el = element(by.css(`${this.tag} .statistics .filter .filter__selector:first-child mat-select`));
        await browser.wait(ExpectedConditions.visibilityOf(el), 25000);
        await clickElement(el);
    }

    async getFilterOptions(){
        const optionsPopUp = element(by.css('.cdk-overlay-container .cdk-overlay-pane .mat-select-panel-wrap .mat-select-panel'));
        try{
          await browser.wait(ExpectedConditions.visibilityOf(optionsPopUp), 15000);
        }catch(err){}
        const options = await optionsPopUp.all(by.css('mat-option'));
        return options;
    }

    async selectChannelReport(){
        const options = await this.getFilterOptions();
        await clickElement(options[0]);
    }

    async selectCampaignsReport(){
        const options = await this.getFilterOptions();
        await clickElement(options[1]);
    }

    async selectProgramsReport(){
        const options = await this.getFilterOptions();
        await clickElement(options[2]);
    }

    async selectPatientsReport(){
        const options = await this.getFilterOptions();
        await clickElement(options[3]);
    }

    async waitAndReturnChannelReportElement(): Promise<ElementFinder>{
        const el = element(by.css(`${this.tag} app-channels-report:first-child`));
        await browser.wait(ExpectedConditions.visibilityOf(el), 10000);
        return el;
    }

    async waitAndReturnCampaignsReportElement(): Promise<ElementFinder>{
        const el = element(by.css(`${this.tag} app-campaigns-report`));
        await browser.wait(ExpectedConditions.visibilityOf(el), 10000);
        return el;
    }

    async waitAndReturnProgramsReportElement(): Promise<ElementFinder>{
        const el = element(by.css(`${this.tag} app-programs-report`));
        await browser.wait(ExpectedConditions.visibilityOf(el), 15000);
        return el;
    }

    async waitAndReturnPatientsReportElement(): Promise<ElementFinder>{
        const el = element(by.css(`${this.tag} app-patients-report .wrapper`));
        try{
          await browser.wait(ExpectedConditions.visibilityOf(el), 10000);
        }catch(err){}
        return el;
    }
}
