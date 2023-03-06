import { PageObjectBase } from './base.po';
import { element, by, browser } from 'protractor';

export class LoginPage extends PageObjectBase{
    constructor(){
        super('app-login','/#/login');
    }
    getPasswordInput(){
        return element(by.css('.formDentro .input-class input[formcontrolname="password"]'));
    }

    getUserInput(){
        return element(by.css('.formDentro .input-class input[formcontrolname="user"]'));
    }

    async clickRecoveryPassword(){
        const el = element(by.css('.formDentro mat-label[class="auxiliary-btn"]'));
        await browser.actions().mouseMove(el).click().perform();
    }

    setUserInput(userText: string){
        this.enterInputTextBySelectingInputAtt('.formDentro .input-class input[formcontrolname="user"]', userText);
    }

    setPasswordIntput(password: string){
        this.enterInputTextBySelectingInputAtt('.formDentro .input-class input[formcontrolname="password"]', password);
    }

    clickLoginButton(){
        const el = element(by.css(`${this.tag} .formDentro .submit-btn`));
        el.click();
    }

    recoveryFormRootElement(){
        return element(by.css('.formDentro .recoveryContainer'));
    }
}
