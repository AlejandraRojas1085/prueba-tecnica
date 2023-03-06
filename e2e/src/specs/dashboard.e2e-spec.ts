import { DashboardPage } from '../page-objects/dashboard.po';
import { clearBrowserData, login } from '../helpers/global.helper';
import { ElementFinder, element, by} from 'protractor';
import { config } from '../config/test-data';

describe ('On dashboard page', ()=>{
    
    const dashboardPage = new DashboardPage();

    beforeAll(()=>{
        login(config.users.admin);
    });
    
    beforeEach(()=>{
        dashboardPage.load();
        dashboardPage.waitUntilPresent();
    });

    afterAll(()=>{
        clearBrowserData();
    });

    it('should show indicators at the top of the page', async ()=>{
        const indicators = await dashboardPage.getHeaderIndicators();
        expect(indicators.length).toBeGreaterThan(1);
    });

    it('should show dashboard cards', async ()=>{
        const cards = await dashboardPage.getDashboardCards();
        expect(cards.length).toBeGreaterThan(0);
    });
    
    it('should be able to click a card and show the information about it', async ()=>{
        const cards = await dashboardPage.getDashboardCards();
        if (cards.length > 0){
            await (cards[0] as ElementFinder).click();
            const el = element(by.css('app-dashboard-box .single-data-container'));
            expect(el.isDisplayed()).toBe(true);
        }
    });
});