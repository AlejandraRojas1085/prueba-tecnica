import { MonitoringPage } from '../page-objects/monitoring.po';
import { browser, ElementFinder, ExpectedConditions } from 'protractor';
import { clearBrowserData, handleLoading, login } from '../helpers/global.helper';
import { config } from '../config/test-data';

describe('On monitoring page', ()=>{

    const monitoringPage = new MonitoringPage();

    beforeAll(()=>{
        login(config.users.admin);
    });

    beforeEach(()=>{
        monitoringPage.load();
        browser.sleep(1000);
        monitoringPage.waitUntilPresent();
        handleLoading();
    });

    afterAll(()=>{
        clearBrowserData();
    });

    it('should load the map', ()=>{
        browser.wait(ExpectedConditions.visibilityOf(monitoringPage.getMapViewerElement()), 3000);
        expect(monitoringPage.getMapViewerElement().isDisplayed()).toBe(true);
    });

    it('should show the layers', ()=>{
        browser.wait(ExpectedConditions.presenceOf(monitoringPage.getLayersNav()), 3000);
        expect(monitoringPage.getLayersNav().isDisplayed()).toBe(true);
    });

    it('should be activated patients layer', async ()=>{
        await monitoringPage.clickPatientsLayerButton();
        await monitoringPage.clickPatientsLayerButton();
        expect(await monitoringPage.getActivatedLayersCount()).toBe(1);
    });

    it('should be able to activate ambulance layer', async ()=>{
        await monitoringPage.clickPatientsLayerButton();
        await monitoringPage.clickAmbulancesLayerButton();
        expect(await monitoringPage.getActivatedLayersCount()).toBe(1);
    });

    it('should be able to activate incidences layer', async ()=>{
        await monitoringPage.clickAmbulancesLayerButton();
        await monitoringPage.clickIncidencesLayerButton();
        expect(await monitoringPage.getActivatedLayersCount()).toBe(1);
    });

    it('should be able to activate geoFence layer', async ()=>{
        await monitoringPage.clickIncidencesLayerButton();
        await monitoringPage.clickGeoFenceLayerButton();
        expect(await monitoringPage.getActivatedLayersCount()).toBe(1);
    });

    it('should be able to get info about a patient by clicking it on the map', async ()=>{

        // Checks that the patients layer is active
        await monitoringPage.clickGeoFenceLayerButton();
        await monitoringPage.clickPatientsLayerButton();
        expect(await monitoringPage.getActivatedLayersCount()).toBe(1);

        await monitoringPage.clickPatientMarker();

        const patientInfoCard: ElementFinder = await monitoringPage.waitAndReturnPatientCardElement();
        expect(patientInfoCard.isDisplayed()).toBe(true);
    });

    it('should be able to get info about an incidence by clicking it on the map', async ()=>{
        await monitoringPage.clickPatientsLayerButton();
        await monitoringPage.clickIncidencesLayerButton();
        expect(await monitoringPage.getActivatedLayersCount()).toBe(1);

        await monitoringPage.clickIncidenceMarker();

        const incidenceInfoCard: ElementFinder = await monitoringPage.waitAndReturnIncidenceCardElement();
        expect(incidenceInfoCard.isDisplayed()).toBe(true);
    });

    it('should be able to access statistics', async ()=>{
        await monitoringPage.clickStatisticsHeaderButton();
        const statisticsElement: ElementFinder = await monitoringPage.waitAndReturnStatisticsLevel1Element();
        expect(statisticsElement.isDisplayed()).toBe(true);
    });

    it('should be able to access statistics level 2', async ()=>{
        await monitoringPage.clickStatisticsHeaderButton();
        await monitoringPage.clickStatisticsHeaderButton();
        let statisticsElement: ElementFinder = await monitoringPage.waitAndReturnStatisticsLevel1Element();
        expect(statisticsElement.isDisplayed()).toBe(true);
        await monitoringPage.goToStatisticsLevel2();
        statisticsElement = await monitoringPage.waitAndReturnStatisticsLevel2Element();
        expect(statisticsElement.isDisplayed()).toBe(true);
    });

    it('should be able to access incidences', async ()=>{
        await monitoringPage.clickIncidencesHeaderButton();
        const incidencesElement: ElementFinder = await monitoringPage.waitAndReturnIncidencesListCardElement();
        expect(incidencesElement.isDisplayed()).toBe(true);
    });

});
