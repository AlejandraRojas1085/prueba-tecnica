import { ReportsPage } from '../page-objects/reports.po';
import { browser, ExpectedConditions, element, by, ElementFinder } from 'protractor';
import { clearBrowserData, handleLoading, login } from '../helpers/global.helper';
import { config } from '../config/test-data';

describe('On reports page', ()=>{

    const reportsPage = new ReportsPage();

    beforeAll(()=>{
        login(config.users.admin);
    });

    beforeEach(()=>{
        reportsPage.load();
        reportsPage.waitUntilPresent();
        handleLoading();
    });

    afterAll(()=>{
        clearBrowserData();
    });

    it('should be able to see report filter options', async ()=>{
        await reportsPage.clickFilterSelector();
        const options = await reportsPage.getFilterOptions();
        expect(options.length).toBeGreaterThan(0);
    });

    it('should be able to access campaings report', async ()=>{
        await reportsPage.clickFilterSelector();
        try{
          await reportsPage.selectCampaignsReport();
        }catch(err){
          await reportsPage.selectCampaignsReport();
        }
        const report: ElementFinder = await reportsPage.waitAndReturnCampaignsReportElement();
        expect(report.isDisplayed()).toBe(true);
    });

    it('should be able to access programs report', async ()=>{
        await reportsPage.clickFilterSelector();
        try{
          await reportsPage.selectProgramsReport();
        }catch(err){
          await reportsPage.selectProgramsReport();
        }
        const report: ElementFinder = await reportsPage.waitAndReturnProgramsReportElement();
        expect(report.isDisplayed()).toBe(true);
    });

    it('should be able to access patients report', async ()=>{
        await reportsPage.clickFilterSelector();
        try{
          await reportsPage.selectPatientsReport();
        }catch(err){
          await reportsPage.selectPatientsReport();
        }
        const report: ElementFinder = await reportsPage.waitAndReturnPatientsReportElement();
        expect(report.isDisplayed()).toBe(true);
    });
});
