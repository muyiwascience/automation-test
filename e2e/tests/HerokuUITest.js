
import assert from 'assert';
import Page from '../pageObjects/Page';


describe('home page', () => {
    it('should see home Page', () => {
        Page.open('');
        Page.waitForLoading();
        const title = browser.getTitle();
        assert.strictEqual(
            title,
            'The Internet'
        );
        Page.setAndDeleteCookies();
    });

    it('should see Challenging Dom', async () => {
      browser.click('#content > ul > li:nth-child(5) > a');
       const message  = browser
        .getText('#content > div > h3');
        console.log(message)
       assert.strictEqual(message, 'Challenging DOM');
      const idDetailsBlue  = browser
     .getText('a.button.success');
      browser.click('a.button.alert');
      expect(browser.isVisible(idDetailsBlue)).toBe(false);
     const idDetailsGreen  = browser
    .getText('a.button.success');
      browser.click('a.button.alert');
      expect(browser.isVisible(idDetailsGreen)).toBe(false);
    });


    it('should see Dynamically Loaded Page Elements', async () => {
        Page.open('');
        Page.waitForLoading();
        browser.click('#content > ul > li:nth-child(14) > a');
       const loadedPagelement  = browser
       .getText('#content > div > h3');
         assert.strictEqual(loadedPagelement, 'Dynamically Loaded Page Elements');
    });

    it('should see Hello world  ', async () => {
        Page.waitForLoading();
        browser.click('#content > div > a:nth-child(8)');
        Page.waitForLoading();
        browser.click('#start > button');
        Page.waitForLoading();
       const message  = browser.getText('#finish > h4');
       assert.strictEqual(message, 'Hello World!');
    });

});
