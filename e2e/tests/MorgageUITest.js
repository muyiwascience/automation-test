

import assert from 'assert';
import Page from '../pageObjects/Page';
import MortgageRateComponent from '../pageObjects/MortgageRateComponent';
import SearchNationwideComponent from '../pageObjects/SearchNationwideComponent';
import MortgageRatesResult from '../pageObjects/MortgageRatesResult';


describe('home page', () => {
    it('should have the right title', () => {
        Page.open('');
        Page.waitForLoading();
        const title = browser.getTitle();
        assert.strictEqual(
            title,
            'Nationwide Building Society | building society, nationwide'
        );
        Page.setAndDeleteCookies();
    });

    it('should see New mortgage and Existing Morgage customers', async () => {
        MortgageRateComponent.getCookiePolicy();
        Page.waitForLoading();
        MortgageRateComponent.mortgageRate().moveToObject().pause(1000);
        expect(browser.isVisible('#MortgagesNavItem > a')).toBe(true);
    });


    it('should see Search and find a Mortgage rate ', async () => {
        Page.waitForLoading();
        MortgageRateComponent.mortgageRateLink().click();
        Page.waitForLoading();
        SearchNationwideComponent.noNationwideMortage().click();
        SearchNationwideComponent.switchingMyMortage().click();
        SearchNationwideComponent.propertyvalue().setValue(300000);
        SearchNationwideComponent.mortgageAmount().setValue(150000);
        SearchNationwideComponent.mortgageTerm().setValue(30);
        SearchNationwideComponent.findMortgageRateButton().click();
    });

    it('should Filter the results  ', async () => {
        Page.waitForLoading();
        MortgageRatesResult.mortgageTypeFixRate().click();
        Page.waitForLoading();
        MortgageRatesResult.productFeeWithFee().click();
        Page.waitForLoading();
        const yearFixed = browser
            .getText('tr:nth-child(1) > th.notOnMobile.productHeading');
        assert.strictEqual(yearFixed[0], '2 yr Fixed');
        assert.strictEqual(yearFixed[1], '3 yr Fixed');
        assert.strictEqual(yearFixed[2], '5 yr Fixed');
        assert.strictEqual(yearFixed[3], '10 yr Fixed');
    });

    it('should see Start your remortgage application', async () => {
        Page.waitForLoading();
        MortgageRatesResult.fiveyearFixedmoreInfoAndApply().click();
        MortgageRatesResult.fiverYearFixedApplyButton().click();
        Page.waitForLoading();
        const message = browser
            .getText('section.contentSection.smallMargin > h1');
        assert.strictEqual(message, 'Start your Remortgage application');
    });
});
