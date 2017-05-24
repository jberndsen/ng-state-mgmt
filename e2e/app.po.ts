import { browser, element, by } from 'protractor';

export class RootPage {
  navigateTo() {
    return browser.get('/#/root');
  }

  getParagraphText() {
    return element(by.css('vir-root p')).getText();
  }
}
