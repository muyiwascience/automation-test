class MortgageRateComponent {
    getCookiePolicy() {
        return browser
            .element('#pageWrapper > div.cookiePolicy > a');
    }

    mortgageRate() {
        return browser
            .element('#MortgagesNavItem > a');
    }

    mortgageRateLink() {
        return browser
            .element('a=Mortgage rates');
    }
}
module.exports = new MortgageRateComponent();
