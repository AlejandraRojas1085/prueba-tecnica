import { element, by, ElementFinder, ElementArrayFinder, browser, ExpectedConditions } from 'protractor';
import { PageObjectBase } from './base.po';
import { clickElement } from '../helpers/actions.helper';

export class MonitoringPage extends PageObjectBase{
    constructor(){
        super('app-monitoring', '/#/home/monitoring');
    }

    waitUntilPresent(){
        browser.wait(ExpectedConditions.presenceOf(this.rootElement()), 6000);
    }

    getGeoserverViewerElement(){
        return element(by.css(`${this.tag} app-geoserver-viewer`));
    }

    getMapViewerElement(){
        return this.getGeoserverViewerElement().element(by.css('#map'));
    }

    getLayersNav(){
        return element(by.css(`${this.tag} .navbar_wrapper .navbar`))
    }

    async getLayerButtons(){
        return await element.all(by.css(`${this.tag} .navbar_wrapper .navbar .subNav .subNavBtn`));
    }

    async getActivatedLayersCount(): Promise<number>{
        const layerButtons = await this.getLayerButtons();
        let count = 0;
        for (const layer of layerButtons) {
            const buttonStyle = await (layer as ElementFinder).getAttribute('style');
            if(buttonStyle && buttonStyle !== ''){
                count++;
            }
        }
        return count;
    }

    async clickPatientsLayerButton(){
        const layerButtons = await this.getLayerButtons();
        await browser.actions().mouseMove(layerButtons[0] as ElementArrayFinder).click().perform();
        await browser.sleep(1000);
    }

    async clickAmbulancesLayerButton(){
        const layerButtons = await this.getLayerButtons();
        await browser.actions().mouseMove(layerButtons[1] as ElementArrayFinder).click().perform();
        await browser.sleep(1000);
    }

    async clickIncidencesLayerButton(){
        const layerButtons = await this.getLayerButtons();
        await browser.actions().mouseMove(layerButtons[2] as ElementArrayFinder).click().perform();
        await browser.sleep(1000);
    }

    async clickGeoFenceLayerButton(){
        const layerButtons = await this.getLayerButtons();
        await browser.actions().mouseMove(layerButtons[3] as ElementArrayFinder).click().perform();
        await browser.sleep(1000);
    }

    async clickPatientMarker(){
        const patientMarkers = await this.getPatientsMarkers();
        if(patientMarkers.length > 0){
            try{
                await clickElement(patientMarkers[0]);
            }catch(err){
                throw new Error('Could not click patientMarker');
            }
        }else{
            throw new Error('No patient markers found');
        }
    }

    async getPatientsMarkers(){
        const markers = await this.getGeoserverViewerElement().all(by.css('.leaflet-marker-pane .leaflet-marker-icon'));
        const patientMarkers: ElementFinder[] = [];
        for (const marker of <ElementFinder[]> markers) {
            const src = await marker.getAttribute('src');
            if (src && src.includes('pacientes')){
                patientMarkers.push(marker);
            }
        }
        return patientMarkers;
    }

    async waitAndReturnPatientCardElement(): Promise<ElementFinder>{
        const el = element(by.css(`${this.tag} app-patient-send-program`));
        await browser.wait(ExpectedConditions.presenceOf(el), 5000);
        return el;
    }

    async getIncidenceMarkers(){
        const markers = await this.getGeoserverViewerElement().all(by.css('.leaflet-marker-pane .leaflet-marker-icon'));
        const incidenceMarkers: ElementFinder[] = [];
        for (const marker of <ElementFinder[]> markers) {
            const src = await marker.getAttribute('src');
            if (src && src.includes('incidents')){
                incidenceMarkers.push(marker);
            }
        }
        return incidenceMarkers;
    }

    async clickIncidenceMarker(){
        const incidenceMarkers = await this.getIncidenceMarkers();
        if(incidenceMarkers.length > 0){
            try{
                await clickElement(incidenceMarkers[0]);
            }catch(err){
                throw new Error('Could not click incidenceMarkers');
            }
        }else{
            throw new Error('No incidence markers found');
        }
    }

    async waitAndReturnIncidenceCardElement(): Promise<ElementFinder>{
        const el = element(by.css(`${this.tag} app-incidence`));
        await browser.wait(ExpectedConditions.presenceOf(el), 5000);
        return el;
    }

    async clickIncidencesHeaderButton(){
        const el = element(by.css(`${this.tag} .monitoring__header .monitoring__dashboard .monitoring__dashboard__alert`));
        await clickElement(el);
    }

    async clickStatisticsHeaderButton(){
        const el = element(by.css(`${this.tag} .monitoring__header .monitoring__dashboard .monitoring__dashboard__button`));
        await clickElement(el);
    }

    async waitAndReturnIncidencesListCardElement(){
        const el = element(by.css(`${this.tag} app-incidents`));
        await browser.wait(ExpectedConditions.presenceOf(el), 5000);
        return el;
    }

    async waitAndReturnStatisticsLevel1Element(){
        const el = element(by.css(`${this.tag} app-statistics-level-one`));
        await browser.wait(ExpectedConditions.presenceOf(el), 6000);
        return el;
    }

    async goToStatisticsLevel2(){
        await browser.wait(ExpectedConditions.invisibilityOf(element(by.css(`${this.tag} app-statistics-level-one ngx-loading`))), 7000);
        const button = element(by.css(`${this.tag} app-statistics-level-one > button`));
        await clickElement(button);
    }

    async waitAndReturnStatisticsLevel2Element(){
        const el = element(by.css(`${this.tag} app-statistics-level-two`));
        await browser.wait(ExpectedConditions.visibilityOf(el), 5000);
        return el;
    }
}
