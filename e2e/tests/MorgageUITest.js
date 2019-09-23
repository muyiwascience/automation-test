

import assert from 'assert';


describe('home page', () => {
    it('should have the right title', () => {
        browser.url('');
        browser.pause(5000);
        const title = browser.getTitle();
        assert.strictEqual(
            title,
            'Nationwide Building Society | building society, nationwide'
        );
    });

    it('should see New mortgage and Existing Morgage customers', async () => {
        browser.setCookie({ name: 'author', value: 'olly' });
        browser.deleteCookie('olly');
        browser.click('#pageWrapper > div.cookiePolicy > a');
        browser.moveToObject('#MortgagesNavItem > a').pause(1000);
        browser.waitForExist('a=Mortgage rates', 2000);
        expect(browser.isVisible('#MortgagesNavItem > a')).toBe(true);
    });

    it('should navigate to new Mortgage customers ', async () => {
        browser.click('a=Mortgage rates');
        browser.waitForExist(
            '#selectorItemHaveNationwideMortgage1 > span',
            4000
        );
        browser.click('#selectorItemHaveNationwideMortgage1 > span');
        expect(browser
            .isVisible('#selectorItemNationwideMortgageTypeNo2 > span'))
            .toBe(true);
    });

    it('New Mortgage customers should apply for a Nationwide Mortgage', async () => {
        browser.click('#selectorItemNationwideMortgageTypeNo2 > span');
        browser.waitForExist('#SearchPropertyValue', 4000);
        browser.setValue('#SearchPropertyValue', 300000);
        browser.waitForExist('#SearchMortgageAmount', 4000);
        browser.setValue('#SearchMortgageAmount', 150000);
        browser.waitForExist('#SearchMortgageTerm', 4000);
        browser.setValue('#SearchMortgageTerm', 30);
        browser.waitForExist('#myButton', 4000);
        browser.click('#myButton');
        browser.pause(5000);
        expect(browser.isVisible('#newMortgageRatesTypeFilter')).toBe(true);
    });

    it('should Filter the results by fixed rate and product type ', async () => {
        browser.click('#fixed');
        browser.pause(4000);
        browser.click('#product-fee-fee');
        browser.pause(4000);
        expect(browser.isVisible('#newMortgageRatesTypeFilter')).toBe(true);
        const yearFixed = browser
            .getText('tr:nth-child(1) > th.notOnMobile.productHeading');
        assert.strictEqual(yearFixed[0], '2 yr Fixed');
        assert.strictEqual(yearFixed[1], '3 yr Fixed');
        assert.strictEqual(yearFixed[2], '5 yr Fixed');
        assert.strictEqual(yearFixed[3], '10 yr Fixed');
    });

    it('should see Start your remortgage application', async () => {
        browser.pause(3000);
        browser.click('tr:nth-child(1) > th.showHideCell.doNotPrint > a');
        browser.click('div > div.applyButton.doNotPrint > a');
        const message = browser
            .getText('section.contentSection.smallMargin > h1');
        assert.strictEqual(message, 'Start your Remortgage application');
    });
});

