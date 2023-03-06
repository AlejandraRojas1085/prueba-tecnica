import {browser, ElementFinder } from 'protractor';

export async function clickElement(element: ElementFinder){
    try{
        await element.click();
    }catch(err){
        await browser.actions().mouseMove(element).click().perform();
    }
}
